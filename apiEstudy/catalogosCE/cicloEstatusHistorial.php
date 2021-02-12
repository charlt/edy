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


    $query_estatus_historial = query('SELECT * FROM cat_estatus_historial where estatus =1');

    $json_estatus_historial = array();
    while($arreglo_estatus_historial = arreglo($query_estatus_historial)){
      array_push($json_estatus_historial,$arreglo_estatus_historial);
    }
  

    if(num($query_estatus_historial) > 0 ){
      $json = array("status" => 1, "msg" => "Se encontraron Estatus","ciclo_estatus" => $json_estatus_historial);
     }else{
      $json = array("status" => 0, "msg" => "No se encontraron Estatus");
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
