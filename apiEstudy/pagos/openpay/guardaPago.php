<?php
include '../../jwt.php';
include '../../headers.php';

try {

  db('pagos');

  if($_SERVER['REQUEST_METHOD'] == "POST"){
    foreach($_POST as $clave => $valor){
      ${$clave} = escape_cara($valor);
    }

    if ($tipo == 1) {
        $inserta = inserta('tr_pago_tarjeta_exitoso', 'solicitud_pago_id, codigo_autorizacion, transaccion, estatus', 
        ''.$id_solicitud_pago.', "'.$autorizacion.'", "'.$id_transaccion.'", 1');
    }else if ($tipo == 0) {
        $inserta = inserta('tr_pago_tarjeta_error', 'solicitud_pago_id, descripcion, estatus', 
        ''.$id_solicitud_pago.', "'.$error.'", 1');
    }

    if($inserta){
        $json = array("status" => 1, "msg" => "Se insertó el dato correctamente");
    }else{
        $json = array("status" => 1, "msg" => "No se insertó correctamente");
    }

  }else{
  	$json = array("status" => 0, "msg" => "Método no aceptado");
  }

  /* Output header */

  echo json_encode($json);

} catch (Exception $e) {
    $json = array("status" => 0, "msg" =>  $e->getMessage());

    echo json_encode($json);
}


