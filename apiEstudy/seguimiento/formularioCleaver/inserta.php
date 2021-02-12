<?php
include '../../jwt.php';
include '../../headers.php';

db ('seguimiento');

try {

  if($_SERVER['REQUEST_METHOD'] == "POST"){
    
    $jwt=$_POST["jwt"];

    $cleaver_base=$_POST["cleaver_base"];
    
    $respuesta_id=$_POST["respuesta_id"];

      $usuario = Auth::GetData(
            $jwt  
        );


    $cleaver = "INSERT INTO inter_cleaver_aspirante(aspirante_id,cleaver_base_id,respuesta_id, estatus) VALUES";


    $num=count($cleaver_base);
    for ($i=0; $i<$num; $i++){ 
      $cleaver .='('.$usuario->id.','.$cleaver_base[$i].', "'.$respuesta_id[$i].'",1),';
    }

    $cleaver = trim($cleaver, ',');
    $inserta=query($cleaver);


       if($inserta){
    		$json = array("status" => 1, "msg" => "Se insertó respuesta correctamente");
    	 }else{
    		$json = array("status" => 0, "msg" => "No se logró insertar");
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