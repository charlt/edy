<?php
include '../../jwt.php';
include '../../headers.php';

try {

  db('learning');

  if($_SERVER['REQUEST_METHOD'] == "POST"){
    foreach ($_POST as $clave => $valor) {
      ${$clave}= escape_cara($valor);
    }
    
    $usuario = Auth::GetData(
      $jwt  
      );
        
          $inserta = inserta('tr_rc_respuesta','reactivo_id, materia_fecha_actividad_id,columna_a_id, columna_b_id,
           fecha_creacion, estatus',
          ''.$id_reactivo.','.$id_materia_fecha_actividad.','.$id_a_columna.','.$id_b_columna.',
           now(), 1');           
        
                    
            
              
       if($inserta){
    		$json = array("status" => 1, "msg" => "Se insertó la respuesta correctamente");
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