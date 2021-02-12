<?php
include '../../jwt.php';
include '../../headers.php';
include './class/fechaActividad.class.php';

try {

  db ('learning');

  $actividad = new FechaActividad();
  if($_SERVER['REQUEST_METHOD'] == "POST"){
    foreach($_POST as $clave => $valor){
      ${$clave} = escape_cara($valor);
    }
    
    $usuario = Auth::GetData(
      $jwt  
  );
        $actividad::inactiva_actividades($id_actividad, $id_materia);

        $inserta = $actividad::inserta_actividad($id_actividad, $id_materia, $intento_num,$id_tipo_actividad);

        $id_materia_fecha_actividad = $inserta;
        $intento = 1;
        $estatus_actividad = 1;
       
       
       if($inserta){
    		$json = array("status" => 1, "msg" => "Se comienza el reintento de la actividad correctamente","materiaFechaActividad" =>  array("materia_fecha_actividad_id" => $id_materia_fecha_actividad, "intento_num" => $intento, "estatus_actividad_id" => $estatus_actividad ));
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
