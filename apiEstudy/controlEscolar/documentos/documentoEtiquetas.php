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


    $query_documento = query('SELECT te.id_etiqueta AS id_etiqueta_tr, te.clave, te.nombre, te.descripcion, ied.id_etiqueta_documento, 
    ied.id_etiqueta, ied.id_documento 
    FROM tr_etiquetas te
    LEFT JOIN inter_etiqueta_documento ied ON te.id_etiqueta = ied.id_etiqueta
    AND ied.id_documento = '.$id_documento.'
    WHERE te.estatus = 1');

    $json_etiquetas = array();
    while($arreglo_documento = arreglo($query_documento)){
      array_push($json_etiquetas, $arreglo_documento);
    }

    if(num($query_documento)){
      $json = array("status" => 1, "msg" => "Se encontraron etiquetas", "etiquetas" => $json_etiquetas);
    }else{
      $json = array("status" => 0, "msg" => "No se encontro documento");
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
