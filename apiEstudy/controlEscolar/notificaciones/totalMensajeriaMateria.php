<?php
include '../../jwt.php';
include '../../headers.php';

try {

  db ('learning');

  if($_SERVER['REQUEST_METHOD'] == "GET"){
    foreach($_GET as $clave => $valor){
      ${$clave} = escape_cara($valor);
    }
    
              $usuario = Auth::GetData(
                $jwt  
            );

            
        $query= query('SELECT mensaje_id from tr_mensaje_materia where estatus = 1 and materia_id = '.$id_materia);
        $num_mensajes = num($query);
       if($num_mensajes){
    		$json = array("status" => 1, "msg" => "Se encontraron mensajes", "numero_mensajes"=>$num_mensajes);
    	 }else{
    		$json = array("status" => 0, "msg" => "No se encontraron mensajes");
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
