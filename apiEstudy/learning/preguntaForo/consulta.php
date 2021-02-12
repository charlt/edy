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
    $query_pregunta = query('SELECT *
     FROM tr_fr_pregunta WHERE pregunta_id = '.$id_pregunta.' and estatus = 1');

    
       $json_pregunta= array();
       while ($arreglo_pregunta = arreglo($query_pregunta)){
          array_push($json_pregunta,$arreglo_pregunta);
       }
       
       //ingreso todas las escuelas que tiene este profesor
       
       if(num($query_pregunta)){
    		$json = array("status" => 1, "msg" => "Se encontró contenido ","contenido" => $json_pregunta);
    	 }else{
    		$json = array("status" => 0, "msg" => "No se encontró el contenido");
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