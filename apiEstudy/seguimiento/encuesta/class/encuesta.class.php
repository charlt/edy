<?php

class Encuesta{


    public static $query;


    public static function consulta($id) { 

        self::$query = query('SELECT encuesta_id, titulo, instruccion, persona_id FROM tr_encuesta
        WHERE encuesta_id = '.$id.' and estatus = 1 order by encuesta_id');
            
       $json = arreglo(self::$query);

        return $json;
        
    } 

    public static function numero(){

        return num(self::$query);
    }

    
    public static function consulta_campo_encuesta($id_encuesta,$id_switch_encuesta,$id_persona) { 

        self::$query = query('SELECT distinct tcf.campo_encuesta_id, pregunta, descripcion,ctc.tipo_campo_id, ctc.nombre_tipo_campo as tipo, obligatorio, tcf.mensaje_error,
        tcf.regex, tcf.campo_encuesta_padre_id, tcf.condicional
        from tr_campo_encuesta tcf
        join cat_tipo_campo ctc on ctc.tipo_campo_id = tcf.tipo_campo_id
        where encuesta_id = '.$id_encuesta.' and tcf.estatus = 1 order by tcf.campo_encuesta_id' );
    
        
       $json= array();
       while ($arreglo = arreglo(self::$query)){


        if($arreglo['tipo_campo_id']==3 || $arreglo['tipo_campo_id']==4 || $arreglo['tipo_campo_id']==5 ){

            $query_reactivos = query('SELECT reactivo_campo_encuesta_id as id_reactivo, reactivo_desc as texto from tr_reactivos_campo_encuesta
            where campo_encuesta_id = '.$arreglo['campo_encuesta_id'].' and estatus = 1');

            $reactivo=array();
            while($arreglo_reactivo=arreglo($query_reactivos)){
                array_push($reactivo, $arreglo_reactivo);

            }
            $arreglo['reactivos']=$reactivo;

        }
            $query_respuestas = query('SELECT respuesta from inter_campo_persona  
            where campo_encuesta_id='.$arreglo['campo_encuesta_id'].' and persona_id = '.$id_persona.' and switch_encuesta_id = '.$id_switch_encuesta);
            $respuestas=array();
            while($arreglo_respuesta=arreglo($query_respuestas)){
                array_push($respuestas, $arreglo_respuesta);
            }

            $arreglo['respuesta']=$respuestas;


            array_push($json,$arreglo);

       }

        return $json;
        
    } 


    public static function contesta($switch_encuesta_id, $id_persona) {

        self::$query = query('SELECT * from inter_encuesta_persona 
        where switch_encuesta_id='.$switch_encuesta_id.' and persona_id='.$id_persona);
        $arreglo=arreglo(self::$query);

        return $arreglo;
        
    } 

    // public static function validar_solicitud($id_persona) { 

    //     $query_obligatorio = query('SELECT tf.encuesta_id, titulo, instruccion, obligatorio, porcentaje, encuesta_persona_id, ifa.persona_id
    //     from tr_encuesta tf
    //     left join (select encuesta_persona_id,persona_id, encuesta_id from inter_encuesta_persona where persona_id = '.$id_persona.') as ifa on ifa.encuesta_id = tf.encuesta_id 
    //     where obligatorio = 1 and tf.estatus =1');
    
    //     $totales=num($query_obligatorio);
    //     $contestados=0;
    //     while($arreglo_obligatorio = arreglo($query_obligatorio)){
    //       if($arreglo_obligatorio['encuesta_persona_id'] != ''){
    //         $contestados++;
    //       }
    //     }
    //     $arreglo_persona = arreglo(query('select paso,info_personal_completa,cleaver_completo from tr_aspirante where aspirante_id ='.$id_aspirante));
    //     if($arreglo_persona['info_personal_completa']==1 /*&& $arreglo_persona['cleaver_completo']==1*/){       
    //         if($arreglo_persona['paso'] == '0' && $totales == $contestados){
    //         $edita_paso = update('tr_persona','paso=1','persona_id='.$id_persona);
    //         }else{
    //             $edita_paso=0;
    //         }
    //     }else{
    //         $edita_paso=0;
    //     }

    //     return $edita_paso;
        
    // } 


}




?>