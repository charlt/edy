<?php

class Materia{


    public static function eliminaActividades($id_materia){
        $query_materia = query('SELECT tm.materia_id, tmfa.materia_fecha_actividad_id from ' . $GLOBALS['db_learning'] .'.tr_materia tm 
        left join ' . $GLOBALS['db_learning'] .'.tr_materia_fecha_actividad tmfa on tmfa.materia_id = tm.materia_id
        where tm.materia_id = '.$id_materia);    
        while($arreglo_actividad = arreglo($query_materia)){
            if(isset($arreglo_actividad['materia_fecha_actividad_id'])){
            $delete_ad = delete($GLOBALS['db_learning'] .'.tr_ad_respuesta','materia_fecha_actividad_id='.$arreglo_actividad['materia_fecha_actividad_id']);
            $delete_dd = delete($GLOBALS['db_learning'] .'.tr_dd_respuesta','materia_fecha_actividad_id='.$arreglo_actividad['materia_fecha_actividad_id']);
            $delete_fr = delete($GLOBALS['db_learning'] .'.tr_fr_respuesta','materia_fecha_actividad_id='.$arreglo_actividad['materia_fecha_actividad_id']);
            $delete_om = delete($GLOBALS['db_learning'] .'.tr_om_respuesta','materia_fecha_actividad_id='.$arreglo_actividad['materia_fecha_actividad_id']);
            $delete_pa = delete($GLOBALS['db_learning'] .'.tr_pa_respuesta','materia_fecha_actividad_id='.$arreglo_actividad['materia_fecha_actividad_id']);
            $delete_rc = delete($GLOBALS['db_learning'] .'.tr_rc_respuesta','materia_fecha_actividad_id='.$arreglo_actividad['materia_fecha_actividad_id']);
            $delete_sq = delete($GLOBALS['db_learning'] .'.tr_sq_respuesta','materia_fecha_actividad_id='.$arreglo_actividad['materia_fecha_actividad_id']);
            $delete_zi = delete($GLOBALS['db_learning'] .'.tr_zi_respuesta','materia_fecha_actividad_id='.$arreglo_actividad['materia_fecha_actividad_id']);
            $delete_qq = delete($GLOBALS['db_learning'] .'.tr_qq_respuesta','materia_fecha_actividad_id='.$arreglo_actividad['materia_fecha_actividad_id']);
            $delete_inter_respuesta_docente = delete($GLOBALS['db_learning'] .'.inter_respuesta_docente','materia_fecha_actividad_id='.$arreglo_actividad['materia_fecha_actividad_id']);
            
            $query_mc = query('SELECT tmr.respuesta_id,tmc.categoria_id,tme.elemento_id  FROM '.$GLOBALS['db_learning'].'.tr_mc_respuesta tmr
            join '.$GLOBALS['db_learning'].'.tr_mc_categorias tmc on tmc.respuesta_id = tmr.respuesta_id
            join '.$GLOBALS['db_learning'].'.tr_mc_elementos tme on tme.respuesta_id = tmr.respuesta_id
            WHERE materia_fecha_actividad_id = '.$arreglo_actividad['materia_fecha_actividad_id']);
            if(num($query_mc)){
              $mc = array();
              while($arreglo_mc = arreglo($query_mc)){
                array_push($mc, $arreglo_mc);
                $delete_mc = delete($GLOBALS['db_learning'].'.tr_mc_respuestas_finales','categoria_id ='.$arreglo_mc['categoria_id'].' and elemento_id = '.$arreglo_mc['elemento_id']);  
              }  
              foreach($mc as $mc_cat){
                $delete_mc_cat = delete($GLOBALS['db_learning'].'.tr_mc_categorias','respuesta_id='.$mc_cat['respuesta_id']);  
              }
              foreach($mc as $mc_ele ){
                $delete_mc_ele = delete($GLOBALS['db_learning'].'.tr_mc_elementos','respuesta_id='.$mc_ele['respuesta_id']);    
              }
              $delete_mc = delete($GLOBALS['db_learning'].'.tr_mc_respuesta','materia_fecha_actividad_id='.$arreglo_actividad['materia_fecha_actividad_id']);  
            }

            
            $query_mc = query('SELECT tcr.respuesta_id,tcc.categoria_id,tce.elemento_id  
            FROM '.$GLOBALS['db_learning'].'.tr_cc_respuesta tcr
            join '.$GLOBALS['db_learning'].'.tr_cc_categorias tcc on tcr.respuesta_id = tcc.respuesta_id
            join '.$GLOBALS['db_learning'].'.tr_cc_elementos tce on tcr.respuesta_id = tce.respuesta_id
            WHERE materia_fecha_actividad_id = '.$arreglo_actividad['materia_fecha_actividad_id']);
            if(num($query_mc)){
              $mc = array();
              while($arreglo_mc = arreglo($query_mc)){
                array_push($mc, $arreglo_mc);
                $delete_mc = delete($GLOBALS['db_learning'].'.tr_cc_respuestas_finales','categoria_id ='.$arreglo_mc['categoria_id'].' and elemento_id = '.$arreglo_mc['elemento_id']);  
              }  
              foreach($mc as $mc_cat){
                $delete_mc_cat = delete($GLOBALS['db_learning'].'.tr_cc_categorias','respuesta_id='.$mc_cat['respuesta_id']);  
              }
              foreach($mc as $mc_ele ){
                $delete_mc_ele = delete($GLOBALS['db_learning'].'.tr_cc_elementos','respuesta_id='.$mc_ele['respuesta_id']);    
              }
              $delete_mc = delete($GLOBALS['db_learning'].'.tr_cc_respuesta','materia_fecha_actividad_id='.$arreglo_actividad['materia_fecha_actividad_id']);  
            }

            
            $delete_retroalimentacion = delete($GLOBALS['db_learning'].'.tr_retroalimentacion','materia_fecha_actividad_id='.$arreglo_actividad['materia_fecha_actividad_id']);
            $delete_respuesta = delete($GLOBALS['db_learning'].'.tr_respuesta','materia_fecha_actividad_id='.$arreglo_actividad['materia_fecha_actividad_id']);            
            $delete_materia_fecha_actividad = delete($GLOBALS['db_learning'].'.tr_materia_fecha_actividad','materia_fecha_actividad_id='.$arreglo_actividad['materia_fecha_actividad_id']);
            
        }

        }
        $delete_mensaje_materia = delete($GLOBALS['db_learning'].'.tr_mensaje_materia','materia_id='.$id_materia);        
        $activa_materia = update('tr_materia','estatus_materia_id= 1','materia_id ='.$id_materia);  
        return $query_materia;

    }    




}




?>