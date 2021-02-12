<?php
include '../../jwt.php';
include '../../headers.php';

try {
  
  db('seguimiento');

  if($_SERVER['REQUEST_METHOD'] == "GET"){
    foreach($_GET as $clave => $valor){
      ${$clave} = escape_cara($valor);
    }
    
    $usuario = Auth::GetData(
        $jwt  
    );

    $query = query('SELECT clave, nombre, descripcion, id_etiqueta FROM tr_etiquetas WHERE estatus = 1');

    $arreglo = array();
    while($arreglo_documento = arreglo($query)){
      array_push($arreglo, $arreglo_documento);
    }

    if(num($query)){
      $json = array("status" => 1, "msg" => "Se encontraron etiquetas", "etiquetas" => $arreglo);
    }else{
      $json = array("status" => 0, "msg" => "No se encontraron etiquetas");
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
