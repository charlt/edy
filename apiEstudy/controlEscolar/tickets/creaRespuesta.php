<?php
include '../../jwt.php';
include '../../headers.php';
include '../../extras/archivo/class/archivo.class.php';

try {

  $archivo = new Archivo();

  
  db('controlEscolar');

  if($_SERVER['REQUEST_METHOD'] == "POST"){
    foreach($_POST as $clave => $valor){
      ${$clave} = escape_cara($valor);
    }
    
      $usuario = Auth::GetData(
            $jwt  
        );
         

        
        $inserta = inserta_last_id('tr_respuesta_ticket', 'ticket_id, texto,visto,persona_id,rol_id, fecha_creacion, estatus',
        ''.$id_ticket.',"'.$texto.'",0,'.$usuario->id.', '.$usuario->id_rol.',now(), 1');
        
        if($usuario->id_rol != 1){
          $estatus_ticket_id = 2;

          $edita=update('tr_ticket','visto  = 0,estatus_ticket_id='.$estatus_ticket_id,'ticket_id='.$id_ticket);
        }
        else{
          $estatus_ticket_id = 3;
          $edita=update('tr_ticket','visto  = 1,estatus_ticket_id='.$estatus_ticket_id,'ticket_id='.$id_ticket);

        }



        if(isset($_FILES["imagen"])){
          $documento=$archivo::guardar_archivo(
            "tickets", //la ruta a insertar
            $id_ticket, //id de la ruta
            $_FILES["imagen"],//la variable tipo file donde viene el archivo
            "img_ticket".$inserta,//nombre del archivo
            null, 
            null); //tamaño de la extension    

            if($documento['status'] == 1){  
              $edita=update('tr_respuesta_ticket','adjunto = "'.$documento['url'].'"','respuesta_ticket_id='.$inserta);


              
                $json = array("status" => 1, "msg" => "opcion múltiple con imagen guardada correctamente", "idReactivo" => $inserta);
            }else{
                $archivo::elimina_archivo($documento['url']);
                $json = $documento;
            }   

        }

         
       
       //ingreso todas las escuelas que tiene este profesor
       
       if($inserta){
    		$json = array("status" => 1, "msg" => "Enviado");
    	 }else{
    		$json = array("status" => 0, "msg" => "No se envio");
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