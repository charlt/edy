<?php
include '../jwt.php';
include '../headers.php';

try {
  
  db('datosGenerales');

  if($_SERVER['REQUEST_METHOD'] == "GET"){
    foreach($_GET as $clave => $valor){
      ${$clave} = escape_cara($valor);
    }
    
    $usuario = Auth::GetData(
        $jwt  
    );


    $query_formatos = query('SELECT * FROM cat_formatos where estatus = 1');

    $json_formatos = array();
    while($arreglo_formatos = arreglo($query_formatos)){
      array_push($json_formatos,$arreglo_formatos);
    }
  

    if(num($query_formatos) > 0 ){
      $json = array("status" => 1, "msg" => "Se encontraron tipos de formato","formatos" => $json_formatos);
     }else{
      $json = array("status" => 0, "msg" => "No se encontraron formatos");
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