<?php
include '../../jwt.php';
include '../../headers.php';
include './class/fechaActividad.class.php';

try {
  
  db('learning');

  $actividad = new FechaActividad();

  if($_SERVER['REQUEST_METHOD'] == "GET"){
    foreach($_GET as $clave => $valor){
      ${$clave} = escape_cara($valor);
    }

      $usuario = Auth::GetData(
            $jwt  
        );

    //SERVICIO DE CONSULTA DE SESIÓN
    
    $json_actividad = $actividad::consulta_dummy($id_actividad);

       
       //ingreso todas las escuelas que tiene este profesor
       
       if(isset($json_actividad['materia_fecha_actividad_id'])){
    		$json = array("status" => 1, "msg" => "Se encontró un registro en la actividad", "fechaActividad"=>$json_actividad);
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
