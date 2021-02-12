<?php
include '../../jwt.php';
include '../../headers.php';

try {
  
  db('seguimiento');

  if($_SERVER['REQUEST_METHOD'] == "POST"){
    
    $jwt = $_POST['jwt'];
    $id_documento = $_POST['id_documento'];
    $id_etiquetas = $_POST['id_etiquetas'];

    $usuario = Auth::GetData(
      $jwt  
    );

    $delete = delete('inter_etiqueta_documento', 'id_documento = '.$id_documento);
    for ($i=0; $i < count($id_etiquetas); $i++) { 
      $inserta = inserta('inter_etiqueta_documento','id_etiqueta, id_documento',
      ''.$id_etiquetas[$i].', '.$id_documento.'');
    }

    if($inserta){
      $json = array("status" => 1, "msg" => "Se agregaron etiquetas al documento");
    }else{
      $json = array("status" => 0, "msg" => "No se agregaron las etiquetas");
    }

}else{
    $json = array("status" => 0, "msg" => "Método no aceptado");
}

echo json_encode($json);

} catch (Exception $e) {
  $json = array("status" => 0, "msg" =>  $e->getMessage());

  echo json_encode($json);
}
