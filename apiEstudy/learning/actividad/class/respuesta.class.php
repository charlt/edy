<?php

class Respuesta { 

    public static function preguntaAbierta($id_pregunta, $id_materia_fecha_actividad) {
      
        $query_respuesta = query('SELECT respuesta_id, materia_fecha_actividad_id, pregunta_id, respuesta  
        FROM tr_pa_respuesta 
        WHERE pregunta_id = '.$id_pregunta.' AND materia_fecha_actividad_id = '.$id_materia_fecha_actividad);   
        
        $json_respuesta= array();
        while ($arreglo_respuesta = arreglo($query_respuesta)){
            array_push($json_respuesta, $arreglo_respuesta);
        }
              
        if(num($query_respuesta)){
            $json = array("respuesta" => $json_respuesta);
        }else{
            $json = array();
        }

      return $json;
       
    }

    public static function cargaArchivos($id_pregunta, $id_materia_fecha_actividad) {
      
        $query_pregunta = query('SELECT respuesta_id, materia_fecha_actividad_id, pregunta_id, url_archivo 
        FROM tr_ad_respuesta 
        WHERE materia_fecha_actividad_id = '.$id_materia_fecha_actividad.' AND pregunta_id='.$id_pregunta.' AND estatus = 1');
    
        $json_pregunta= array();
        while ($arreglo_pregunta = arreglo($query_pregunta)){
            array_push($json_pregunta, $arreglo_pregunta);
        }
              
        if(num($query_pregunta)){
            $json = array("contenido" => $json_pregunta);
        }else{
            $json = array();
        }

        return $json;
       
    }
    
    public static function diagnostica($id_pregunta, $id_materia_fecha_actividad) {
      
        $query_respuesta = query('SELECT respuesta_id, pregunta_id, materia_fecha_actividad_id, respuesta1,
        respuesta2, respuesta3  
        FROM tr_qq_respuesta 
        WHERE pregunta_id = '.$id_pregunta.' AND materia_fecha_actividad_id = '.$id_materia_fecha_actividad);
       
        $json_respuesta= array();
        while ($arreglo_respuesta = arreglo($query_respuesta)){
            array_push($json_respuesta, $arreglo_respuesta);
        }
              
        if(num($query_respuesta)){
            $json = array("respuesta" => $json_respuesta);
        }else{
            $json = array();
        }

        return $json;
       
    }
 
    public static function cuadroComparativo($id_pregunta, $id_materia_fecha_actividad) {
        
        $query_pregunta = query('SELECT tr.respuesta_id, tr.pregunta_id, tr.materia_fecha_actividad_id,
        tr.cuadro_comparativo_desc, numero_elementos, numero_categorias, conclusion 
        FROM tr_cc_pregunta tp 
        JOIN tr_cc_respuesta tr ON tr.pregunta_id = tp.pregunta_id 
        WHERE tp.pregunta_id = '.$id_pregunta.' AND tr.materia_fecha_actividad_id = '.$id_materia_fecha_actividad.' AND tp.estatus = 1 AND tr.estatus = 1');
        
        $arreglo_pregunta = arreglo($query_pregunta);
        $json_pregunta = $arreglo_pregunta;
                
        if(num($query_pregunta)){
            $id_respuesta = $arreglo_pregunta['respuesta_id'];

            $query_elemento = query('SELECT elemento_id, respuesta_id, elemento_desc 
            FROM tr_cc_elementos WHERE respuesta_id = '.$id_respuesta.' AND estatus = 1');
            $json_elemento = array();
            while ($arreglo_elemento = arreglo($query_elemento)){
                array_push($json_elemento, $arreglo_elemento);
            }
            if(num($query_elemento)) $json_pregunta['elementos'] = $json_elemento;

            $query_categoria = query('SELECT categoria_id, respuesta_id, categoria_desc 
            FROM tr_cc_categorias WHERE respuesta_id = '.$id_respuesta.' AND estatus=1');
            $json_categoria = array();
            while ($arreglo_categoria = arreglo($query_categoria)){
               array_push($json_categoria, $arreglo_categoria);
            }
            if(num($query_categoria)) $json_pregunta['categorias'] = $json_categoria;

            $query_respuesta = query('SELECT trf.respuesta_final_id,tr.respuesta_id, pregunta_id, te.elemento_id, tc.categoria_id, respuesta
            FROM tr_cc_respuesta tr
            join tr_cc_categorias tc on tc.respuesta_id = tr.respuesta_id
            join tr_cc_elementos te on te.respuesta_id = tr.respuesta_id
            join tr_cc_respuestas_finales trf on tc.categoria_id = trf.categoria_id and te.elemento_id = trf.elemento_id
            WHERE materia_fecha_actividad_id = '.$id_materia_fecha_actividad.' and tc.respuesta_id = '.$id_respuesta.'  and tr.estatus=1');

            $json_respuesta= array();
            while ($arreglo_respuesta = arreglo($query_respuesta)){
                array_push($json_respuesta,$arreglo_respuesta);
            }
            if(num($query_respuesta)) $json_pregunta['respuestas'] = $json_respuesta;

            $json = array("respuesta" => $json_pregunta);
        }else{
            $json = array();
        }

        return $json;
       
    }

    public static function mapaCognitivo($id_pregunta, $id_materia_fecha_actividad) {
        
        $query_pregunta = query('SELECT tr.respuesta_id, tr.pregunta_id, tr.materia_fecha_actividad_id,
        tr.mapa_cognitivo_desc, tr.numero_elementos, tr.numero_categorias, tr.aspecto_comun
        FROM tr_mc_pregunta tp
        JOIN tr_mc_respuesta tr ON tr.pregunta_id = tp.pregunta_id
        WHERE tp.pregunta_id = '.$id_pregunta.' AND tr.materia_fecha_actividad_id = '.$id_materia_fecha_actividad.' AND tp.estatus = 1 and tr.estatus = 1');
        
        $arreglo_pregunta = arreglo($query_pregunta);
        $json_pregunta = $arreglo_pregunta;
                
        if(num($query_pregunta)){
            $id_respuesta = $arreglo_pregunta['respuesta_id'];

            $query_elemento = query('SELECT elemento_id, respuesta_id, elemento_desc 
            FROM tr_mc_elementos WHERE respuesta_id = '.$id_respuesta.' and estatus=1');
            $json_elemento = array();
            while ($arreglo_elemento = arreglo($query_elemento)){
               array_push($json_elemento, $arreglo_elemento);
            }
            if(num($query_elemento)) $json_pregunta['elementos'] = $json_elemento;

            $query_categoria = query('SELECT categoria_id, respuesta_id, categoria_desc 
            FROM tr_mc_categorias WHERE respuesta_id = '.$id_respuesta.' and estatus=1');
            $json_categoria = array();
            while ($arreglo_categoria = arreglo($query_categoria)){
                array_push($json_categoria, $arreglo_categoria);
            }
            if(num($query_categoria)) $json_pregunta['categorias'] = $json_categoria;

            $query_respuesta = query('SELECT trf.respuesta_final_id, tr.respuesta_id, pregunta_id, te.elemento_id, tc.categoria_id, respuesta
            FROM tr_mc_respuesta tr
            join tr_mc_categorias tc on tc.respuesta_id = tr.respuesta_id
            join tr_mc_elementos te on te.respuesta_id = tr.respuesta_id
            join tr_mc_respuestas_finales trf on tc.categoria_id = trf.categoria_id and te.elemento_id = trf.elemento_id
            WHERE materia_fecha_actividad_id = '.$id_materia_fecha_actividad.' and tc.respuesta_id = '.$id_respuesta.'  and tr.estatus=1');
            $json_respuesta = array();
            while ($arreglo_respuesta = arreglo($query_respuesta)){
                array_push($json_respuesta,$arreglo_respuesta);
            }
            if(num($query_respuesta)) $json_pregunta['respuestas'] = $json_respuesta;

            $json = array("respuesta" => $json_pregunta);
        }else{
            $json = array();
        }

        return $json;
       
    }

    public static function foro($id_pregunta, $id_materia_fecha_actividad) {
        
        $query_tmfa = query('SELECT asignatura_grupo_id 
        FROM tr_materia tm 
        JOIN tr_materia_fecha_actividad tmfa ON tmfa.materia_id = tm.materia_id WHERE materia_fecha_actividad_id='.$id_materia_fecha_actividad);

        $arreglo_tmfa = arreglo($query_tmfa);

        //SERVICIO DE CONSULTA DE SESIÓN
        $query_respuesta = query("SELECT DISTINCT respuesta_id,respuesta_padre_id,pregunta_id,tr.persona_id, nombre,primer_apellido,segundo_apellido,respuesta,
        flg_moderador,contenido, '#2e86c1' as color, tr.fecha_creacion 
        FROM tr_fr_respuesta tr 
        JOIN ".$GLOBALS["db_datosGenerales"].".personas p ON p.persona_id = tr.persona_id 
        WHERE pregunta_id = ".$id_pregunta." and asignatura_grupo_id= ".$arreglo_tmfa["asignatura_grupo_id"]." AND tr.estatus = 1 AND respuesta_padre_id IS null");
        
        $tmp_json= array();
        while ($arreglo = arreglo($query_respuesta)){
            $query1 = query("SELECT DISTINCT respuesta_id,respuesta_padre_id,pregunta_id,tr.persona_id, nombre,primer_apellido,segundo_apellido,respuesta,
            flg_moderador,contenido, '#2e86c1' as color, tr.fecha_creacion 
            FROM tr_fr_respuesta tr 
            JOIN ".$GLOBALS["db_datosGenerales"].".personas p ON p.persona_id = tr.persona_id 
            WHERE pregunta_id = ".$id_pregunta." and tr.estatus = 1 and respuesta_padre_id =".$arreglo["respuesta_id"]);
            
            $tmp_json1 = array();
            while ($arreglo1 = arreglo($query1)){
            array_push($tmp_json1, $arreglo1);
        }  
            $arreglo['sub_respuesta'] = $tmp_json1;
            array_push($tmp_json, $arreglo);
        }

        if(num($query_respuesta)){
            $json = array("respuesta" => $tmp_json);
        }else{
            $json = array();
        }

        return $json;
       
    }
    

}

?>