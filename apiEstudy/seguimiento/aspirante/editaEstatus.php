<?php
include '../../jwt.php';
include '../../headers.php';

try {

    db('seguimiento');

  if($_SERVER['REQUEST_METHOD'] == "POST"){
    foreach($_POST as $clave => $valor){
      ${$clave} = escape_cara($valor);
    }
    
       $usuario = Auth::GetData(
            $jwt  
        );

          $edita = query('UPDATE tr_aspirante ta set ta.situacion_aspirante_id = '.$situacion_aspirante_id.' where aspirante_id ='.$aspirante_id);
               
       if($edita){
    		$json = array("status" => 1, "msg" => "Se actualizó la situación correctamente");
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
