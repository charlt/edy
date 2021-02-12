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
      
    
      $query = query('SELECT videoconferencia_id,nombre,descripcion,url_meet,UNIX_TIMESTAMP(fecha_inicio) as fecha_inicio,UNIX_TIMESTAMP(fecha_fin) as fecha_fin,TIMESTAMPDIFF(HOUR, fecha_inicio,fecha_fin) as duracion FROM tr_videoconferencia 
      WHERE videoconferencia_id = '.$id_videoconferencia);
       
       $arreglo = arreglo($query);
       
       //ingreso todas las escuelas que tiene este profesor
       
       if(num($query)){
    		$json = array("status" => 1, "msg" => "Se encontró videconferencia","videoconferencia" => $arreglo);
    	 }else{
    		$json = array("status" => 0, "msg" => "No se encontró videconferencia");
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