<?php
include '../../jwt.php';
include '../../headers.php';
include '../class/asignatura.class.php';

try {

    db('learning');

    $asignatura = new Asignatura();

    if ($_SERVER['REQUEST_METHOD'] == "GET") {
        foreach ($_GET as $clave => $valor) {
            ${$clave} = escape_cara($valor);
        }

        $usuario = Auth::GetData(
            $jwt
        );

        //SERVICIO DE CONSULTA DE SESIÓN
        $json_pendientes = $asignatura::consultaPendientesCarga(); 


        if ($json_pendientes) {
            $json = array("status" => 1, "msg" => "Se encontraron pendientes en Opción Multiple", "pendientes" => $json_pendientes);
        } else {
            $json = array("status" => 0, "msg" => "No se encontraron pendientes");
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
