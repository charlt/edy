<?php
include '../../jwt.php';
include '../../headers.php';

db ('seguimiento');

try {

  if($_SERVER['REQUEST_METHOD'] == "POST"){
    
    $jwt=$_POST["jwt"];

    
    $usuario = Auth::GetData(
      $jwt  
  );
  
    $elimina = query('delete from inter_cleaver_aspirante where aspirante_id = '.$usuario->id);


       if($elimina){
    		$json = array("status" => 1, "msg" => "Reintento establecido correctamente");
    	 }else{
    		$json = array("status" => 0, "msg" => "No se logró realizar el reintento");
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