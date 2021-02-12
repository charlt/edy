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

    $edita = update('cat_porcentaje_fecha_pago','suscripcion_id = '.$id_suscripcion.',tipo_porcentaje = '.$tipo.',
    porcentaje = '.$porcentaje.',dia_inicio = '.$inicio.',dia_fin = '.$fin.',estatus = 1,valor = '.$id_valor.'',
      'porcentaje_pago_id = '.$id_porcentaje_pago.'');
      
    if($edita){
      $json = array("status" => 1, "msg" => "Se editó el registro correctamente");
    }else{
      $json = array("status" => 1, "msg" => "No se insertó");
    }

  }else{
  	$json = array("status" => 0, "msg" => "Método no aceptado");
  }

  echo json_encode($json);

} catch (Exception $e) {
    $json = array("status" => 0, "msg" =>  $e->getMessage());

    echo json_encode($json);
}


