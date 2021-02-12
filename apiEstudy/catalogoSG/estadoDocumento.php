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


    $query_documento = query('SELECT * FROM cat_estado_documento where estatus = 1');

    $json_documento = array();
    while($arreglo_documento = arreglo($query_documento)){
      array_push($json_documento,$arreglo_documento);
    }
  

    if(num($query_documento) > 0 ){
      $json = array("status" => 1, "msg" => "Se encontraron estados del documento","estadoDocumento" => $json_documento);
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
