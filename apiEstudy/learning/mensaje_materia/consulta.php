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

    //SERVICIO DE CONSULTA DE SESIÓN
    $query_mensajes = query('SELECT 
    mensaje_id,
    persona_id,
    materia_id,
    texto,
    origen,
    visto,
    UNIX_TIMESTAMP(fecha_creacion) as fecha_creacion
    FROM tr_mensaje_materia WHERE materia_id = ' . $id_materia . ' limit ' . $limit_inicio . ',' . $limit_final);

    // $num_mensajes=num($query_mensajes);

    $json_mensajes = array();

    $i = 0;
    $entro = 0;
    while ($arreglo_mensajes = arreglo($query_mensajes)) {
      array_push($json_mensajes, $arreglo_mensajes);
      // if($usuario->id_rol != $arreglo_mensajes['origen']){
      //   update('tr_mensaje_materia','visto=1',
      //  'mensaje_id='.$arreglo_mensajes['mensaje_id']);
      // }
      $i++;
    }

    if (num($query_mensajes)) {
      $json = array("status" => 1, "msg" => "Se encontraron mensajes", "mensajes" => $json_mensajes);
    } else {
      $json = array("status" => 0, "msg" => "No se encontraron mensajes");
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
