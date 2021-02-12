<?php
include '../jwt.php';
include '../headers.php';

try {

    db('controlEscolar');

    if ($_SERVER['REQUEST_METHOD'] == "GET") {
        foreach ($_GET as $clave => $valor) {
            ${$clave} = escape_cara($valor);
        }

        $usuario = Auth::GetData(
            $jwt
        );

        $query_situacion = query('SELECT situacion_id, situacion_clave, situacion_descripcion 
        FROM cat_situacion_calificacion_reprobatoria where estatus = 1');
        $arreglo_catalogo = array();
        while ($arreglo = arreglo($query_situacion)) {
            array_push($arreglo_catalogo, $arreglo);
        }

        if (num($query_situacion)) {
            $json = array("status" => 1, "msg" => "Se encontró información", "situacion_reprobatoria" => $arreglo_catalogo);
        } else {
            $json = array("status" => 0, "msg" => "No se encontró información");
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
