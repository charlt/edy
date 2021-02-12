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
    $query_archivo = query('SELECT ta.actividad_nombre,tmfa.*,ar.url_archivo FROM tr_ad_respuesta ar
    join tr_materia_fecha_actividad tmfa ON tmfa.materia_fecha_actividad_id = ar.materia_fecha_actividad_id
    join tr_actividad ta on ta.actividad_id = tmfa.actividad_id
     WHERE materia_id ='.$id_materia);

    
       $json_archivo= array();
       while ($arreglo_archivo = arreglo($query_archivo)){
          array_push($json_archivo,$arreglo_archivo);
       }
       
       //ingreso todas las escuelas que tiene este profesor
       
       if(num($query_archivo)){
    		$json = array("status" => 1, "msg" => "Se encontro Archivos","materiaArchivos" => $json_archivo);
    	 }else{
    		$json = array("status" => 0, "msg" => "No se encontraron Archivos");
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