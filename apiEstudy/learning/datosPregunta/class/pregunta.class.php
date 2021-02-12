<?php

class Pregunta{ 
    //public $aMemberVar = 'aMemberVar Member Variable'; 
    //public $aFuncName = 'aMemberFunc'; 
    public static $query;

    
    public static function consulta($id){
        

        $query = query('select tdp.datos_pregunta_id,actividad_id,ctp.tipo_pregunta_id ,dificultad_id,aleatorio as shuffle,ctp.reactivos,ponderacion,orden,retroalimentacion,numero_intentos
        FROM tr_datos_pregunta tdp
        join cat_tipo_pregunta ctp on ctp.tipo_pregunta_id = tdp.tipo_pregunta_id
        WHERE datos_pregunta_id = '.$id.' and tdp.estatus = 1');

        if(num($query)){
            $arreglo = arreglo($query);
            $arreglo_contenido = self::contenido_pregunta($id,$arreglo['tipo_pregunta_id']);
            if($arreglo_contenido){
                $arreglo['pregunta_id'] =   $arreglo_contenido ['pregunta_id'];
                $arreglo['pregunta'] =   $arreglo_contenido ['pregunta'];
                $arreglo['contenido_pregunta'] =   $arreglo_contenido;
            }else{
                $arreglo['pregunta_id'] =   null;
                $arreglo['pregunta'] = null;
                $arreglo['contenido_pregunta'] = null;
            }
            

        }else{
            $arreglo = null;
        }

        return $arreglo;

    }

    
    
    public static function contenido_pregunta($id_datos_pregunta,$id_tipo_pregunta){

        $tabla = self::obtiene_tabla($id_tipo_pregunta, 'pregunta');

        $arreglo = arreglo(query('select * from '.$tabla.' t1 join tr_datos_pregunta tdp on
        tdp.datos_pregunta_id = t1.datos_pregunta_id   where  t1.datos_pregunta_id = '.$id_datos_pregunta));

        return $arreglo;

    }


    

    public static function obtiene_query_respuesta($id_tipo_pregunta,$id_datos_pregunta,$id_materia_fecha_actividad){

        if($id_tipo_pregunta==1 ||$id_tipo_pregunta==6||$id_tipo_pregunta==7 || $id_tipo_pregunta==8 || $id_tipo_pregunta==9 || $id_tipo_pregunta==10|| $id_tipo_pregunta==11){
        
            $tablars = self::obtiene_tabla($id_tipo_pregunta, 'respuesta');
            $tablarv = self::obtiene_tabla($id_tipo_pregunta, 'pregunta');

            $query = query('SELECT tr.respuesta_id, tr.pregunta_id
            from '.$tablars.' tr
            join '.$tablarv.' tp on tp.pregunta_id = tr.pregunta_id
            where tp.datos_pregunta_id = '.$id_datos_pregunta.'  and materia_fecha_actividad_id ='.$id_materia_fecha_actividad);

        }else{
        
            $tablars = self::obtiene_tabla($id_tipo_pregunta, 'respuesta');
            $tablapr = self::obtiene_tabla($id_tipo_pregunta, 'pregunta');
            $tablarv = self::obtiene_tabla($id_tipo_pregunta, 'reactivos');

            $query = query('select respuesta_id, ts.pregunta_id
            from '.$tablars.' tr
            join '.$tablarv.' ts on tr.reactivo_id=ts.reactivo_id
            join '.$tablapr.' tp on tp.pregunta_id=ts.pregunta_id
            where datos_pregunta_id = '.$id_datos_pregunta.' and materia_fecha_actividad_id ='.$id_materia_fecha_actividad);
        
        }   
        return $query;

    }

    public static function calificacion_om($id_datos_pregunta){

        $query = (query('SELECT t.reactivo_id, tr.ponderacion, td.ponderacion as valor from tr_om_respuesta t
        join tr_om_reactivos tr on tr.reactivo_id = t.reactivo_id
        join tr_om_pregunta tp on tp.pregunta_id = tr.pregunta_id
        join tr_datos_pregunta td on td.datos_pregunta_id =tp.datos_pregunta_id
        where td.datos_pregunta_id= '.$id_datos_pregunta));
        $calificaciom_om=0;
        while($arreglo = arreglo($query)){
            $calificaciom_om+=(($arreglo['ponderacion']*$arreglo['valor'])/100);
        }

        return $calificaciom_om;
    
        

    }

    public static function calificacion_rc($id_datos_pregunta){

        $arreglo = arreglo(query('SELECT count(respuesta_id) as contestadas ,count(tr.reactivo_id) as preguntas, td.ponderacion
        from tr_rc_respuesta t
        join tr_rc_reactivos tr on tr.reactivo_id = t.reactivo_id 
        join tr_rc_pregunta tp on tp.pregunta_id = tr.pregunta_id 
        join tr_datos_pregunta td on td.datos_pregunta_id = tp.datos_pregunta_id
        where td.datos_pregunta_id = '.$id_datos_pregunta));

        // echo $valor_respuesta;
        $calculo_redaccion=0;
        if($arreglo['contestadas'] == $arreglo['preguntas'] && $arreglo['contestadas']!='0') {

                    $valor_respuesta=100/$arreglo['contestadas'];


            $query_compara_reactivo = query('SELECT respuesta_id, te.columna_a_id as a_reactivo, te.columna_b_id as b_reactivo, tr.columna_a_id as a_respuesta, tr.columna_b_id as b_respuesta 
                from tr_rc_respuesta tr
                join tr_rc_reactivos te on te.reactivo_id = tr.reactivo_id 
                join tr_rc_pregunta tp on tp.pregunta_id = te.pregunta_id
                join tr_datos_pregunta td on td.datos_pregunta_id = tp.datos_pregunta_id
                where td.datos_pregunta_id ='.$id_datos_pregunta); 
                
                $calificacion_actividad=0;
                while($arreglo_comparacion= arreglo($query_compara_reactivo)){
                        // print_r($arreglo_comparacion);
                        if($arreglo_comparacion['a_reactivo']==$arreglo_comparacion['a_respuesta'] && $arreglo_comparacion['b_reactivo']==$arreglo_comparacion['b_respuesta']){
                            // echo "ya entro a las respuestas correctas";
                            // echo $valor_respuesta.',';
                            $calculo_redaccion+=($valor_respuesta);  
                        }
                    }
                    $calificacion_actividad += ($calculo_redaccion*$arreglo['ponderacion'])/100;
        }else{
            // echo "No ha contestado todos los reactivos";
            $calificacion_actividad = 0;
        }
        return $calificacion_actividad;
    }


    public static function calificacion_dd($id_datos_pregunta){

        $arreglo = arreglo(query('SELECT count(t.respuesta_id) as contestadas, count(tr.reactivo_id) as preguntas, td.ponderacion from tr_dd_respuesta t 
        join tr_dd_reactivos tr on tr.reactivo_id = t.reactivo_id
        join tr_dd_pregunta tp on tp.pregunta_id = tr.pregunta_id
        join tr_datos_pregunta td on td.datos_pregunta_id = tp.datos_pregunta_id
        where tp.datos_pregunta_id = '.$id_datos_pregunta));

        // echo $valor_respuesta;
        $calculo_redaccion=0;
        if($arreglo['contestadas'] == $arreglo['preguntas'] && $arreglo['contestadas']!='0') {

            $valor_respuesta=100/$arreglo['contestadas'];

            $query_compara_reactivo = query('SELECT t.orden as a, tr.orden as b from tr_dd_respuesta t 
            join tr_dd_reactivos tr on tr.reactivo_id = t.reactivo_id
            join tr_dd_pregunta tp on tp.pregunta_id = tr.pregunta_id
                join tr_datos_pregunta td on td.datos_pregunta_id = tp.datos_pregunta_id
                where td.datos_pregunta_id ='.$id_datos_pregunta); 
                
                $calificacion_actividad=0;
                while($arreglo_comparacion= arreglo($query_compara_reactivo)){
                        // print_r($arreglo_comparacion);
                        if($arreglo_comparacion['a']==$arreglo_comparacion['b']){
                            // echo "ya entro a las respuestas correctas";
                            // echo $valor_respuesta.',';
                            $calculo_redaccion+=($valor_respuesta);  
                        }
                    }
                    // echo $calculo_redaccion;
                    echo $arreglo_comparacion['ponderacion'];
                    $calificacion_actividad += ($calculo_redaccion*$arreglo['ponderacion'])/100;
                    
        }else{
            // echo "No ha contestado todos los reactivos";
            $calificacion_actividad = 0;
        }
        return $calificacion_actividad;
    }


    
    public static function calificacion_zi($id_datos_pregunta){

        $arreglo = arreglo(query('SELECT count(t.respuesta_id) as contestadas,
         count(tr.reactivo_id) as preguntas, td.ponderacion from tr_zi_respuesta t 
        join tr_zi_reactivos tr on tr.reactivo_id = t.reactivo_id
        join tr_zi_pregunta tp on tp.pregunta_id = tr.pregunta_id
        join tr_datos_pregunta td on td.datos_pregunta_id = tp.datos_pregunta_id
        where tp.datos_pregunta_id = '.$id_datos_pregunta));

        if($arreglo['contestadas'] == $arreglo['preguntas'] && $arreglo['contestadas']!='0'){
        //    print($arreglo['contestadas'].',');
            $valor_respuesta=100/$arreglo['contestadas'];
        
           $query_reactivos=query('SELECT t.posicion_x, t.posicion_y, tr.alto, tr.ancho,
            tr.posicion_x as x_inicial, tr.posicion_y as y_inicial from tr_zi_respuesta t
        join tr_zi_reactivos tr on tr.reactivo_id = t.reactivo_id
        join tr_zi_pregunta tp on tp.pregunta_id = tr.pregunta_id
        join tr_datos_pregunta td on td.datos_pregunta_id = tp.datos_pregunta_id
        where tp.datos_pregunta_id ='.$id_datos_pregunta);
            $calculo_redaccion=0;
            $calificacion_actividad=0;
            while($arreglo1=arreglo($query_reactivos)){
                $limite_x=$arreglo1['x_inicial']+$arreglo1['ancho'];
                // echo $limite_x.',';
                $limite_y=$arreglo1['y_inicial']+$arreglo1['alto'];
                // echo $limite_y.',';
                print($arreglo1['x_inicial'].',');
                print($arreglo1['y_inicial'].'.');
                print($arreglo1['posicion_x'].',');
                print($arreglo1['posicion_y'].',');

               
 if((($arreglo1['x_inicial']<$limite_x && $arreglo1['posicion_x']>$arreglo1['x_inicial'] && $arreglo1['posicion_x']<$limite_x)||
 ($arreglo1['x_inicial']>$limite_x && $arreglo1['posicion_x']<$arreglo1['x_inicial'] && $arreglo1['posicion_x']>$limite_x)) 
 && (($arreglo1['y_inicial']<$limite_y && $arreglo1['posicion_y']>$arreglo1['y_inicial'] && $arreglo1['posicion_y']<$limite_y)||
 ($arreglo1['y_inicial']>$limite_y && $arreglo1['posicion_y']<$arreglo1['y_inicial'] && $arreglo1['posicion_y']>$limite_y))){
 $calculo_redaccion+=($valor_respuesta);
    // echo "entro";  
                }
            }
            // echo $calculo_redaccion;
            // echo $arreglo['ponderacion'];
                    $calificacion_actividad += ($calculo_redaccion*$arreglo['ponderacion'])/100;
                // echo $calificacion_actividad;
        }else{
            $calificacion_actividad = 0;

        }
        return $calificacion_actividad;

    }
    
    public static function obtiene_tabla($id_tipo_pregunta, $tipo) { 

             
        $arreglo_tipo_pregunta = arreglo(query('select * from cat_tipo_pregunta where tipo_pregunta_id ='.$id_tipo_pregunta));

        

       return 'tr_'.$arreglo_tipo_pregunta['tipo_pregunta_clave'].'_'.$tipo;
    
    } 

    public static function suma(){

        return sum(self::$query);
    }


    public static function orden($orden_nuevo,$id_actividad,$id_datos_pregunta){
           //1er paso: query de todos los ids datos_pregunta que existen con la actividad_id
           $query_tmp = query('SELECT orden, actividad_id, datos_pregunta_id from tr_datos_pregunta where actividad_id = '.$id_actividad.' and estatus = 1');
           $query_tmp_act = query('SELECT orden from tr_datos_pregunta where datos_pregunta_id ='.$id_datos_pregunta);
           $arreglo_tmp_act = arreglo($query_tmp_act);
   
           $orden_anterior = $arreglo_tmp_act['orden'];
   
           //2do paso; update del parametro id_actividad donde se actualiza el orden nuevo
           $update = update('tr_datos_pregunta', 'orden = '.$orden_nuevo.'', 'datos_pregunta_id ='.$id_datos_pregunta);
           //3er paso: usar este while para comparar los valores de la activdad con el orden nuevo
           $json= array();
           while ($arreglo = arreglo($query_tmp)){
               //aqui se van a pintar los valores del orden por arreglo
               if($arreglo['datos_pregunta_id'] != $id_datos_pregunta){
                   // echo $arreglo['orden'].'='.$orden_anterior.'?'.$arreglo['orden'].'='.$orden_nuevo.'?,';     
   
               //4to paso comparaciòn del orden anterior con el arreglo[orden]
               if($arreglo['orden'] > $orden_anterior ){
                   if($arreglo['orden'] > $orden_nuevo ){
                       // echo 'queda igual';
                   }else{
                       // $arreglo['orden']=orden($arreglo['orden']-1);
                       $resta=$arreglo['orden']-1;
                       $update=update("tr_datos_pregunta","orden='".$resta."'","datos_pregunta_id='".$arreglo['datos_pregunta_id']."'");
                       // echo 'se resta';
                   }
               }else{
                 if($arreglo['orden'] < $orden_nuevo){
                   // echo 'queda igual';
                 }else{
                   //   $arreglo['orden']=orden($arreglo['orden']+1);
                   $suma=$arreglo['orden']+1;
                   $update=update("tr_datos_pregunta","orden='".$suma."'","datos_pregunta_id='".$arreglo['datos_pregunta_id']."'");
                   // echo 'se suma'.'<br>';
                 }  
               }
           }else{
               // echo ' no hace nada';
           }
 
       } 

        return $json;
    }

} 
   





