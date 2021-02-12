<?php

class Respuesta{


    public static function inserta_edita_pa($materia_fecha_actividad_id, $pregunta_id,$respuesta, $id_materia_fecha_actividad){

        $estatus_respuesta_pa=update('tr_pa_respuesta','estatus=0','materia_fecha_actividad_id='.$id_materia_fecha_actividad);

        $inserta_respuesta_pa=inserta('tr_pa_respuesta',
        'materia_fecha_actividad_id, pregunta_id, respuesta, fecha_creacion, estatus',
        ''.$materia_fecha_actividad_id.', '.$pregunta_id.',"'.$respuesta.'",now(),1');
                
        
        return $inserta_respuesta_pa;
    }   
    
    
   
    public static function inserta_edita_ad($materia_fecha_actividad_id, $pregunta_id,$url_archivo, $id_materia_fecha_actividad){

        $estatus_respuesta_ad=update('tr_ad_respuesta','estatus=0','materia_fecha_actividad_id='.$id_materia_fecha_actividad);

        $inserta_respuesta_ad=inserta_last_id('tr_ad_respuesta',
        'materia_fecha_actividad_id, pregunta_id, url_archivo, fecha_creacion, estatus',
        ''.$materia_fecha_actividad_id.', '.$pregunta_id.',"'.$url_archivo.'",now(),1');
                
        return $inserta_respuesta_ad;
    }   
    
