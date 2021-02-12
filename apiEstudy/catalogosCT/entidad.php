<?php
include '../jwt.php';
include '../headers.php';

try {
  
  db('certificaciontitulacion');

  if($_SERVER['REQUEST_METHOD'] == "GET"){
    foreach($_GET as $clave => $valor){
      ${$clave} = escape_cara($valor);
    }
    
    $usuario = Auth::GetData(
        $jwt  
    );


    $query_entidad = query('SELECT * FROM cat_entidad');

    $json_entidad = array();
    while($arreglo_entidad = arreglo($query_entidad)){
      array_push($json_entidad,$arreglo_entidad);
    }
  

    if(num($query_entidad) > 0 ){
      $json = array("status" => 1, "msg" => "Se encontro entidad","entidad" => $json_entidad);
     }else{
      $json = array("status" => 0, "msg" => "No se encontro entidad");
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
