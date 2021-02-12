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

        $columna = '';

        if (isset($situacion_reprobatoria_id)) {
          $columna = ', situacion_reprobatoria_id';
          $situacion_reprobatoria_id = ', '.$situacion_reprobatoria_id;
        }else {
          $situacion_reprobatoria_id = '';
        }
         
        $inserta = inserta('tr_historial', 
        'orden_asignatura_id, ciclo_id, alumno_id, estatus_historial_id, calificacion,materia_id,fecha_creacion,usuario_crea,estatus'.$columna,
        ''.$id_orden_asignatura.','.$id_ciclo.','.$id_alumno.', '.$id_estatus_historial.','.$calificacion.','.$materia_id.',now(), current_user(), 1'.$situacion_reprobatoria_id);


       
       //ingreso todas las escuelas que tiene este profesor
       
       if($inserta){
    		$json = array("status" => 1, "msg" => "Se insertó historial correctamente");
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
