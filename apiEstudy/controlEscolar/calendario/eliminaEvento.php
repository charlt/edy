<?php
include '../../jwt.php';
include '../../headers.php';

try {

  db('controlEscolar');

  if($_SERVER['REQUEST_METHOD'] == "POST"){
    foreach($_POST as $clave => $valor){
      ${$clave} = escape_cara($valor);
    }
    
    $usuario = Auth::GetData(
            $jwt 
    );
         
    $elimina = update('cat_eventos_calendario',
    'estatus = 0',
    'evento_id = '.$evento_id);
        
    if($elimina){
      $json = array("status" => 1, "msg" => "Se eliminó el evento correctamente");
    }else{
      $json = array("status" => 0, "msg" => "No se logró eliminar");
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
