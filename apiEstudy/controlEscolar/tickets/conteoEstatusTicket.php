<?php
include '../../jwt.php';
include '../../headers.php';

try {

  db('controlEscolar');

  if($_SERVER['REQUEST_METHOD'] == "GET"){
    foreach($_GET as $clave => $valor){
      ${$clave} = escape_cara($valor);
    }
    
    $usuario = Auth::GetData(
        $jwt  
    );


    $query_estatus_ticket = query('	SELECT ct.estatus_ticket_id,ct.estatus_ticket,count(tt.ticket_id) as total
    FROM cat_estatus_ticket ct
    join tr_ticket tt on tt.estatus_ticket_id = ct.estatus_ticket_id and tt.estatus = 1 and ct.estatus= 1
    group by ct.clave_estatus_ticket,ct.estatus_ticket
    order by ct.estatus_ticket_id');

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
