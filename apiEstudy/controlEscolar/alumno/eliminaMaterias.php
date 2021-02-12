<?php
include '../../jwt.php';
include '../../headers.php';
include '../class/alumno.class.php';

try {

    db('controlEscolar');

    $alumno = new Alumno();

    if ($_SERVER['REQUEST_METHOD'] == "GET") {
        foreach ($_GET as $clave => $valor) {
            ${$clave} = escape_cara($valor);
        }

        $usuario = Auth::GetData(
            $jwt
        );

        $elimina = update(
            '' . $GLOBALS["db_learning"] . '.tr_materia',
            'estatus = 0, usuario_actualiza ="'.$usuario->usuario.'"',
            'materia_id = ' . $materia_id
        );

        $consulta = query('select asignatura_grupo_id from ' . $GLOBALS["db_learning"] . '.tr_materia where materia_id = ' . $materia_id);
        $arreglo = arreglo($consulta);

        if ($consulta) {
            $eliminaInter = delete('inter_alumno_asignatura_grupo', 'asignatura_grupo_id =' . $arreglo['asignatura_grupo_id']);
        }
        
        if ($elimina && $consulta && $eliminaInter) {
            $json = array("status" => 1, "msg" => "Se eliminó la materia correctamente");
        } else {
            $json = array("status" => 0, "msg" => "No se logró eliminar");
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
