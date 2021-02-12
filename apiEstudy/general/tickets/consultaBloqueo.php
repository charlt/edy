<?php
include '../../jwt.php';
include '../../headers.php';
include '../class/ticket.class.php';
try {

    db('datosGenerales');

  $Ticket = new Ticket();

  if($_SERVER['REQUEST_METHOD'] == "GET"){
    foreach($_GET as $clave => $valor){
      ${$clave} = escape_cara($valor);
    }     


      $arreglo_ticket =$Ticket::ver_ticket_bloqueo($id_persona,$id_rol);
       
       
       if($arreglo_ticket){  
    		$json = array("status" => 1, "msg" => "Se encontró observación", "ticket"=> $arreglo_ticket);
    	 }else{
    		$json = array("status" => 0, "msg" => "No se encontro observación");
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
