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
      $query_respuesta = query('SELECT respuesta_id, reactivo_id, alumno_id, estatus_respuesta_id, intento_num, fecha_actividad, fecha_creacion, fecha_actualiza, estatus
      FROM tr_om_respuesta where reactivo_id='.$id_reactivo.' and alumno_id='.$id_alumno.'');

    
       $json_respuesta= array();
       while ($arreglo_respuesta = arreglo($query_respuesta)){
          array_push($json_respuesta,$arreglo_respuesta);
       }
       
       //ingreso todas las escuelas que tiene este profesor
       
       if(num($query_respuesta)){
    		$json = array("status" => 1, "msg" => "Se encontraron respuestas","respuestas" => $json_respuesta);
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