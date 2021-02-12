<?php
include '../../jwt.php';
include '../../headers.php';

try {

  db('learning');

  if ($_SERVER['REQUEST_METHOD'] == "GET") {
    foreach ($_GET as $clave => $valor) {
      ${$clave} = escape_cara($valor);
    }

    $usuario = Auth::GetData(
      $jwt
    );

    if ($usuario->id_rol == 2) {
      $script = 'and visible = 1';
    } elseif ($usuario->id_rol == 1 || $usuario->id_rol == 3) {
      $script = '';
    }

    //SERVICIO DE CONSULTA DE SESIÓN
    $query_pregunta = query('SELECT tca.*
     FROM tr_contenido_actividad tca
     join tr_actividad ta on ta.actividad_id = tca.actividad_id
     WHERE tca.actividad_id = ' . $id_actividad . ' '.$script.' and tca.estatus = 1');


    $json_pregunta = array();
    while ($arreglo_pregunta = arreglo($query_pregunta)) {
      array_push($json_pregunta, $arreglo_pregunta);
    }

    //ingreso todas las escuelas que tiene este profesor

    if (num($query_pregunta)) {
      $json = array("status" => 1, "msg" => "Se encontró contenido ", "contenido" => $json_pregunta);
    } else {
      $json = array("status" => 0, "msg" => "No se encontró el contenido");
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
