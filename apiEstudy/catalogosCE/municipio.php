<?php
include '../jwt.php';
include '../headers.php';

try {
  
  db('controlEscolar');

  if($_SERVER['REQUEST_METHOD'] == "GET"){
    foreach($_GET as $clave => $valor){
      ${$clave} = escape_cara($valor);
    }
    
    $usuario = Auth::GetData(
        $jwt  
    );


    $query_municipio = query ('SELECT * FROM cat_municipio where estatus=1');

    $json_municipio = array();
    while($arreglo_municipio = arreglo($query_municipio)){
      array_push($json_municipio,$arreglo_municipio);
    }
  

    if(num($query_municipio) > 0 ){
      $json = array("status" => 1, "msg" => "Se encontraron municipio","municipio" => $json_municipio);
     }else{
      $json = array("status" => 0, "msg" => "No se encontraron municipio");
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
