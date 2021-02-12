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


    $query_pais = query('SELECT * FROM cat_pais where estatus = 1');

    $json_pais = array();
    while($arreglo_pais = arreglo($query_pais)){
      array_push($json_pais,$arreglo_pais);
    }
  

    if(num($query_pais) > 0 ){
      $json = array("status" => 1, "msg" => "Se encontraron pais","pais" => $json_pais);
     }else{
      $json = array("status" => 0, "msg" => "No se encontraron pais");
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
