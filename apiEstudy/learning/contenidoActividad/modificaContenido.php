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


       $edita = update('tr_contenido_actividad','visto='.$visto,'contenido_actividad_id='.$id_contenido_actividad);
       if($visto==1){
            $msg = 'Se activó contenido actividad correctamente';
       }else{
        $msg = 'Se desactivó contenido actividad correctamente';
       }

       if($edita){
    		$json = array("status" => 1, "msg" => $msg);
    	 }else{
    		$json = array("status" => 0, "msg" => "No se modifico el contenido");
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