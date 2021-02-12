<?php
include '../../jwt.php';
include '../../headers.php';

db('seguimiento');

try {
    if ($_SERVER['REQUEST_METHOD'] == "POST") {
        foreach ($_POST as $clave => $valor) {
            ${$clave} = escape_cara($valor);
        }

        $usuario = Auth::GetData(
            $jwt

        );

        

        $query_formulario = query('delete from tr_switch_encuesta where encuesta_id =' . $encuesta_id);


        !isset($id_asignatura_grupo) ? $id_asignatura_grupo = 'null' : $id_asignatura_grupo = '"' . $id_asignatura_grupo . '"';
        !isset($id_grupo) ? $id_grupo = 'null' : $id_grupo = '"' . $id_grupo . '"';
        !isset($id_orden_asignatura) ? $id_orden_asignatura = 'null' : $id_orden_asignatura = '"' . $id_orden_asignatura . '"';
        !isset($id_asignatura) ? $id_asignatura = 'null' : $id_asignatura = '"' . $id_asignatura . '"';
        !isset($id_plan_orden)  ?  $id_plan_orden= 'null' : $id_plan_orden = '"' . $id_plan_orden . '"';
        !isset($id_plan_estudio) ? $id_plan_estudio = 'null' : $id_plan_estudio = '"' . $id_plan_estudio . '"';
        !isset($id_carrera) ? $id_carrera = 'null' : $id_carrera = '"' . $id_carrera . '"';


        $inserta = inserta(
            'tr_switch_encuesta',
            'encuesta_id, fecha_inicio, fecha_fin, asignatura_grupo_id, grupo_id, orden_asignatura_id,plan_orden_id,plan_estudios_id,carrera_id, rol_id, estatus',
            ' "' . $encuesta_id . '","' . $fecha_inicio . '","' . $fecha_fin . '",' . $id_asignatura_grupo . ',' . $id_grupo . ',
        ' . $id_orden_asignatura  . ',' . $id_plan_orden . ',' . $id_plan_estudio . ', ' . $id_carrera . ', ' . $id_rol . ',1'
        );




        //ingreso todas las escuelas que tiene este profesor

        if ($inserta) {
            $json = array("status" => 1, "msg" => "Se insertó encuesta correctamente");
        } else {
            $json = array("status" => 0, "msg" => "No se logró insertar");
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
