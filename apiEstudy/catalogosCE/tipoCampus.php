<?php
include '../jwt.php';
include '../headers.php';

try {

  if($_SERVER['REQUEST_METHOD'] == "GET"){  
    foreach($_GET as $clave => $valor){
      ${$clave} = escape_cara($valor);
    }
    
    $usuario = Auth::GetData(
        $jwt  
    );

    $query_tipo_campus = query('SELECT * FROM cat_tipo_campus where estatus = 1');

    $json_tipo_campus = array();
    while($arreglo_tipo_campus = arreglo($query_tipo_campus)){
      array_push($json_tipo_campus,$arreglo_tipo_campus);
    }
  
    if(num($query_tipo_campus) > 0 ){
      $json = array("status" => 1, "msg" => "Tipos de campus","campus" => $json_tipo_campus);
     }else{
      $json = array("status" => 0, "msg" => "No se encontraron tipos");
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
