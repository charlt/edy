<?php
include '../../jwt.php';
include '../../headers.php';

try {
  
  db('seguimiento');

  if($_SERVER['REQUEST_METHOD'] == "GET"){
    foreach($_GET as $clave => $valor){
      ${$clave} = escape_cara($valor);
    }
    
    $usuario = Auth::GetData(
        $jwt  
    );

    $query_reactivos = query('SELECT cleaver_base_id, nombre_reactivo,fecha_creacion,estatus from cat_reactivos_cleaver_base');
  
    $json_reactivos=array();
    while($arreglo = arreglo($query_reactivos)){
        array_push($json_reactivos, $arreglo);
    }
    if(num($query_reactivos)){
      $json = array("status" => 1, "msg" => "Se encontraron reactivos","reactivos" => $json_reactivos);
     }else{
      $json = array("status" => 0, "msg" => "No se encontraron reactivos");
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
