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
    $query_opcion_multiple = query('SELECT *
     FROM tr_pregunta_opcion_multiple WHERE respuesta_id = '.$id_respuesta);

    
       $json_opcion_multiple= array();
       while ($arreglo_opcion_multiple = arreglo($query_opcion_multiple)){
          array_push($json_opcion_multiple,$arreglo_opcion_multiple);
       }
       
       //ingreso todas las escuelas que tiene este profesor
       
       if(num($query_opcion_multiple)){
    		$json = array("status" => 1, "msg" => "Se encontro la pregunta","pregunta" => $json_opcion_multiple);
    	 }else{
    		$json = array("status" => 0, "msg" => "No se encontro la pregunta");
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