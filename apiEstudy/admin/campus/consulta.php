<?php
include '../../jwt.php';
include '../../headers.php';

try {
  
  db ('datosGenerales');

  if($_SERVER['REQUEST_METHOD'] == "GET"){
    foreach($_GET as $clave => $valor){
      ${$clave} = escape_cara($valor);
    }

      $usuario = Auth::GetData(
            $jwt  
        );

    //SERVICIO DE CONSULTA DE SESIÓN
    $query_campus = query('SELECT *
     FROM cat_campus WHERE campus_id = '.$id_campus);

    
       $json_campus= array();
       while ($arreglo_campus = arreglo($query_campus)){
          array_push($json_campus,$arreglo_campus);
       }
       
       //ingreso todas las escuelas que tiene este profesor
       
       if(num($query_campus)){
    		$json = array("status" => 1, "msg" => "Se encontraron los campus","campus" => $json_campus);
    	 }else{
    		$json = array("status" => 0, "msg" => "No se encontraron los campus");
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
