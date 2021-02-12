<?php
include '../config/callAPI.php';
include '../config/global.php';
require_once '../../config/db.php';
include '../../headers.php';

try {
  

  if($_SERVER['REQUEST_METHOD'] == "GET"){
    foreach($_GET as $clave => $valor){
      ${$clave} = escape_cara($valor);
    }

    if(isset($id_materia)){
      $url = $uri.'alumnos/'.$clave_alumno.'/materias/'.$id_materia.'/';
      $json_materias = CallAPI('GET',$url);
      $result_materias =  json_decode($json_materias);

      
      if($json_materias && sizeof($result_materias)){
        $json = array("status" => 1, "msg" => "Se encontró la siguiente materia del alumno","materias" => $result_materias);
       }else{
        $json = array("status" => 0, "msg" => "No se encontraron materias");
       }

    }else{
      $url = $uri.'alumnos/'.$clave_alumno.'/materias';
      $json_materias = CallAPI('GET',$url);
      $result_materias =  json_decode($json_materias);

      if($json_materias && sizeof($result_materias->materias)){
        $json = array("status" => 1, "msg" => "Se encontraron las siguientes materias del alumno","materias" => $result_materias->materias);
      }else{
        $json = array("status" => 0, "msg" => "No se encontraron materias");
      }

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
