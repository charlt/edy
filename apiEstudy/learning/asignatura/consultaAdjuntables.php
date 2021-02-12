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
    $query = query('SELECT tm.materia_id,tm.alumno_id,tm.asignatura_id,mfa.actividad_id,mfa.materia_fecha_actividad_id from tr_materia tm 
    join tr_materia_fecha_actividad mfa on mfa.materia_id = tm.materia_id 
    join tr_ad_respuesta tar on tar.materia_fecha_actividad_id = mfa.materia_fecha_actividad_id
    where mfa.materia_id='.$id_materia);

    
       $json_adjuntables= array();
       while ($arreglo_adjuntables = arreglo($query)){
          array_push($json_adjuntables,$arreglo_adjuntables);
       }
       
       //ingreso todas las escuelas que tiene este profesor
       
       if(num($query)){
    		$json = array("status" => 1, "msg" => "Se encontraron Respuestas","Respuestas" => $json_adjuntables);
    	 }else{
    		$json = array("status" => 0, "msg" => "No se encontraron Respuestas");
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