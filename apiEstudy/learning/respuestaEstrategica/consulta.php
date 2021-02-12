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
    $query_respuesta = query('SELECT *
     FROM tr_qq_respuesta WHERE pregunta_id = '.$id_pregunta.' and materia_fecha_actividad_id = '.$id_materia_fecha_actividad);

    
       $json_respuesta= array();
       while ($arreglo_respuesta = arreglo($query_respuesta)){
          array_push($json_respuesta,$arreglo_respuesta);
       }
       
       //ingreso todas las escuelas que tiene este profesor
       
       if(num($query_respuesta)){
    		$json = array("status" => 1, "msg" => "Se encontró la respuesta estrategica","respuesta" => $json_respuesta);
    	 }else{
    		$json = array("status" => 0, "msg" => "No se encontraron respuestas estrategicas");
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