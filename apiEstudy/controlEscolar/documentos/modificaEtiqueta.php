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

    if (isset($id_etiqueta)) {
      $query = update('tr_etiquetas','clave = "'.$clave_etiqueta.'", nombre = "'.$nombre.'",
       descripcion = "'.$descripcion.'", estatus = 1', 'id_etiqueta = '.$id_etiqueta);
    }else {
      $query = inserta_last_id('tr_etiquetas', 'clave, nombre, descripcion, fecha_creacion, fecha_actualiza, estatus', '"'.$clave_etiqueta.'",
      "'.$nombre.'", "'.$descripcion.'", now(), now(), 1');
    }

    if($query){
      if (isset($id_etiqueta))
        $json = array("status" => 1, "msg" => "Se editó la etiqueta");
      else
        $json = array("status" => 1, "msg" => "Se agregó la etiqueta", "id_etiqueta" => $query);      
    }else{
      $json = array("status" => 0, "msg" => "No se agregó la etiqueta");
    }

}else{
    $json = array("status" => 0, "msg" => "Método no aceptado");
}

echo json_encode($json);

} catch (Exception $e) {
  $json = array("status" => 0, "msg" =>  $e->getMessage());

  echo json_encode($json);
}
