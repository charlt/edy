<?php
include '../../jwt.php';
include '../../headers.php';

db ('seguimiento');

try {
  if($_SERVER['REQUEST_METHOD'] == "POST"){
    foreach($_POST as $clave => $valor){
      ${$clave} = escape_cara($valor);
    }
    
      $usuario = Auth::GetData(
            $jwt  
        );
         
          $edita = update('tr_encuesta',
          'titulo="'.$titulo.'",
          instruccion="'.$instruccion.'",
          persona_id = '.$id_persona.',
          obligatorio='.$obligatorio.',
          porcentaje = '.$porcentaje.',
          fecha_actualiza=now(),
          usuario_actualiza=current_user()',
          'encuesta_id='.$id_encuesta);

       
       //ingreso todas las escuelas que tiene este profesor
       
       if($edita){
    		$json = array("status" => 1, "msg" => "Se actualizó el encuesta correctamente");
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