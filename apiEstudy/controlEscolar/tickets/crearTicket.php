<?php
include '../../jwt.php';
include '../../headers.php';

try {

  db('controlEscolar');

  if($_SERVER['REQUEST_METHOD'] == "POST"){
    foreach($_POST as $clave => $valor){
      ${$clave} = escape_cara($valor);
    }
    
    $usuario = Auth::GetData(
        $jwt  
    );

    $crea_ticket = inserta('tr_ticket','asunto_ticket, descripcion_ticket,visto,area_id,persona_id, rol_id, tipo_ticket_id, estatus_ticket_id, estatus'
    ,'"'.$asunto_ticket.'","'.$descripcion_ticket.'",0,1,'.$usuario->id.','.$usuario->id_rol.','.$id_tipo_ticket.',1,1');

    if($crea_ticket){
      $json = array("status" => 1, "msg" => "Se creó ticket correctamente");
     }else{
      $json = array("status" => 0, "msg" => "No se creo ticket correctamente");
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
