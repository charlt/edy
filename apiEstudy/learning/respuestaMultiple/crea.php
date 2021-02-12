<?php
include '../../jwt.php';
include '../../headers.php';

try {

  db ('learning');

  if($_SERVER['REQUEST_METHOD'] == "POST"){
    foreach($_POST as $clave => $valor){
      ${$clave} = escape_cara($valor);
    }
    
              $usuario = Auth::GetData(
                $jwt  
            );
        
         //if ($instituciones_db != $institucion_clave) {ok
          $inserta = inserta('tr_om_respuesta', 'reactivo_id,materia_fecha_actividad_id,fecha_creacion, estatus',
          ''.$id_reactivo.', '.$id_materia_fecha_actividad.', now(),1');

       
       //ingreso todas las carreras que tiene
       
       if($inserta){
    		$json = array("status" => 1, "msg" => "Se inserto la respuesta correctamente");
    	 }else{
    		$json = array("status" => 0, "msg" => "No se logró insertar");
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
