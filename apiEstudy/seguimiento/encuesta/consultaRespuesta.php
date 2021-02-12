<?php
include '../../jwt.php';
include '../../headers.php';


db ('seguimiento');


try {
  if($_SERVER['REQUEST_METHOD'] == "GET"){
    foreach($_GET as $clave => $valor){
      ${$clave} = escape_cara($valor);
    }
    
      $usuario = Auth::GetData(
            $jwt  
        );
         
        $query=query('select persona_id ,switch_encuesta_id from inter_encuesta_persona 
          iep where iep.persona_id = '.$id_persona.' and switch_encuesta_id = '.$id_switch_encuesta);

       if(num($query)){
    		$json = array("status" => 1, "msg" => "encuesta ya contestada");
    	 }else{
    		$json = array("status" => 0, "msg" => "No se encontraron los encuestas");
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