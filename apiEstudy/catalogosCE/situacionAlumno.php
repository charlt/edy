<?php
include '../jwt.php';
include '../headers.php';

try {

  db('controlEscolar');

  if($_SERVER['REQUEST_METHOD'] == "GET"){
    foreach($_GET as $clave => $valor){
      ${$clave} = escape_cara($valor);
    }
    
    $usuario = Auth::GetData(
        $jwt  
    );


    $query_situacion_alumno = query('SELECT * FROM cat_situacion_alumno where estatus =1');

    $json_situacion_alumno = array();
    while($arreglo_situacion_alumno = arreglo($query_situacion_alumno)){
      array_push($json_situacion_alumno,$arreglo_situacion_alumno);
    }
  

    if(num($query_situacion_alumno) > 0 ){
      $json = array("status" => 1, "msg" => "Se encontraron Estatus","ciclo_estatus" => $json_situacion_alumno);
     }else{
      $json = array("status" => 0, "msg" => "No se encontraron Estatus");
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
