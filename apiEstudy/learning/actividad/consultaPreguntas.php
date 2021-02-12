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
    
    if ($tipo == 1) {
      $json_resultado = $actividad::consulta_preguntas_respuestas($id_actividad, $id_materia_fecha_actividad, $intentos_restantes);
    }else {
      $json_resultado = $actividad::consulta_preguntas($id_actividad);
    }

    if($actividad::$shuffle){
      shuffle($json_resultado);
    }
       
    if($actividad::numero()){
      $json = array("status" => 1, "msg" => "Se encontraron las preguntas de la actividad", "preguntas" => $json_resultado);
    }else{
      $json = array("status" => 0, "msg" => "No se encontraron preguntas");
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