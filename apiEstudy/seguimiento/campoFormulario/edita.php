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
         
          $edita = update('tr_campo_formulario',
          'pregunta ="'.$pregunta.'",
          descripcion ="'.$descripcion.'",
          formulario_id = '.$id_formulario.',
          tipo_campo_id ='.$id_tipo_campo.',
          obligatorio = '.$obligatorio.',
          mensaje_error="'.$mensaje_error.'",
          fecha_actualiza=now(),
          usuario_actualiza=current_user()',
          'campo_formulario_id='.$id_campo_formulario);

              
       if($edita){
    		$json = array("status" => 1, "msg" => "Se actualizó campo formulario correctamente");
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