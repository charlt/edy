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
      $edita_chat = update ('tr_docente','activa_chat='.$chat,'docente_id ='.$id_docente);
      
  if($edita_chat){
    
    $json = array("status" => 1, "msg" => "Se editó chat correctamente");
    }else{
    $json = array("status" => 0, "msg" => "No se logró editar docente");
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
