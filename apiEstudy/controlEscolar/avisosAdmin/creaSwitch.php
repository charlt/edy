<?php
include '../../jwt.php';
include '../../headers.php';

db('controlEscolar');

try {
    if ($_SERVER['REQUEST_METHOD'] == "POST") {
        foreach ($_POST as $clave => $valor) {
            ${$clave} = escape_cara($valor);
        }

        $usuario = Auth::GetData(
            $jwt

        );

        !isset($id_rol) ? $id_rol = 'null' : $id_rol = '"' . $id_rol . '"';
        !isset($id_grupo) ? $id_grupo = 'null' : $id_grupo = '"' . $id_grupo . '"';
        !isset($id_orden_asignatura) ? $id_orden_asignatura = 'null' : $id_orden_asignatura = '"' . $id_orden_asignatura . '"';
        !isset($id_carrera) ? $id_carrera = 'null' : $id_carrera = '"' . $id_carrera . '"';
        !isset($id_asignatura_grupo)  ?  $id_asignatura_grupo= 'null' : $id_asignatura_grupo = '"' . $id_asignatura_grupo . '"';
        !isset($id_plan_estudio) ? $id_plan_estudio = 'null' : $id_plan_estudio = '"' . $id_plan_estudio . '"';
        !isset($id_plan_orden) ? $id_plan_orden = 'null' : $id_plan_orden = '"' . $id_plan_orden . '"';

        $inserta = inserta(
            'tr_switch_aviso',
            'aviso_id,rol_id,grupo_id,orden_asignatura_id, asignatura_grupo_id,plan_orden_id,carrera_id,plan_estudios_id, estatus',
            ' "' . $id_aviso . '",'.$id_rol.',' . $id_grupo . ',' . $id_orden_asignatura  . ',' . $id_asignatura_grupo . ', 
            ' . $id_plan_orden  . ',' . $id_carrera . ',' . $id_plan_estudio . ',1');


        if ($inserta) {
            $json = array("status" => 1, "msg" => "Se insertó  correctamente");
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
