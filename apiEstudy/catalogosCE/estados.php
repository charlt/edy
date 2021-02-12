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


    $query_estados = query('SELECT * FROM cat_estados where estatus=1');

    $json_estados = array();
    while($arreglo_estados = arreglo($query_estados)){
      array_push($json_estados,$arreglo_estados);
    }
  

    if(num($query_estados) > 0 ){
      $json = array("status" => 1, "msg" => "Se encontraron estados","estados" => $json_estados);
     }else{
      $json = array("status" => 0, "msg" => "No se encontraron estados");
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
