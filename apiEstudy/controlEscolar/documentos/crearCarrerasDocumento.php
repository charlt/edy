<?php
include '../../jwt.php';
include '../../headers.php';

try {
  
  db('seguimiento');

  if($_SERVER['REQUEST_METHOD'] == "POST"){
    
    $jwt = $_POST['jwt'];
    $id_documento = $_POST['id_documento'];
    $id_carreras = $_POST['id_carreras'];

    $usuario = Auth::GetData(
      $jwt  
    );

    $delete = delete('inter_documento_carrera', 'documento_id = '.$id_documento);
    for ($i=0; $i < count($id_carreras); $i++) { 
      $inserta = inserta('inter_documento_carrera','carrera_id, documento_id, estatus',
      ''.$id_carreras[$i].', '.$id_documento.', 1');
    }

    if($inserta){
      $json = array("status" => 1, "msg" => "Se agregó documento a las carreras");
    }else{
      $json = array("status" => 0, "msg" => "No se agregaron los documentos");
    }

}else{
    $json = array("status" => 0, "msg" => "Método no aceptado");
}

echo json_encode($json);

} catch (Exception $e) {
  $json = array("status" => 0, "msg" =>  $e->getMessage());

  echo json_encode($json);
}
