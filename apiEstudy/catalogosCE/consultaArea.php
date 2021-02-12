<?php
include '../jwt.php';
include '../headers.php';

try {

    db('datosGenerales');

    if ($_SERVER['REQUEST_METHOD'] == "GET") {
        foreach ($_GET as $clave => $valor) {
            ${$clave} = escape_cara($valor);
        }

        $usuario = Auth::GetData(
            $jwt
        );

        $query_area = query('SELECT * from '.$GLOBALS["db_controlEscolar"].'.cat_area where estatus = 1');
        $json = array();
        while ($arreglo = arreglo($query_area)) {
            array_push($json, $arreglo);
        }

        if (num($query_area)) {
            $json = array("status" => 1, "msg" => "Se encontraron areas", "areas" => $json);
        } else {
            $json = array("status" => 0, "msg" => "No se encontraron areas");
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
