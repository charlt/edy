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


    $query = query('SELECT campo_encuesta_id, pregunta, descripcion, nombre_tipo_campo, tce.tipo_campo_id  
        from tr_campo_encuesta tce
        join cat_tipo_campo ctc on tce.tipo_campo_id = ctc.tipo_campo_id
         where  encuesta_id=' . $encuesta_id . ' and tce.tipo_campo_id in (3,4,5)');

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
