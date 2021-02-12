<?php
include '../../jwt.php';
include '../../headers.php';

try {

  db('seguimiento');

  if($_SERVER['REQUEST_METHOD'] == "POST"){
    foreach($_POST as $clave => $valor){
      ${$clave} = escape_cara($valor);
    }
    
        $usuario = Auth::GetData(
            $jwt  
        );

        if ($id_asesor != "null") {
            $inserta = inserta('inter_asesor_persona', 'persona_id, asesor_id, fecha_creacion, estatus',
                ''.$usuario->id.', '.$id_asesor.', now(), 1');
        }
      
    	$json = array("status" => 1, "msg" => "Se guardó la información correctamente");
    	

  }else{
  	$json = array("status" => 0, "msg" => "Método no aceptado");
  }

  echo json_encode($json);

} catch (Exception $e) {
    $json = array("status" => 0, "msg" =>  $e->getMessage());

    echo json_encode($json);
}
