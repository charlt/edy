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
         
    $elimina_fk = delete('tr_respuesta_ticket', 'ticket_id = '.$id_ticket);
    $elimina = delete('tr_ticket', 'ticket_id = '.$id_ticket);
                     
    if($elimina){
        $json = array("status" => 1, "msg" => "Ticket eliminado correctamente");
    }else{
        $json = array("status" => 0, "msg" => "No se pudo eliminar el ticket");
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
