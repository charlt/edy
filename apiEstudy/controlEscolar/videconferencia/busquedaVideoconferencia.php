<?php
include '../../jwt.php';
include '../../headers.php';

db('learning');

try {
  if ($_SERVER['REQUEST_METHOD'] == "GET") {
    foreach ($_GET as $clave => $valor) {
      ${$clave} = escape_cara($valor);
    }

    $usuario = Auth::GetData(
      $jwt
    );

    //SERVICIO DE CONSULTA DE SESIÓN

      $query_videoconferencias = query('select videoconferencia_id,nombre,UNIX_TIMESTAMP(fecha_inicio) as fecha_inicio,UNIX_TIMESTAMP(fecha_fin) as fecha_fin from tr_videoconferencia where estatus in (1,2) and nombre like "%' . $busqueda . '%"  limit ' . $min . ',' . $max . ';');
      $query_num = query('select count(videoconferencia_id) as total from tr_videoconferencia where estatus in (1,2) and nombre like "%' . $busqueda . '%"');
    


    $json_videoconferencia = array();
    $json_num = array();
    while ($arreglo_videoconferencia = arreglo($query_videoconferencias)) {
      array_push($json_videoconferencia, $arreglo_videoconferencia);
    }

    $arreglo_num = arreglo($query_num);
    array_push($json_num, $arreglo_num);


    //ingreso todas las escuelas que tiene este profesor

    if (num($query_videoconferencias)) {
      $json = array("status" => 1, "msg" => "Se encontraron videoconferencias", "Videoconferencias" => $json_videoconferencia, "total" => $json_num);
    } else {
      $json = array("status" => 0, "msg" => "No se encontraron Videoconferencias");
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
