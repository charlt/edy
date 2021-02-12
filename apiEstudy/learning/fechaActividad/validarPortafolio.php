<?php
include '../../jwt.php';
include '../../headers.php';

try {

  db('learning');

  if($_SERVER['REQUEST_METHOD'] == "POST"){
    foreach($_POST as $clave => $valor){
      ${$clave} = escape_cara($valor);
    }
    
      $usuario = Auth::GetData(
            $jwt  
        );


         
      
      $update = update('tr_portafolio_evidencias','paso = 2 ','materia_fecha_actividad_id = '.$materia_fecha_actividad_id);

      $update = update('tr_materia_fecha_actividad','estatus_actividad_id = 7 ','materia_fecha_actividad_id = '.$materia_fecha_actividad_id);
       
       //ingreso todas las escuelas que tiene este profesor
       
       if($update){
    		$json = array("status" => 1, "msg" => "Se envió la solicitud correctamente");
    	 }else{
    		$json = array("status" => 0, "msg" => "No se logró enviar la solicitud");
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