    public static function inserta_edita_qq( $pregunta_id, $materia_fecha_actividad_id, $respuesta1, $respuesta2, $respuesta3, $id_materia_fecha_actividad){

        // $estatus_respuesta_ad=update('tr_qq_respuesta','estatus=0','materia_fecha_actividad_id='.$id_materia_fecha_actividad);

        $inserta_respuesta_ad=inserta('tr_qq_respuesta',
        'pregunta_id, materia_fecha_actividad_id,  respuesta1, respuesta2, respuesta3, fecha_creacion, estatus',
        ' '.$pregunta_id.','.$materia_fecha_actividad_id.',"'.$respuesta1.'","'.$respuesta2.'","'.$respuesta3.'",now(),1');
                
        
        return $inserta_respuesta_ad;
    }   

    
    public static function inserta_edita_cc( $pregunta_id, $materia_fecha_actividad_id, $cuadro_comparativo_desc, $numero_elementos, $numero_categorias, $conclusion, $id_materia_fecha_actividad, $respuesta_id){

        $estatus_respuesta_cc=update('tr_cc_respuesta','estatus=0','materia_fecha_actividad_id='.$id_materia_fecha_actividad);

        $inserta_respuesta_cc=inserta_last_id('tr_cc_respuesta',
        'pregunta_id, materia_fecha_actividad_id,  cuadro_comparativo_desc, numero_elementos, numero_categorias, conclusion, fecha_creacion, estatus',
        ' '.$pregunta_id.','.$materia_fecha_actividad_id.',"'.$cuadro_comparativo_desc.'",'.$numero_elementos.','.$numero_categorias.',"'.$conclusion.'",now(),1');
        
        $query_elemento=query('SELECT * from tr_cc_elementos where respuesta_id='.$respuesta_id);
        while($arreglo_elemento=arreglo($query_elemento)){
            $inserta_elementos=inserta('tr_cc_elementos','respuesta_id, elemento_desc,fecha_creacion, estatus',
            ''.$inserta_respuesta_cc.',"'.$arreglo_elemento['elemento_desc'].'", now() , 1');
        }

        $query_categoria=query('SELECT * from tr_cc_categorias where respuesta_id='.$respuesta_id);
        while($arreglo_categoria=arreglo($query_categoria)){
            $inserta_categoria=inserta('tr_cc_categorias','respuesta_id, categoria_desc,fecha_creacion, estatus',
            ''.$inserta_respuesta_cc.',"'.$arreglo_categoria['categoria_desc'].'", now() , 1');
        }

        $array_viejo=array();
        $query_respuesta_final_old=query('SELECT tce.elemento_id , tcc.categoria_id,tcc.categoria_desc,tce.elemento_desc, trf.respuesta from tr_cc_elementos tce 
        join tr_cc_categorias tcc on tcc.respuesta_id = tce.respuesta_id
        join tr_cc_respuestas_finales trf on trf.categoria_id = tcc.categoria_id and tce.elemento_id = trf.elemento_id 
        join tr_cc_respuesta tcr on tcr.respuesta_id = tcc.respuesta_id
        where tce.respuesta_id ='.$respuesta_id);
            while($arreglo_final=arreglo($query_respuesta_final_old)){
                array_push($array_viejo, $arreglo_final);
            }

            // print_r($array_viejo);

        $query_respuesta_final_new=query('SELECT tce.elemento_id,tcc.categoria_id,tce.elemento_desc, tcc.categoria_desc 
        from tr_cc_elementos tce 
        join tr_cc_categorias tcc on tcc.respuesta_id = tce.respuesta_id 
        where tce.respuesta_id ='.$inserta_respuesta_cc);
        while($arreglo_nuevo=arreglo($query_respuesta_final_new)){
         foreach ($array_viejo as  $ele_viejo) {
                if($ele_viejo['categoria_desc']==$arreglo_nuevo['categoria_desc'] && $ele_viejo['elemento_desc']==$arreglo_nuevo['elemento_desc']){
                    $inserta=inserta('tr_cc_respuestas_finales','elemento_id, categoria_id,respuesta, fecha_creacion, estatus',
                    ''.$arreglo_nuevo['elemento_id'].', '.$arreglo_nuevo['categoria_id'].',"'.$ele_viejo['respuesta'].'", now(), 1');
                }
            }
        }
        
        
        return $inserta_respuesta_cc;
    }  



    public static function inserta_edita_mc( $pregunta_id, $materia_fecha_actividad_id, $mapa_cognitivo_desc, $numero_elementos, $numero_categorias, $aspecto_comun, $id_materia_fecha_actividad, $respuesta_id){

        $estatus_respuesta_mc=update('tr_mc_respuesta','estatus=0','materia_fecha_actividad_id='.$id_materia_fecha_actividad);

        $inserta_respuesta_mc=inserta_last_id('tr_mc_respuesta',
        'pregunta_id, materia_fecha_actividad_id,  mapa_cognitivo_desc, numero_elementos, numero_categorias, aspecto_comun, fecha_creacion, estatus',
        ' '.$pregunta_id.','.$materia_fecha_actividad_id.',"'.$mapa_cognitivo_desc.'",'.$numero_elementos.','.$numero_categorias.',"'.$aspecto_comun.'",now(),1');
        
        $query_elemento=query('SELECT * from tr_mc_elementos where respuesta_id='.$respuesta_id);
        while($arreglo_elemento=arreglo($query_elemento)){
            $inserta_elementos=inserta('tr_mc_elementos','respuesta_id, elemento_desc,fecha_creacion, estatus',
            ''.$inserta_respuesta_mc.',"'.$arreglo_elemento['elemento_desc'].'", now() , 1');
        }

        $query_categoria=query('SELECT * from tr_mc_categorias where respuesta_id='.$respuesta_id);
        while($arreglo_categoria=arreglo($query_categoria)){
            $inserta_categoria=inserta('tr_mc_categorias','respuesta_id, categoria_desc,fecha_creacion, estatus',
            ''.$inserta_respuesta_mc.',"'.$arreglo_categoria['categoria_desc'].'", now() , 1');
        }

        $array_viejo=array();
        $query_respuesta_final_old=query('SELECT tce.elemento_id , tcc.categoria_id,tcc.categoria_desc,tce.elemento_desc, trf.respuesta from tr_mc_elementos tce 
        join tr_mc_categorias tcc on tcc.respuesta_id = tce.respuesta_id
        join tr_mc_respuestas_finales trf on trf.categoria_id = tcc.categoria_id and tce.elemento_id = trf.elemento_id 
        join tr_mc_respuesta tcr on tcr.respuesta_id = tcc.respuesta_id
        where tce.respuesta_id ='.$respuesta_id);
            while($arreglo_final=arreglo($query_respuesta_final_old)){
                array_push($array_viejo, $arreglo_final);
            }

            // print_r($array_viejo);

        $query_respuesta_final_new=query('SELECT tce.elemento_id,tcc.categoria_id,tce.elemento_desc, tcc.categoria_desc 
        from tr_mc_elementos tce 
        join tr_mc_categorias tcc on tcc.respuesta_id = tce.respuesta_id 
        where tce.respuesta_id ='.$inserta_respuesta_mc);
        while($arreglo_nuevo=arreglo($query_respuesta_final_new)){
         foreach ($array_viejo as  $ele_viejo) {
                if($ele_viejo['categoria_desc']==$arreglo_nuevo['categoria_desc'] && $ele_viejo['elemento_desc']==$arreglo_nuevo['elemento_desc']){
                    $inserta=inserta('tr_mc_respuestas_finales','elemento_id, categoria_id,respuesta, fecha_creacion, estatus',
                    ''.$arreglo_nuevo['elemento_id'].', '.$arreglo_nuevo['categoria_id'].',"'.$ele_viejo['respuesta'].'", now(), 1');
                }
            }
        }
        
        
        return $inserta_respuesta_mc;
    } 

}




?>