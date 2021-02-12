<?php
include '../../jwt.php';
include '../../headers.php';

try {

  db('controlEscolar');

  if($_SERVER['REQUEST_METHOD'] == "POST"){
    foreach($_POST as $clave => $valor){
      ${$clave} = escape_cara($valor);
    }
    
      $usuario = Auth::GetData(
            $jwt  
        );

        $script = ',situacion_reprobatoria_id = NULL';
        if (isset($situacion_reprobatoria_id)) {
          $script = ',situacion_reprobatoria_id = '.$situacion_reprobatoria_id;
        }
       
        $edita = update('tr_historial', 
        'orden_asignatura_id  = "'.$id_orden_asignatura.'", 
        ciclo_id  = "'.$id_ciclo.'",
        alumno_id  = "'.$id_alumno.'",
        estatus_historial_id = '.$id_estatus_historial.',
        calificacion = '.$calificacion.',        
        fecha_actualiza = now(),
        usuario_actualiza = current_user()'.$script,
        'historial_id = '.$id_historial);


       
       //ingreso todas las escuelas que tiene este profesor
       
       if($edita){
    		$json = array("status" => 1, "msg" => "Se actualizó historial correctamente");
    	 }else{
    		$json = array("status" => 0, "msg" => "No se logró actualizar");
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
