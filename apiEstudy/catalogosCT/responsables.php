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


    $query_responsables = query('SELECT * FROM cat_responsables');

    $json_responsables = array();
    while($arreglo_responsables = arreglo($query_responsables)){
      array_push($json_responsables,$arreglo_responsables);
    }
  

    if(num($query_responsables) > 0 ){
      $json = array("status" => 1, "msg" => "Se encontroron responsables","responsables" => $json_responsables);
     }else{
      $json = array("status" => 0, "msg" => "No se encontro responsables");
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
