<?php
include '../jwt.php';
include '../headers.php';

try {
  
  db('datosGenerales');

  if($_SERVER['REQUEST_METHOD'] == "GET"){
    foreach($_GET as $clave => $valor){
      ${$clave} = escape_cara($valor);
    }
    
    $usuario = Auth::GetData(
        $jwt  
    );

    $query_tronco = query('SELECT * from cat_asignaturas where tipo_asignatura_id = 6 and estatus = 1');  
    $json=array();
    while($arreglo = arreglo($query_tronco)){
        array_push($json, $arreglo);
    }

    if(num($query_tronco)){
      $json = array("status" => 1, "msg" => "Se encontraron asignaturas con tronco comun","materias" => $json);
     }else{
      $json = array("status" => 0, "msg" => "No se encontraron asignaturas");
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