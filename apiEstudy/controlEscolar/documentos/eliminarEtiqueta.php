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

    $delete = delete('tr_etiquetas','id_etiqueta = '.$id_etiqueta);

    if($delete){
      $json = array("status" => 1, "msg" => "Se eliminó la etiqueta correctamente");
    }else{
      $json = array("status" => 0, "msg" => "No se eliminó la etiqueta");
    }

}else{
    $json = array("status" => 0, "msg" => "Método no aceptado");
}

echo json_encode($json);

} catch (Exception $e) {
  $json = array("status" => 0, "msg" =>  $e->getMessage());

  echo json_encode($json);
}
