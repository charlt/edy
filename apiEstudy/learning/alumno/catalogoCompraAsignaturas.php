<?php
include '../../jwt.php';
include '../../headers.php';

try {

    db('learning');

    if ($_SERVER['REQUEST_METHOD'] == "GET") {
        foreach ($_GET as $clave => $valor) {
            ${$clave} = escape_cara($valor);
        }

          $usuario = Auth::GetData(
                $jwt  
            );


        $arreglo_plan = arreglo(query('SELECT ipo.plan_estudio_id from '.$GLOBALS['db_controlEscolar'].'.inter_alumno_plan iap
        join '.$GLOBALS['db_datosGenerales'].'.inter_plan_orden ipo on ipo.plan_orden_id = iap.plan_orden_id
        where alumno_id = '.$usuario->id.' and iap.estatus = 1 and ipo.estatus=1'));
        
        $json_asignaturas = array();
        $query_asignaturas = query('SELECT ca.asignatura_id, ca.asignatura, ca.asignatura_padre_seriacion from '.$GLOBALS['db_datosGenerales'].'.inter_orden_asignatura ioa
        join '.$GLOBALS['db_datosGenerales'].'.inter_plan_orden ipo on ipo.plan_orden_id = ioa.plan_orden_id
        join '.$GLOBALS['db_datosGenerales'].'.cat_asignaturas ca on ca.asignatura_id = ioa.asignatura_id
        where plan_estudio_id = ' . $arreglo_plan['plan_estudio_id'] . ' and ca.estatus=1 and ioa.estatus=1 and ipo.estatus=1 order by ca.asignatura_id');
        $json_pendientes = array();
        $json_acreditadas = array();
        $json_curso=array();
        while ($arreglo_asignaturas = arreglo($query_asignaturas)) {
            $json_grupo = array();
            $grupo_asignatura = query('SELECT tg.grupo_id, iao.asignatura_grupo_id,tg.nombre_grupo from '.$GLOBALS['db_controlEscolar'].'.inter_asignatura_grupo iao
            join '.$GLOBALS['db_controlEscolar'].'.tr_grupo tg on tg.grupo_id = iao.grupo_id
            join '.$GLOBALS['db_datosGenerales'].'.inter_orden_asignatura ioa on ioa.orden_asignatura_id = iao.orden_asignatura_id
            where iao.estatus = 1 and tg.estatus=1 and situacion_grupo_id =1 and ioa.asignatura_id =' . $arreglo_asignaturas['asignatura_id']);
            while ($arreglo_grupo = arreglo($grupo_asignatura)) {
                array_push($json_grupo, $arreglo_grupo);
            }

          
        
            $arreglo_materia = arreglo(query('SELECT tm.materia_id, alumno_id,tm.calificacion, tm.estatus_materia_id, ioa.asignatura_id
            from tr_materia tm 
           join '.$GLOBALS['db_controlEscolar'].'.inter_asignatura_grupo iag on iag.asignatura_grupo_id = tm.asignatura_grupo_id
           join '.$GLOBALS['db_datosGenerales'].'.inter_orden_asignatura ioa on ioa.orden_asignatura_id =  iag.orden_asignatura_id
           where ioa.asignatura_id ='.$arreglo_asignaturas['asignatura_id'].' and alumno_id ='.$usuario->id.' and tm.estatus=1'));

           $arreglo_asignaturas['grupo'] = $json_grupo;
           if(!empty($arreglo_materia)){
            $arreglo_asignaturas['materia_id'] = $arreglo_materia['materia_id'];
           }

           array_push($json_asignaturas, $arreglo_asignaturas);

           if(empty($arreglo_materia)){
                $array_pendientes['asignatura_id'] = $arreglo_asignaturas['asignatura_id'];
                $array_pendientes['asignatura'] = $arreglo_asignaturas['asignatura'];
                $array_pendientes['asignatura_padre_seriacion'] = $arreglo_asignaturas['asignatura_padre_seriacion'];
                $array_pendientes['grupo'] = $arreglo_asignaturas['grupo'];
                array_push($json_pendientes,$array_pendientes);
            }elseif($arreglo_materia['estatus_materia_id'] == 2 && $arreglo_materia['calificacion'] >= 6){
                $array_acreditadas['asignatura_id'] = $arreglo_asignaturas['asignatura_id'];
                $array_acreditadas['asignatura'] = $arreglo_asignaturas['asignatura'];
                array_push($json_acreditadas,$array_acreditadas);
            }elseif($arreglo_materia['estatus_materia_id'] == 2 && $arreglo_materia['calificacion'] < 6){
                    $array_pendientes['asignatura_id'] = $arreglo_asignaturas['asignatura_id'];
                    $array_pendientes['asignatura'] = $arreglo_asignaturas['asignatura'];
                    $array_pendientes['asignatura_padre_seriacion'] = $arreglo_asignaturas['asignatura_padre_seriacion'];
                    $array_pendientes['grupo'] = $arreglo_asignaturas['grupo'];
                    array_push($json_pendientes,$array_pendientes);
            }elseif($arreglo_materia['estatus_materia_id'] == 1){
                $array_curso['asignatura_id'] = $arreglo_asignaturas['asignatura_id'];
                $array_curso['asignatura'] = $arreglo_asignaturas['asignatura'];
                $array_curso['materia_id'] = $arreglo_materia['materia_id'];
                array_push($json_curso,$array_curso);
            }

        }
        
        if (num($query_asignaturas)) {
            $json = array("status" => 1, "msg" => "Se encontraron Asignaturas", "asignaturas" => $json_asignaturas, "Acreditadas"=>$json_acreditadas, "Pendientes"=>$json_pendientes, "En curso"=>$json_curso);
        } else {
            $json = array("status" => 0, "msg" => "No se encontraron Asignaturas");
        }
    } else {
        $json = array("status" => 0, "msg" => "Método no aceptado");
    }

    /* Output header */

    echo json_encode($json);
} catch (Exception $e) {
    $json = array("status" => 0, "msg" =>  $e->getMessage());

    echo json_encode($json);
}
