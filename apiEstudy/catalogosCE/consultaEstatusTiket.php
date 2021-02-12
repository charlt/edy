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


    $query_estatus_ticket = query('SELECT * FROM cat_estatus_ticket where estatus =1');

    $json_estatus_ticket = array();
    while($arreglo_estatus_ticket = arreglo($query_estatus_ticket)){
      array_push($json_estatus_ticket,$arreglo_estatus_ticket);
    }
  

    if(num($query_estatus_ticket) > 0 ){
      $json = array("status" => 1, "msg" => "Estatus de tickets","tickets" => $json_estatus_ticket);
     }else{
      $json = array("status" => 0, "msg" => "No se encontraron tickets");
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
