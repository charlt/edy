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


    $query_sede = query('SELECT * FROM cat_sede');

    $json_sede = array();
    while($arreglo_sede = arreglo($query_sede)){
      array_push($json_sede,$arreglo_sede);
    }
  

    if(num($query_sede) > 0 ){
      $json = array("status" => 1, "msg" => "Se encontro sede","sede" => $json_sede);
     }else{
      $json = array("status" => 0, "msg" => "No se encontro sede");
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
