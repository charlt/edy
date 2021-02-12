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

    $elimina = delete('cat_porcentaje_fecha_pago', 'porcentaje_pago_id = '.$id_porcentaje_pago);
      
    if($elimina){
      $json = array("status" => 1, "msg" => "Se eliminó el registro correctamente");
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


