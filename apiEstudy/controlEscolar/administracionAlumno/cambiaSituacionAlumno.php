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
        

        $edita_estatus = update('tr_alumno','situacion_alumno_id='.$estatus,'alumno_id ='.$id_alumno);

        if($edita_estatus && ($estatus == 2 || $estatus == 3 || $estatus ==5)){
          if($estatus ==  2) $id_tipo_ticket = 4;
          if($estatus ==  3) $id_tipo_ticket = 5;
          if($estatus ==  5) $id_tipo_ticket = 7;
          
          $Ticket::crea_notificacion($id_area,$id_alumno,2,$id_tipo_ticket ,$observacion);
        }
        

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