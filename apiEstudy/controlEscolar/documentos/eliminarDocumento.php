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

    $update = update('cat_documento', 'estatus = 0' ,'documento_id = '.$id_documento);

    if($update){
      $json = array("status" => 1, "msg" => "Se eliminó el documento correctamente");
    }else{
      $json = array("status" => 0, "msg" => "No se eliminó el documento");
    }

}else{
    $json = array("status" => 0, "msg" => "Método no aceptado");
}

echo json_encode($json);

} catch (Exception $e) {
  $json = array("status" => 0, "msg" =>  $e->getMessage());

  echo json_encode($json);
}
