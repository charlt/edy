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
         
        // if ($grupo_db != $nombre_grupo) {
        $edita = update('tr_ticket',
        'estatus_ticket_id = 4',
         'ticket_id = '.$id_ticket);
        
             
       //ingreso todas las escuelas que tiene este profesor
       
       if($edita){
    		$json = array("status" => 1, "msg" => "Ticket cerrado");
    	 }else{
    		$json = array("status" => 0, "msg" => "error en la actualización");
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
