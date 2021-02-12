<?php
include '../../jwt.php';
include '../../headers.php';

try {

    db('controlEscolar');

    if ($_SERVER['REQUEST_METHOD'] == "GET") {
        foreach ($_GET as $clave => $valor) {
            ${$clave} = escape_cara($valor);
        }

        $usuario = Auth::GetData(
              $jwt  
          );




        $query_alumnos = query('SELECT distinct th.alumno_id, ta.clave_alumno as matricula, max(calificacion) as calificacion,ca.calif_min, nombre, primer_apellido, segundo_apellido,ioa.orden_asignatura_id
        from tr_historial th
        join tr_alumno ta on ta.alumno_id = th.alumno_id
        join '.$GLOBALS['db_datosGenerales'].'.personas p on p.persona_id = ta.alumno_id 
        join '.$GLOBALS['db_datosGenerales'].'.inter_orden_asignatura ioa on ioa.orden_asignatura_id = th.orden_asignatura_id 
        join '.$GLOBALS['db_datosGenerales'].'.cat_asignaturas ca on ca.asignatura_id = ioa.asignatura_id
        where ca.asignatura_id = ' . $id_asignatura . ' and th.estatus=1 and ta.estatus=1 group by alumno_id');




        $json_reprobate = array();
        while ($arreglo_alumnos = arreglo($query_alumnos)) {

            $query_asignatura_grupo = query('SELECT alumno_id from inter_alumno_asignatura_grupo iaag
        join inter_asignatura_grupo iag on iag.asignatura_grupo_id = iaag.asignatura_grupo_id 
        where alumno_id = ' . $arreglo_alumnos['alumno_id'] . ' and orden_asignatura_id = ' . $arreglo_alumnos['orden_asignatura_id'] . ' and iaag.estatus=1 and iag.estatus=1 and situacion_asignatura_grupo_id != 4');
            
                if ($arreglo_alumnos['calificacion'] < $arreglo_alumnos['calif_min'] && !num($query_asignatura_grupo)) {
                    $arreglo_reprobados['alumno_id'] = $arreglo_alumnos['alumno_id'];
                    $arreglo_reprobados['nombre'] = $arreglo_alumnos['nombre'];
                    $arreglo_reprobados['primer_apellido'] = $arreglo_alumnos['primer_apellido'];
                    $arreglo_reprobados['segundo_apellido'] = $arreglo_alumnos['segundo_apellido'];
                    $arreglo_reprobados['matricula'] = $arreglo_alumnos['matricula'];
                    $arreglo_reprobados['calificacion'] = $arreglo_alumnos['calificacion'];

                    array_push($json_reprobate, $arreglo_reprobados);
                }
            
        }

        if (num($query_alumnos)) {
            $json = array("status" => 1, "msg" => "Se encotraron reprobados", "reprobados" => $json_reprobate);
        } else {
            $json = array("status" => 0, "msg" => "No se encontraron alumnos");
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
