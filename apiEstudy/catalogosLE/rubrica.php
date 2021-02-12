<?php
include '../jwt.php';
include '../headers.php';

try {
  
  db('learning');

  if($_SERVER['REQUEST_METHOD'] == "GET"){
    foreach($_GET as $clave => $valor){
      ${$clave} = escape_cara($valor);
    }
    
    $usuario = Auth::GetData(
        $jwt  
    );


    $query_rubrica = query('SELECT * FROM tr_rubrica where estatus = 1');

    $json_rubricas = array();
    while($arreglo_rubricas = arreglo($query_rubrica)){
      array_push($json_rubricas,$arreglo_rubricas);
    }
  

    if(num($query_rubrica)){
      $json = array("status" => 1, "msg" => "Se encontraron rúbricas","rubricas" => $json_rubricas);
     }else{
      $json = array("status" => 0, "msg" => "No se encontraron rúbricas");
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
