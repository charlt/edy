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


    $query_observaciones = query('SELECT * FROM cat_observaciones');

    $json_observaciones = array();
    while($arreglo_observaciones = arreglo($query_observaciones)){
      array_push($json_observaciones,$arreglo_observaciones);
    }
  

    if(num($query_observaciones) > 0 ){
      $json = array("status" => 1, "msg" => "Se encontraron observaciones","observaciones" => $json_observaciones);
     }else{
      $json = array("status" => 0, "msg" => "No se encontro observaciones");
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
