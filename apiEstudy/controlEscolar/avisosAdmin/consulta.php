<?php
include '../../jwt.php';
include '../../headers.php';

try {

  db('controlEscolar');

  if ($_SERVER['REQUEST_METHOD'] == "GET") {
    foreach ($_GET as $clave => $valor) {
      ${$clave} = escape_cara($valor);
    }

    $usuario = Auth::GetData(
      $jwt
    );

    if($tipo == 1){
      $condicion = ' and ta.fecha_fin > now()';
    }else{
      $condicion = ' and ta.fecha_fin < now()';
    }

    $query_aviso = query('SELECT  ta.aviso_id, cia.importancia , ta.titulo, ta.mensaje, ta.adjunto, ta.administrador_id, unix_timestamp(ta.fecha_inicio) as fecha_inicio, unix_timestamp(ta.fecha_fin) as fecha_fin FROM tr_avisos ta
    join cat_importancia_aviso cia on cia.importancia_aviso_id =  ta.importancia_aviso_id 
    WHERE ta.estatus=1'.$condicion);

    $json_aviso = array();

    while ($arreglo_aviso = arreglo($query_aviso)) {
      array_push($json_aviso, $arreglo_aviso);
    }

    if (num($query_aviso)) {
      $json = array("status" => 1, "msg" => "Se encontraron avisos", "avisos" => $json_aviso);
    } else {
      $json = array("status" => 0, "msg" => "No se encontron avisos");
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
