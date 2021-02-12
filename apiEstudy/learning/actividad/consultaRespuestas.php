<?php
include '../../jwt.php';
include '../../headers.php';
include './class/actividad.class.php';


try {
  
  db ('learning');

  $actividad = new Actividad();


  if($_SERVER['REQUEST_METHOD'] == "GET"){
    foreach($_GET as $clave => $valor){
      ${$clave} = escape_cara($valor);
    }

      $usuario = Auth::GetData(
            $jwt  
        );

    //SERVICIO DE CONSULTA DE SESIÓN
    
    $json_resultado = $actividad::consulta_respuestas($id_materia_fecha_actividad);
      if($actividad::$shuffle){
        shuffle($json_resultado);
      }
              
       //ingreso todas las escuelas que tiene este profesor
       
       if($actividad::numero()){
    		$json = array("status" => 1, "msg" => "Se encontraron las respuestas por pregunta de la actividad","respuestas" => $json_resultado);
    	 }else{
    		$json = array("status" => 0, "msg" => "No se encontraron respuestas");
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