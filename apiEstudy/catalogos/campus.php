<?php
include '../jwt.php';
include '../headers.php';

try {
  if($_SERVER['REQUEST_METHOD'] == "GET"){
    foreach($_GET as $clave => $valor){
      ${$clave} = escape_cara($valor);
    }
    
    $usuario = Auth::GetData(
        $jwt  
    );


    $query_campus = query('SELECT campus_id, institucion_id, campus_clave, campus, online, tipo_campus_id 
    FROM cat_campus where estatus = 1');

    $json_campus = array();
    while($arreglo_campus = arreglo($query_campus)){
      array_push($json_campus,$arreglo_campus);
    }
  

    if(num($query_campus) > 0 ){
      $json = array("status" => 1, "msg" => "Se encontraron campus","campus" => $json_campus);
     }else{
      $json = array("status" => 0, "msg" => "No se encontraron campus");
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
