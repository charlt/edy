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
         

        $inserta = inserta_last_id('tr_materia_fecha_actividad', 'actividad_id, materia_id,
        calificacion, intento_num, fecha_creacion, estatus, estatus_actividad_id',
        ''.$id_actividad.', '.$id_materia.',null,1, now(), 1, 5');
       
       //ingreso todas las escuelas que tiene este profesor
       
       if($inserta){
    		$json = array("status" => 1, "msg" => "Intento asignado exitosamente", "idMateriaFechaActividad" => $inserta);
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