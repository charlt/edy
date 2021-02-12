<?php
include '../../jwt.php';
include '../../headers.php';
include './class/fechaActividad.class.php';

try {

  db ('learning');

  $actividad = new FechaActividad();

  db ('learning');

  if($_SERVER['REQUEST_METHOD'] == "POST"){
    foreach($_POST as $clave => $valor){
      ${$clave} = escape_cara($valor);
    }
    

      $usuario = Auth::GetData(
            $jwt  
        );

        if($usuario->id_rol == 3){
          $id_estatus_actividad = 9;
        }else if($usuario->id_rol == 1){
          $id_estatus_actividad = 10;
        }

        $arreglo = $actividad::consulta_actividad($id_materia, $id_actividad);


        if($actividad::numero()){
          
          $calificacion=update('tr_materia_fecha_actividad','calificacion='.$calificacion.', estatus_actividad_id='.$id_estatus_actividad,
          'materia_fecha_actividad_id='.$arreglo['materia_fecha_actividad_id']);
        }else{

          $calificacion = inserta('tr_materia_fecha_actividad', 'actividad_id, materia_id,
        calificacion, intento_num, fecha_creacion, estatus, estatus_actividad_id',
        ''.$id_actividad.', '.$id_materia.','.$calificacion.',null, now(), 1, '.$id_estatus_actividad);

        }



        
        if($calificacion){
    		$json = array("status" => 1, "msg" => "Se insertó calificación correctamente.");
    	 }else{
    		$json = array("status" => 0, "msg" => "No se insertó correctamente");
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
