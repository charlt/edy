<?php
include '../../jwt.php';
include '../../headers.php';

try {

   db('controlEscolar');

  if($_SERVER['REQUEST_METHOD'] == "GET"){
    foreach($_GET as $clave => $valor){
      ${$clave} = escape_cara($valor);
    }
    
    $usuario = Auth::GetData(
        $jwt
      );


    $query_transferencia = query('SELECT * from '.$GLOBALS["db_pagos"].'.cat_transferencia where estatus=1');

    $json_transferencia = array();
    while($arreglo_transferencia = arreglo($query_transferencia)){
      array_push($json_transferencia,$arreglo_transferencia);
    }
  

    if(num($query_transferencia) > 0 ){
      $json = array("status" => 1, "msg" => "Se encontraron transferencias","transferencias" => $json_transferencia);
     }else{
      $json = array("status" => 0, "msg" => "No se encontraron transferencias");
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
