<?php
include '../config/callAPI.php';
include '../config/global.php';
include '../../jwt.php';
include '../../headers.php';

try {
  
  db('learning');

  if($_SERVER['REQUEST_METHOD'] == "GET"){
    foreach($_GET as $clave => $valor){
      ${$clave} = escape_cara($valor);
    }
    
    $url = $uri.'alumnos/'.$clave_alumno;
    $json_alumno = CallAPI('GET',$url);
  

    if($json_alumno){
      $json = array("status" => 1, "msg" => "información del alumno","alumno" => json_decode($json_alumno));
     }else{
      $json = array("status" => 0, "msg" => "No se encontró el alumno");
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
