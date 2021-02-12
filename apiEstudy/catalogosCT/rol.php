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


    $query_rol = query('SELECT * FROM cat_rol');

    $json_rol = array();
    while($arreglo_rol = arreglo($query_rol)){
      array_push($json_rol,$arreglo_rol);
    }
  

    if(num($query_rol) > 0 ){
      $json = array("status" => 1, "msg" => "Se encontro rol","rol" => $json_rol);
     }else{
      $json = array("status" => 0, "msg" => "No se encontro rol");
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
