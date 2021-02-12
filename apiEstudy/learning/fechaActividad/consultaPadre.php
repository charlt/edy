<?php
include '../../jwt.php';
include '../../headers.php';
include './class/fechaActividad.class.php';
include '../actividad/class/actividad.class.php';

try {
  
  db('learning');

  $fechaActividad = new FechaActividad();
  $actividad = new Actividad();
  
  

  if($_SERVER['REQUEST_METHOD'] == "GET"){
    foreach($_GET as $clave => $valor){
      ${$clave} = escape_cara($valor);
    }

      $usuario = Auth::GetData(
            $jwt  
        );

    //SERVICIO DE CONSULTA DE SESIÓN
    
    $json_fecha_actividad = $fechaActividad::consulta_actividad( $id_materia, $id_actividad);

    $json_actividad = $actividad::consulta($id_actividad);



       
       //ingreso todas las escuelas que tiene este profesor
       
       if($actividad::numero()){
    		$json = array("status" => 1, "msg" => "Se encontró el registro en la actividad", "fechaActividad"=>$json_fecha_actividad, "actividad" => $json_actividad);
    	 }else{ 
    		$json = array("status" => 0, "msg" => "No se encontraron registros");
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
