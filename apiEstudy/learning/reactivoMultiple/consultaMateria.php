<?php
include '../../jwt.php';
include '../../headers.php';

try {
  
  db ('learning');

  if($_SERVER['REQUEST_METHOD'] == "GET"){
    foreach($_GET as $clave => $valor){
      ${$clave} = escape_cara($valor);
    }

      $usuario = Auth::GetData(
            $jwt  
        );

    //SERVICIO DE CONSULTA DE SESIÓN
    $query_respuestas = query('select respuesta_id from tr_om_reactivos omr 
    join tr_om_respuesta tor on omr.reactivo_id = tor.reactivo_id
    join tr_materia_fecha_actividad tmfa on tmfa.materia_fecha_actividad_id = tor.materia_fecha_actividad_id
    where pregunta_id ='.$pregunta_id.' and omr.estatus = 1 and tmfa.materia_id != 0');

    $num_respuestas = num($query_respuestas);

              
       if($num_respuestas){
    		$json = array("status" => 1, "msg" => "Se encontrarón respuestas","numero_respuestas" => $num_respuestas);
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