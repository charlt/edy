<?php
include '../../jwt.php';
include '../../headers.php';
include '../../general/class/ticket.class.php';

try {

  db('controlEscolar');
  
  $Ticket = new Ticket();

  if($_SERVER['REQUEST_METHOD'] == "POST"){
    foreach($_POST as $clave => $valor){
      ${$clave} = escape_cara($valor);
    }
    
      $usuario = Auth::GetData(
            $jwt  
        );
         
        //curioso
        

        $edita_estatus = update('tr_alumno','situacion_pago_id='.$estatus,'alumno_id ='.$id_alumno);

      
        $id_tipo_ticket = 2;
        $id_area = 2;

        $Ticket::crea_notificacion($id_area,$id_alumno,2,$id_tipo_ticket ,$observacion);
        
        

        if($edita_estatus){
    		$json = array("status" => 1, "msg" => "Se modificó estatus correctamente");
    	 }else{
    		$json = array("status" => 0, "msg" => "No se logró modificar");
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