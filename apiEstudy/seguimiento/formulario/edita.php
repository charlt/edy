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
         
          $edita = update('tr_formulario',
          'titulo="'.$titulo.'",
          instruccion="'.$instruccion.'",
          persona_id = '.$id_persona.',
          obligatorio='.$obligatorio.',
          porcentaje = '.$porcentaje.',
          fecha_actualiza=now(),
          usuario_actualiza=current_user()',
          'formulario_id='.$id_formulario);

       
       //ingreso todas las escuelas que tiene este profesor
       
       if($edita){
    		$json = array("status" => 1, "msg" => "Se actualizó el formulario correctamente");
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