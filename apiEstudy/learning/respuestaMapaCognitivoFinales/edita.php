<?php
include '../../jwt.php';
include '../../headers.php';

try {

  db ('learning');

  if($_SERVER['REQUEST_METHOD'] == "POST"){
    foreach($_POST as $clave => $valor){
      ${$clave} = escape_cara($valor);
    }
    
      $usuario = Auth::GetData(
            $jwt  
        );

       

          $edita = update('tr_mc_respuestas_finales',
          'respuesta= "'.$respuesta.'",
          fecha_actualiza =  now()',
          'respuesta_final_id = '.$id_respuesta_final);


       
       //ingreso todas las carreras que tiene
       
       if($edita){
    		$json = array("status" => 1, "msg" => "Se actualizó la respuesta correctamente");
    	 }else{
    		$json = array("status" => 0, "msg" => "No se logró actualizar");
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
