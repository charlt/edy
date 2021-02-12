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

    $query_ticket = query('SELECT tt.ticket_id, tt.asunto_ticket,cet.estatus_ticket_id, tt.descripcion_ticket, tt.adjunto, tt.visto, tt.area_id, tt.persona_id, tt.rol_id, cet.estatus_ticket, unix_timestamp(tt.fecha_creacion) as fecha_creacion, ctt.tipo_ticket FROM tr_ticket tt
    join cat_tipo_ticket ctt on ctt.tipo_ticket_id = tt.tipo_ticket_id 
    join cat_estatus_ticket cet on cet.estatus_ticket_id = tt.estatus_ticket_id 
    where tt.persona_id = '.$id_persona.' and tt.rol_id ='.$id_rol.' and tt.estatus =1');

    $json_ticket = array();
    while($arreglo_ticket = arreglo($query_ticket)){
      array_push($json_ticket,$arreglo_ticket);
    }
  
    if(num($query_ticket) > 0 ){
      $json = array("status" => 1, "msg" => "Se encontraron tickets","tickets" => $json_ticket);
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
