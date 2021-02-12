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


    $query_modulos = query('SELECT * FROM cat_modulos where estatus = 1');

    $json_modulos = array();
    while($arreglo_modulos = arreglo($query_modulos)){
      array_push($json_modulos,$arreglo_modulos);
    }
  

    if(num($query_modulos) > 0 ){
      $json = array("status" => 1, "msg" => "Se encontraron Bloques","modulos" => $json_modulos);
     }else{
      $json = array("status" => 0, "msg" => "No se encontraron Bloques");
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
