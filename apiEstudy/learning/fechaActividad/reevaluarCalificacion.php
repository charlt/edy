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
         
  
      $inserta = update('tr_materia_fecha_actividad','calificacion = null, estatus_actividad_id = 3 ','materia_fecha_actividad_id = '.$materia_fecha_actividad_id);

        query('delete from inter_respuesta_docente where materia_fecha_actividad_id = '.$materia_fecha_actividad_id);
       
       //ingreso todas las escuelas que tiene este profesor
       
       if($inserta){
    		$json = array("status" => 1, "msg" => "Se invalido la Actividad correctamente");
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