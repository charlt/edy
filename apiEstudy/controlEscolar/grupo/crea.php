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
    if(empty($id_campus)){
      $id_campus="null";
    }

    $inserta = inserta(
      'tr_grupo',
      'grupo, nombre_grupo, descripcion, cupo, ciclo_id,plan_orden_id,situacion_grupo_id, campus_id, fecha_creacion, usuario_crea, estatus',
      '"' . $grupo . '","' . $nombre_grupo . '","' . $descripcion . '", ' . $cupo . ',' . $id_ciclo . ',' . $id_plan_orden . ',1,' . $id_campus . ',now(),"'.$usuario->usuario.'", 1'
    );



    //ingreso todas las escuelas que tiene este profesor

    if ($inserta) {
      $json = array("status" => 1, "msg" => "Se insertó el grupo correctamente");
    } else {
      $json = array("status" => 0, "msg" => "No se logró insertar");
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
