<?php
include '../../jwt.php';
include '../../headers.php';

try {

  db('pagos');

  if($_SERVER['REQUEST_METHOD'] == "POST"){
    foreach($_POST as $clave => $valor){
      ${$clave} = escape_cara($valor);
    }
    
    $usuario = Auth::GetData(
      $jwt  
    );       

    $edita_suscripcion = update('cat_pago',
    'nombre_pago = "'.$nombre_pago.'", 
    descripcion_pago = "'.$descripcion_pago.'", 
    tipo_pago_id = '.$id_tipo_pago.',
    estatus_pago_id = '.$id_estatus_pago.',
    monto ='.$monto,
    'pago_id = '.$id_pago.'');

    if($edita_suscripcion){
      $json = array("status" => 1, "msg" => "Se editó el pago correctamente");
    }else{
      $json = array("status" => 1, "msg" => "No se editó ");
    }

  }else{
  	$json = array("status" => 0, "msg" => "Método no aceptado");
  }

  echo json_encode($json);

} catch (Exception $e) {
    $json = array("status" => 0, "msg" =>  $e->getMessage());

    echo json_encode($json);
}


