<?php
include '../jwt.php';
include '../headers.php';

try {
  
  db('seguimiento');

  if($_SERVER['REQUEST_METHOD'] == "GET"){
    foreach($_GET as $clave => $valor){
      ${$clave} = escape_cara($valor);
    }
    
    $usuario = Auth::GetData(
        $jwt  
    );


    $query_tipo_campo = query('SELECT * FROM cat_tipo_campo');

    $json_tipo_campo = array();
    while($arreglo_tipo_campo = arreglo($query_tipo_campo)){
      array_push($json_tipo_campo,$arreglo_tipo_campo);
    }
  

    if(num($query_tipo_campo) > 0 ){
      $json = array("status" => 1, "msg" => "Se encontro tipo campo","tipo_campo" => $json_tipo_campo);
     }else{
      $json = array("status" => 0, "msg" => "No se encontro tipo campo");
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
