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

    if (isset($id_documento)) {
      $query = update('cat_documento','nombre_documento = "'.$nombre.'", documento_desc = "'.$descripcion.'",
       obligatorio = '.$obligatorio.', estatus = 1', 'documento_id = '.$id_documento);
    }else {
      $query = inserta_last_id('cat_documento', 'nombre_documento, documento_desc, obligatorio, fecha_creacion, 
      fecha_actualiza, estatus', '"'.$nombre.'", "'.$descripcion.'", '.$obligatorio.', now(), now(), 1');
    }

    if($query){
      if (isset($id_documento))
        $json = array("status" => 1, "msg" => "Se editó el documento");
      else
        $json = array("status" => 1, "msg" => "Se agregó el documento", "id_documento" => $query);      
    }else{
      $json = array("status" => 0, "msg" => "No se agregó el documento");
    }

}else{
    $json = array("status" => 0, "msg" => "Método no aceptado");
}

echo json_encode($json);

} catch (Exception $e) {
  $json = array("status" => 0, "msg" =>  $e->getMessage());

  echo json_encode($json);
}
