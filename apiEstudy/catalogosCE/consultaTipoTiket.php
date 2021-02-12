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


    $query_tipo_ticket = query('SELECT * FROM cat_tipo_ticket where estatus =1 and rol_id ='.$usuario->id_rol);

    $json_tipo_ticket = array();
    while($arreglo_tipo_ticket = arreglo($query_tipo_ticket)){
      array_push($json_tipo_ticket,$arreglo_tipo_ticket);
    }

  

    if(num($query_tipo_ticket) > 0 ){
      $json = array("status" => 1, "msg" => "Se encontraron tipos de tickets","tickets" => $json_tipo_ticket);
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
