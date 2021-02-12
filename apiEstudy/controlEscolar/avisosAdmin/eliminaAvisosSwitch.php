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

    $query_switch = query('delete from '.$GLOBALS["db_controlEscolar"].'.tr_switch_aviso where switch_aviso_id ='.$switch_aviso_id);
 
    if ($query_switch){
      $json = array("status" => 1, "msg" => "Se elimino el destino correctamente");
    } else {
      $json = array("status" => 0, "msg" => "No se logró eliminar");
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
