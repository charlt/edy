<?php

class Formulario{


    public static $query;


    public static function consulta($id) { 

        self::$query = query('SELECT formulario_id, titulo, instruccion, persona_id FROM tr_formulario
        WHERE formulario_id = '.$id.' and estatus = 1 order by formulario_id');
            
       $json = arreglo(self::$query);

        return $json;
        
    } 

    public static function numero(){

        return num(self::$query);
    }

    
    public static function consulta_campo_formulario($id_formulario,$id_aspirante) { 

        self::$query = query('SELECT distinct tcf.campo_formulario_id, pregunta, descripcion,ctc.tipo_campo_id, ctc.nombre_tipo_campo as tipo, obligatorio, tcf.mensaje_error,
        tcf.regex, tcf.campo_formulario_padre_id, tcf.condicional
        from tr_campo_formulario tcf
        join cat_tipo_campo ctc on ctc.tipo_campo_id = tcf.tipo_campo_id
        where formulario_id = '.$id_formulario.' and tcf.estatus = 1 order by tcf.campo_formulario_id' );
    
        
       $json= array();
       while ($arreglo = arreglo(self::$query)){


        if($arreglo['tipo_campo_id']==3 || $arreglo['tipo_campo_id']==4 || $arreglo['tipo_campo_id']==5 ){

            $query_reactivos = query('SELECT reactivo_campo_id as id_reactivo, reactivo_desc as texto from tr_reactivos_campo
            where campo_formulario_id = '.$arreglo['campo_formulario_id'].' and estatus = 1');

            $reactivo=array();
            while($arreglo_reactivo=arreglo($query_reactivos)){
                array_push($reactivo, $arreglo_reactivo);

            }
            $arreglo['reactivos']=$reactivo;

        }
            $query_respuestas = query('SELECT respuesta from inter_campo_aspirante  
            where campo_formulario_id='.$arreglo['campo_formulario_id'].' and aspirante_id = '.$id_aspirante);
            $respuestas=array();
            while($arreglo_respuesta=arreglo($query_respuestas)){
                array_push($respuestas, $arreglo_respuesta);
            }

            $arreglo['respuesta']=$respuestas;


            array_push($json,$arreglo);

       }

        return $json;
        
    } 


    public static function contesta($id_formulario, $id_aspirante) {

        self::$query = query('SELECT * from inter_formulario_aspirante 
        where formulario_id='.$id_formulario.' and aspirante_id='.$id_aspirante);
        $arreglo=arreglo(self::$query);

        return $arreglo;
        
    } 

    public static function validar_solicitud($id_aspirante) { 

        $query_obligatorio = query('select  tf.formulario_id, titulo, instruccion, persona_id, obligatorio,porcentaje, formulario_aspirante_id, ifa.aspirante_id 
             FROM tr_formulario tf
             join inter_formulario_carrera ifc on ifc.formulario_id = tf.formulario_id        
             left join (select formulario_aspirante_id,aspirante_id ,formulario_id from inter_formulario_aspirante where aspirante_id = '.$id_aspirante.') as ifa  on ifa.formulario_id = tf.formulario_id
             join tr_aspirante ta on ta.carrera_id = ifc.carrera_id
             WHERE ta.aspirante_id ='.$id_aspirante.' and tf.estatus=1 and tf.obligatorio = 1 order by formulario_id');
    
        $totales=num($query_obligatorio);
        $contestados=0;
        while($arreglo_obligatorio = arreglo($query_obligatorio)){
          if($arreglo_obligatorio['formulario_aspirante_id'] != ''){
            $contestados++;
          }
        }
        
        
        $arreglo_aspirante = arreglo(query('select paso,info_personal_completa,cleaver_completo from tr_aspirante where aspirante_id ='.$id_aspirante));
        if($arreglo_aspirante['info_personal_completa']==1 /*&& $arreglo_aspirante['cleaver_completo']==1*/){       
            if($arreglo_aspirante['paso'] == '0' && $totales == $contestados){
            $edita_paso = update('tr_aspirante','paso=1','aspirante_id='.$id_aspirante);
            }else{
                $edita_paso=0;
            }
        }else{
            $edita_paso=0;
        }

        return $edita_paso;
        
    } 


}




?>