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

            // $arreglo = arreglo(query('SELECT * from '.$GLOBALS["db_controlEscolar"].'.tr_switch_aviso tsa where aviso_id = '.$aviso_id));
            $query_avisos=query('SELECT *, unix_timestamp(tsa.fecha_creacion) as fecha_creacion  from '.$GLOBALS["db_controlEscolar"].'.tr_switch_aviso tsa where tsa.estatus = 1 and aviso_id = '.$aviso_id);
            $json=array();
            while ($arreglo = arreglo($query_avisos)){
                
                if ($arreglo['asignatura_grupo_id'] != "") {
                    $arreglo_dato = arreglo(query('select cc.asignatura,p.nombre,p.primer_apellido,p.segundo_apellido from '.$GLOBALS['db_controlEscolar'].'.inter_asignatura_grupo iag
                    join '.$GLOBALS['db_datosGenerales'].'.inter_orden_asignatura ioa on ioa.orden_asignatura_id = iag.orden_asignatura_id
                    join '.$GLOBALS['db_datosGenerales'].'.cat_asignaturas cc on cc.asignatura_id = ioa.asignatura_id
                    left join '.$GLOBALS['db_controlEscolar'].'.inter_docente_asignatura_grupo idag on idag.asignatura_grupo_id = iag.asignatura_grupo_id
                    join '.$GLOBALS['db_controlEscolar'].'.tr_docente td on td.docente_id = idag.docente_id 
                    join '.$GLOBALS['db_datosGenerales'].'.personas p on p.persona_id = td.docente_id
                    where iag.estatus=1 and cc.estatus=1 and idag.estatus=1 and td.estatus= 1 and p.estatus= 1 and idag.asignatura_grupo_id = ' . $arreglo['asignatura_grupo_id']));
                    // $arreglo_dato['asignatura'] = "Encuesta Asignatura Grupo: ".$arreglo_dato['asignatura'];
                    $arreglo['destino']= "Encuesta Asignatura Grupo: ".$arreglo_dato['asignatura'];
                    // array_push($json , $arreglo_dato);
                }
                // else{
                //     array_push($json , $arreglo);
                // }
        
                if ($arreglo['grupo_id'] != "") {
                    $arreglo_dato = arreglo(query('select nombre_grupo from '.$GLOBALS['db_controlEscolar'].'.tr_grupo 
                    where estatus=1 and grupo_id = ' . $arreglo['grupo_id']));
                    $arreglo['destino']="Encuesta grupo: " . $arreglo_dato['nombre_grupo'];
                    // $json = "Encuesta grupo: " . $arreglo_dato['nombre_grupo'];
                }
        
        
                if ($arreglo['orden_asignatura_id'] != "") {
                    $arreglo_dato = arreglo(query('select cc.asignatura from  '.$GLOBALS['db_datosGenerales'].'.inter_orden_asignatura ioa
                    join '.$GLOBALS['db_datosGenerales'].'.cat_asignaturas cc on cc.asignatura_id = ioa.asignatura_id
                    where ioa.estatus=1 and cc.estatus=1 and orden_asignatura_id = ' . $arreglo['orden_asignatura_id']));
                    $arreglo['destino']="Encuesta asignatura: " . $arreglo_dato['asignatura'];
                    // $json =  "Encuesta Orden asignatura: " . $arreglo_dato['asignatura'];
                }
        
        
                if ($arreglo['plan_orden_id'] != "") {
                    $arreglo_dato = arreglo(query('
                    select plan_estudio, COJ.orden_jerarquico_descripcion from '.$GLOBALS['db_datosGenerales'].'.inter_plan_orden ipo
                    join '.$GLOBALS['db_datosGenerales'].'.tr_plan_estudios tpe on tpe.plan_estudio_id = ipo.plan_estudio_id
                    join '.$GLOBALS['db_datosGenerales'].'.cat_orden_jerarquico coj on coj.orden_jerarquico_id = ipo.orden_jerarquico_id
                    where ipo.estatus=1 and tpe.plan_estudio_id =' . $arreglo['plan_orden_id']));
                    $arreglo['destino']="Encuesta Plan orden: " . $arreglo_dato['plan_estudio'] . ' grado: ' . $arreglo_dato['orden_jerarquico_descripcion'];
                    // $json = "Encuesta Plan orden: " . $arreglo_dato['plan_estudio'] . ' grado: ' . $arreglo_dato['orden_jerarquico_descripcion'];
                }
                
                
                if ($arreglo['plan_estudios_id'] != "") {
                    $arreglo_dato = arreglo(query('select plan_estudio from '.$GLOBALS['db_datosGenerales'].'.tr_plan_estudios where estatus=1 and plan_estudio_id =' . $arreglo['plan_estudios_id']));
                    $arreglo['destino']="Encuesta Plan: " . $arreglo_dato['plan_estudio'];
                    // $json = "Encuesta Plan: " . $arreglo_dato['plan_estudio'];
                }
                
                if ($arreglo['carrera_id'] != "") {
                    $arreglo_dato = arreglo(query('select carrera from '.$GLOBALS['db_datosGenerales'].'.tr_carrera where estatus=1 and carrera_id =' . $arreglo['carrera_id']));
                    $arreglo['destino']="Encuesta Carrera: " . $arreglo_dato['carrera'];
                    // $json = "Encuesta Carrera: " . $arreglo_dato['carrera'];
                }

               
                
                if ($arreglo['rol_id'] != "" && $arreglo['carrera_id'] == "" &&  $arreglo['plan_estudios_id'] == "" 
                    && $arreglo['plan_orden_id'] == "" && $arreglo['orden_asignatura_id'] == "" && $arreglo['grupo_id'] == "" && $arreglo['asignatura_grupo_id'] == "") {
                    $arreglo_dato = arreglo(query('select rol from '.$GLOBALS['db_datosGenerales'].'.cat_rol where rol_id =' . $arreglo['rol_id']));
                    $arreglo['destino']="Todos con el rol: " . $arreglo_dato['rol'];
                    // $json =  "Rol: " . $arreglo_dato['rol'];
                }
                array_push($json, $arreglo);
            }

        if ($json) {
            $json = array("status" => 1, "msg" => "Se encontraron avisos", "avisos" => $json);
        } else {
            $json = array("status" => 0, "msg" => "No se encontraron avisos");
        }
    } else {
        $json = array("status" => 0, "msg" => "Método no aceptado");
    }


    echo json_encode($json);
} catch (Exception $e) {
    $json = array("status" => 0, "msg" =>  $e->getMessage());

    echo json_encode($json);
}
