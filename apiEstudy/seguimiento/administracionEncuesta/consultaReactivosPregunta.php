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


    $query = query('SELECT reactivo_campo_encuesta_id, trce.campo_encuesta_id, reactivo_desc as reactivo
        from tr_reactivos_campo_encuesta trce
        join tr_campo_encuesta te on te.campo_encuesta_id = trce.campo_encuesta_id 
         where  encuesta_id=' . $encuesta_id . ' and  trce.campo_encuesta_id=' . $id_campo_encuesta);


    $json = array();
    while ($arreglo = arreglo($query)) {
      array_push($json, $arreglo);
    }

    if (num($query)) {
      $json = array("status" => 1, "msg" => "Se encontraron preguntas", "pregunta" => $json);
    } else {
      $json = array("status" => 0, "msg" => "No se encontraron preguntas");
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
