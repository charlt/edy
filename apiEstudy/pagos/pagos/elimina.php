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

    $elimina_suscripcion = delete('inter_alumno_suscripcion','alumno_suscripcion_id = '.$id_suscripcion_alumno.'');

    if($elimina_suscripcion){
      $json = array("status" => 1, "msg" => "Se eliminó la suscripción correctamente");
    }else{
      $json = array("status" => 1, "msg" => "No se eliminó correctamente");
    }

  }else{
  	$json = array("status" => 0, "msg" => "Método no aceptado");
  }

  echo json_encode($json);

} catch (Exception $e) {
    $json = array("status" => 0, "msg" =>  $e->getMessage());

    echo json_encode($json);
}


