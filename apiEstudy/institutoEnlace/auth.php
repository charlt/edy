<?php
include './config/callAPI.php';
include './config/global.php';
include '../jwt.php';
include '../headers.php';

try {
  
  db('learning');

  if($_SERVER['REQUEST_METHOD'] == "GET"){
    foreach($_GET as $clave => $valor){
      ${$clave} = escape_cara($valor);
    }
    
    $url = $uri.'alumnos/'.$clave_alumno;
    
    $json_alumno = CallAPI('GET',$url);
    $json_alumno = json_decode($json_alumno);
    $jwt = Auth::SignExterno(
      '1',
      $json_alumno[0]->nombre,
      $json_alumno[0]->ap_pat,
      $json_alumno[0]->ap_mat,
      "1",
      'institucionEnlaceEducativo',
      '2',
      'Alumno'
    );

    $json = array("status" => 1, "jwt" => $jwt);


}else{
    $json = array("status" => 0, "msg" => "Método no aceptado");
}

/* Output header */

echo json_encode($json);

} catch (Exception $e) {
  $json = array("status" => 0, "msg" =>  $e->getMessage());

  echo json_encode($json);
}
