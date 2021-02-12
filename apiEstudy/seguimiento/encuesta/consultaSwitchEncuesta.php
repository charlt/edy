<?php
include '../../jwt.php';
include '../../headers.php';


db('seguimiento');


try {
    if ($_SERVER['REQUEST_METHOD'] == "GET") {
        foreach ($_GET as $clave => $valor) {
            ${$clave} = escape_cara($valor);
        }

          $usuario = Auth::GetData(
                $jwt  
            );

        $arreglo = arreglo(query('select asignatura_grupo_id,grupo_id,orden_asignatura_id,plan_orden_id
        , plan_estudios_id,carrera_id from tr_switch_encuesta tse where encuesta_id = '.$encuesta_id.' and switch_encuesta_id='.$id_switch_encuesta));
            $json=array();
        if ($arreglo['asignatura_grupo_id'] != "") {
            $arreglo_dato = arreglo(query('select cc.asignatura,p.nombre,p.primer_apellido,p.segundo_apellido from '.$GLOBALS['db_controlEscolar'].'.inter_asignatura_grupo iag
            join '.$GLOBALS['db_datosGenerales'].'.inter_orden_asignatura ioa on ioa.orden_asignatura_id = iag.orden_asignatura_id
            join '.$GLOBALS['db_datosGenerales'].'.cat_asignaturas cc on cc.asignatura_id = ioa.asignatura_id
            left join '.$GLOBALS['db_controlEscolar'].'.inter_docente_asignatura_grupo idag on idag.asignatura_grupo_id = iag.asignatura_grupo_id
            join '.$GLOBALS['db_controlEscolar'].'.tr_docente td on td.docente_id = idag.docente_id 
            join '.$GLOBALS['db_datosGenerales'].'.personas p on p.persona_id = td.docente_id
            where iag.estatus=1 and cc.estatus=1 and idag.estatus=1 and td.estatus= 1 and p.estatus= 1 and idag.asignatura_grupo_id = ' . $arreglo['asignatura_grupo_id']));
            $arreglo_dato['asignatura'] = "Encuesta Asignatura Grupo: ".$arreglo_dato['asignatura'];
            array_push($json , $arreglo_dato);
        }

        if ($arreglo['grupo_id'] != "") {
            $arreglo_dato = arreglo(query('select nombre_grupo from '.$GLOBALS['db_controlEscolar'].'.tr_grupo 
            where estatus=1 and grupo_id = ' . $arreglo['grupo_id']));
            $json = "Encuesta grupo: " . $arreglo_dato['nombre_grupo'];
        }


        if ($arreglo['orden_asignatura_id'] != "") {
            $arreglo_dato = arreglo(query('select cc.asignatura from  '.$GLOBALS['db_datosGenerales'].'.inter_orden_asignatura ioa
            join '.$GLOBALS['db_datosGenerales'].'.cat_asignaturas cc on cc.asignatura_id = ioa.asignatura_id
            where ioa.estatus=1 and cc.estatus=1 and orden_asignatura_id = ' . $arreglo['orden_asignatura_id']));
            $json =  "Encuesta Orden asignatura: " . $arreglo_dato['asignatura'];
        }


        if ($arreglo['plan_orden_id'] != "") {
            $arreglo_dato = arreglo(query('
            select plan_estudio, COJ.orden_jerarquico_descripcion from '.$GLOBALS['db_datosGenerales'].'.inter_plan_orden ipo
                        join '.$GLOBALS['db_datosGenerales'].'.tr_plan_estudios tpe on tpe.plan_estudio_id = ipo.plan_estudio_id
                        join '.$GLOBALS['db_datosGenerales'].'.cat_orden_jerarquico coj on coj.orden_jerarquico_id = ipo.orden_jerarquico_id
                        where ipo.estatus=1 and tpe.plan_estudio_id =' . $arreglo['plan_orden_id']));
            $json = "Encuesta Plan orden: " . $arreglo_dato['plan_estudio'] . ' grado: ' . $arreglo_dato['orden_jerarquico_descripcion'];
        }


        if ($arreglo['plan_estudios_id'] != "") {
            $arreglo_dato = arreglo(query('select plan_estudio from '.$GLOBALS['db_datosGenerales'].'.tr_plan_estudios where estatus=1 and plan_estudio_id =' . $arreglo['plan_estudios_id']));
            $json = "Encuesta Plan: " . $arreglo_dato['plan_estudio'];
        }

        if ($arreglo['carrera_id'] != "") {
            $arreglo_dato = arreglo(query('select carrera from '.$GLOBALS['db_datosGenerales'].'.tr_carrera where estatus=1 and carrera_id =' . $arreglo['carrera_id']));
            $json =  "Encuesta Carrera: " . $arreglo_dato['carrera'];
        }

        if ($json) {
            $json = array("status" => 1, "msg" => "Se encontró encuesta", "encuesta" => $json);
        } else {
            $json = array("status" => 0, "msg" => "No se encontró los encuestas");
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
