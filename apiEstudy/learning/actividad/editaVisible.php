<?php
include '../../jwt.php';
include '../../headers.php';

try {

  db ('learning');

  if($_SERVER['REQUEST_METHOD'] == "GET"){
    foreach($_GET as $clave => $valor){
      ${$clave} = escape_cara($valor);
    }
    
      $usuario = Auth::GetData(
            $jwt  
        );

          $edita = update('tr_actividad',
          'visible='.$visible,
          'actividad_id = '.$id_actividad);
       
       
       if($edita){

        if($visible){
          $msg = 'Actividad visible para los alumnos';
        }else{
          $msg = 'Actividad oculta para los alumnos';
        }
    		$json = array("status" => 1, "msg" => $msg);
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