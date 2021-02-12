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


        $query_encuesta = query('select icp.campo_encuesta_id, tce.pregunta,respuesta,tipo_campo_id, count(persona_id) as num_respuestas from inter_campo_persona icp 
    join tr_campo_encuesta tce on tce.campo_encuesta_id = icp.campo_encuesta_id
    where icp.estatus=1 and tce.estatus=1 and encuesta_id =' . $id_encuesta . ' and respuesta != "undefined" GROUP by icp.campo_encuesta_id, respuesta');
        $json_abierta = array();
        $json_reactivo = array();
        while ($arreglo_encuesta = arreglo($query_encuesta)) {
            if ($arreglo_encuesta['tipo_campo_id'] == 2 || $arreglo_encuesta['tipo_campo_id'] == 3 || $arreglo_encuesta['tipo_campo_id'] == 4 || $arreglo_encuesta['tipo_campo_id'] == 5 && $arreglo_encuesta['tipo_campo_id'] != "") {
                array_push($json_reactivo, $arreglo_encuesta);
            } else {
                array_push($json_abierta, $arreglo_encuesta);
            }
        }



        if (num($query_encuesta)) {
            $json = array("status" => 1, "msg" => "Se encontro respuestas", "reactivos" => $json_reactivo, "abiertas" => $json_abierta);
        } else {
            $json = array("status" => 0, "msg" => "No se encontraron respuestas");
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
