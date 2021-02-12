<?php
include '../jwt.php';
include '../headers.php';

try {
  
  db('learning');

  if($_SERVER['REQUEST_METHOD'] == "GET"){
    foreach($_GET as $clave => $valor){
      ${$clave} = escape_cara($valor);
    }
    
    $usuario = Auth::GetData(
        $jwt  
    );


    $query_importancia_actividad = query('SELECT * FROM cat_importancia_actividad where estatus = 1');

    $json_importancia_actividad = array();
    while($arreglo_importancia_actividad = arreglo($query_importancia_actividad)){
      array_push($json_importancia_actividad,$arreglo_importancia_actividad);
    }
  

    if(num($query_importancia_actividad) > 0 ){
      $json = array("status" => 1, "msg" => "Se encontraron tipos de actividades","actividades" => $json_importancia_actividad);
     }else{
      $json = array("status" => 0, "msg" => "No se encontraron tipos de actividades");
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
