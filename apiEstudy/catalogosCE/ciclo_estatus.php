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


    $query_ciclo_estatus = query('SELECT * FROM cat_ciclo_estatus where estatus =1');

    $json_ciclo_estatus = array();
    while($arreglo_ciclo_estatus = arreglo($query_ciclo_estatus)){
      array_push($json_ciclo_estatus,$arreglo_ciclo_estatus);
    }
  

    if(num($query_ciclo_estatus) > 0 ){
      $json = array("status" => 1, "msg" => "Se encontraron Estatus","ciclo_estatus" => $json_ciclo_estatus);
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
