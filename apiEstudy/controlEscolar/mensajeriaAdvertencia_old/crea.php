<?php
include '../../jwt.php';
include '../../headers.php';

try {

  db('controlEscolar');

  if ($_SERVER['REQUEST_METHOD'] == "POST") {
    foreach ($_POST as $clave => $valor) {
      ${$clave} = escape_cara($valor);
    }

    $usuario = Auth::GetData(
      $jwt
    );

    //grupo es una cadena no un número
    $inserta = inserta(
      'tr_mensajeria',
      'persona_id,advertencia_id, texto, origen, fecha_creacion, estatus',
      '' . $id_persona . ','.$id_advertencia.',"' . $texto . '",' . $origen . ',now(), 1'
    );

    //ingreso todas las escuelas que tiene este profesor

    if ($inserta) {
      $json = array("status" => 1, "msg" => "Enviado");
    } else {
      $json = array("status" => 0, "msg" => "No se envio");
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
