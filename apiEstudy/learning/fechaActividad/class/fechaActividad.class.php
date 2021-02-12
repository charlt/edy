<?php

class FechaActividad{ 
    
    public static $query;

        
    public static function consulta_actividad_unica($id_materia_fecha_actividad ) { 

        self::$query = query('SELECT tmfa.*,tm.alumno_id, cea.estatus_actividad
        FROM tr_materia_fecha_actividad  tmfa
        join cat_estatus_actividad cea on cea.estatus_actividad_id = tmfa.estatus_actividad_id
        join tr_materia tm on tm.materia_id = tmfa.materia_id
        where materia_fecha_actividad_id = '.$id_materia_fecha_actividad .' order by materia_fecha_actividad_id desc');

        $arreglo = arreglo(self::$query);

       return $arreglo;
        
    } 
    
    public static function consulta_actividad($id_materia, $id_actividad ) { 

        self::$query = query('SELECT tmfa.*, cea.estatus_actividad
        FROM tr_materia_fecha_actividad  tmfa
        join cat_estatus_actividad cea on cea.estatus_actividad_id = tmfa.estatus_actividad_id
        where tmfa.actividad_id ='.$id_actividad.' and materia_id = '.$id_materia .' and tmfa.estatus = 1 order by materia_fecha_actividad_id desc');

        $arreglo = arreglo(self::$query);

       return $arreglo;
        
    } 

    public static function consulta_dummy( $id_actividad ) { 

        self::$query = query('SELECT tmfa.*, cea.estatus_actividad
        FROM tr_materia_fecha_actividad  tmfa
        join cat_estatus_actividad cea on cea.estatus_actividad_id = tmfa.estatus_actividad_id
        where actividad_id ='.$id_actividad.' and materia_id = 0 
        order by materia_fecha_actividad_id desc');

        if(num(self::$query)){
            $arreglo = arreglo(self::$query);
        }else{

            $query_actividad = query('select tipo_actividad_id from tr_actividad where actividad_id = '.$id_actividad);
            $arreglo_actividad = arreglo($query_actividad);
            
            $ultimo_id = self::inserta_actividad($id_actividad,0,1,$arreglo_actividad['tipo_actividad_id']);

            $arreglo['materia_fecha_actividad_id'] = $ultimo_id;
            $arreglo['intento_num'] = 1;
            $arreglo['estatus_actividad_id'] = 1;
            $arreglo['calificacion'] = null;
        }
        

       return $arreglo;
        
    } 


    public static function numero(){

        return num(self::$query);
    }

    public static function inserta_actividad($id_actividad, $id_materia, $intento_num,$id_tipo_actividad){

        if($id_tipo_actividad == 1){
            $id_estatus_actividad = 8;
        }else{
            $id_estatus_actividad = 1;
        }

       
        $inserta = inserta_last_id('tr_materia_fecha_actividad', 'actividad_id, materia_id,
        calificacion, intento_num, fecha_creacion, estatus, estatus_actividad_id',
        ''.$id_actividad.', '.$id_materia.',null,'.$intento_num.', now(), 1, '.$id_estatus_actividad);
        
        return $inserta;

    }

    
    public static function inactiva_actividades( $id_actividad, $id_materia){
        
        $edita = update('tr_materia_fecha_actividad',
        'estatus  = 0',
        'materia_id = '.$id_materia.' and actividad_id ='.$id_actividad);

        return $edita;
    }


    public static function modifica_actividad( $id_materia_fecha_actividad, $calificacion,$id_estatus_actividad){        
        $edita = update('tr_materia_fecha_actividad',
        'calificacion = '.$calificacion.',
        fecha_actividad = now(),
        estatus_actividad_id = '.$id_estatus_actividad,
        'materia_fecha_actividad_id = '.$id_materia_fecha_actividad);

        return $edita;
    }
    
    public static function inserta_calificacion($id_datos_pregunta, $id_materia_fecha_actividad, $valor, $calificacion){
        
        $inserta = inserta('tr_respuesta','datos_pregunta_id, materia_fecha_actividad_id, valor, calificacion, fecha_creacion, estatus',
         ''.$id_datos_pregunta.','.$id_materia_fecha_actividad.','.$valor.','.$calificacion.', now(),1');

        return $inserta;
    }

    public static function edita_calificacion($id_datos_pregunta, $id_materia_fecha_actividad, $valor,$calificacion){
        
        $edita = update('tr_respuesta',
        'calificacion = '.$calificacion.',
         valor = '.$valor,
         'datos_pregunta_id = '.$id_datos_pregunta.' and materia_fecha_actividad_id='.$id_materia_fecha_actividad);

        return $edita;
    }
    
    public static function consulta_respuestas($id_materia_fecha_actividad, $id_datos_pregunta) { 

        $query = query('SELECT *
        FROM tr_respuesta  where materia_fecha_actividad_id ='.$id_materia_fecha_actividad.' and datos_pregunta_id = '.$id_datos_pregunta );

       return $query;
    }
    

    public static function calificacion_om($id_pregunta,$id_materia_fecha_actividad){
        
        $query = (query('SELECT t.reactivo_id, tr.ponderacion from tr_om_respuesta t
        join tr_om_reactivos tr on tr.reactivo_id = t.reactivo_id
        where tr.pregunta_id= '.$id_pregunta.' and materia_fecha_actividad_id='.$id_materia_fecha_actividad));
        $calificacion=0;
        $total_respuestas = num($query);
        while($arreglo = arreglo($query)){
            // print_r($arreglo);
            $calificacion+=($arreglo['ponderacion']/100);
        }

        $calificacion /=  $total_respuestas;

        return $calificacion;
    }

    public static function calificacion_dd($id_pregunta,$id_materia_fecha_actividad){

        $query_reactivos = query('SELECT tr.reactivo_id
        from tr_dd_reactivos tr
        where pregunta_id = '.$id_pregunta.'  and tr.estatus = 1');
        // echo $valor_respuesta;
        
        $query_respuestas = query('SELECT respuesta_id,t.orden as a, tr.orden as b from tr_dd_respuesta t 
        join tr_dd_reactivos tr on tr.reactivo_id = t.reactivo_id
        where pregunta_id ='.$id_pregunta.' and materia_fecha_actividad_id ='.$id_materia_fecha_actividad);

        $num_respuestas = num($query_respuestas);
        $num_reactivos = num($query_reactivos);
        
        $calculo_redaccion=0;
        if($num_respuestas == $num_reactivos && $num_respuestas > 0) {

            $valor_respuesta=100/$num_reactivos;
            $aciertos=0;
            $calificacion_actividad=0;
                while($arreglo_comparacion= arreglo($query_respuestas)){
                        // print_r($arreglo_comparacion);
                        if($arreglo_comparacion['a']===$arreglo_comparacion['b']){
                            $aciertos++;  
                        }
                    }
                    $calificacion_actividad += ($aciertos*$valor_respuesta)/100;
        }else{
            $calificacion_actividad = NULL;
        }
        return $calificacion_actividad;
    }


    public static function calificacion_rc($id_pregunta,$id_materia_fecha_actividad){

        $query_reactivos = query('SELECT tr.reactivo_id
        from tr_rc_reactivos tr
        where pregunta_id = '.$id_pregunta.'  and tr.estatus = 1'
        );

        $query_respuestas = query('SELECT distinct te.columna_a_id as a_reactivo, te.columna_b_id as b_reactivo, tr.columna_a_id as a_respuesta, tr.columna_b_id as b_respuesta 
        from tr_rc_respuesta te
        join tr_rc_reactivos tr on tr.reactivo_id = te.reactivo_id 
        where pregunta_id = '.$id_pregunta.' and materia_fecha_actividad_id = '.$id_materia_fecha_actividad);

        // echo $valor_respuesta;
        $num_respuestas = num($query_respuestas);
        $num_reactivos = num($query_reactivos);


        if($num_respuestas >= $num_reactivos && $num_respuestas > 0) {

            $valor_respuesta=100/$num_reactivos;
            //reutilizamos el query en respuestas

            $aciertos=0;
            $calificacion_actividad=0;
            while($arreglo_respuestas = arreglo($query_respuestas)){
                // print_r($arreglo_comparacion);
                if($arreglo_respuestas['a_reactivo']==$arreglo_respuestas['a_respuesta'] && $arreglo_respuestas['b_reactivo']==$arreglo_respuestas['b_respuesta']){
                    // echo "ya entro a las respuestas correctas";
                    // echo $valor_respuesta.',';
                    $aciertos++;  
                }
            }
            $calificacion_actividad += ($aciertos*$valor_respuesta)/100;
        }else{
            // echo "No ha contestado todos los reactivos";
            $calificacion_actividad = null;
        }
        return $calificacion_actividad;
    }

    public static function calificacion_zi($id_pregunta,$id_materia_fecha_actividad){
        
        $query_reactivos = query('SELECT tr.reactivo_id
        from tr_zi_reactivos tr
        where pregunta_id = '.$id_pregunta.'  and tr.estatus = 1'
        );
        $query_respuestas = query('SELECT 
        tr.posicion_x, tr.posicion_y, trv.alto, trv.ancho,trv.posicion_x as x_inicial, trv.posicion_y as y_inicial
        from tr_zi_respuesta tr
        join tr_zi_reactivos trv on trv.reactivo_id = tr.reactivo_id
        where pregunta_id = '.$id_pregunta.' and materia_fecha_actividad_id= '.$id_materia_fecha_actividad.'
        and tr.estatus = 1'
        );

        $num_respuestas = num($query_respuestas);
        $num_reactivos = num($query_reactivos);
        

        if($num_respuestas == $num_reactivos && $num_respuestas > 0){
        
            $valor_respuesta=100/$num_reactivos;
            //reutilizamos el query en respuestas

            $aciertos=0;
            $calificacion_actividad=0;
            
            while($arreglo1=arreglo($query_respuestas)){
                $limite_x=$arreglo1['x_inicial']+$arreglo1['ancho'];
                $limite_y=$arreglo1['y_inicial']+$arreglo1['alto'];
            if(
                    (
                        ($arreglo1['x_inicial']<$limite_x && $arreglo1['posicion_x']>$arreglo1['x_inicial'] && $arreglo1['posicion_x']<$limite_x)||
                        ($arreglo1['x_inicial']>$limite_x && $arreglo1['posicion_x']<$arreglo1['x_inicial'] && $arreglo1['posicion_x']>$limite_x)
                    ) 
                    && 
                    (
                        ($arreglo1['y_inicial']<$limite_y && $arreglo1['posicion_y']>$arreglo1['y_inicial'] && $arreglo1['posicion_y']<$limite_y) ||
                        ($arreglo1['y_inicial']>$limite_y && $arreglo1['posicion_y']<$arreglo1['y_inicial'] && $arreglo1['posicion_y']>$limite_y)
                    )
                ){
                    $aciertos++; 
                }
            }

            
            $calificacion_actividad += ($aciertos*$valor_respuesta)/100;
        }else{
            $calificacion_actividad = null;

        }
        return $calificacion_actividad;

    }

    

} 