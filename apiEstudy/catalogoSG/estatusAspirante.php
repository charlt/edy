<?php
include '../jwt.php';
include '../headers.php';

try {
  
  db('seguimiento');

  if($_SERVER['REQUEST_METHOD'] == "GET"){
    foreach($_GET as $clave => $valor){
      ${$clave} = escape_cara($valor);
    }
    
    $usuario = Auth::GetData(
        $jwt  
    );


    $query = query('SELECT * FROM cat_situacion_aspirante');

    $json = array();
    while($arreglo = arreglo($query)){
      array_push($json,$arreglo);
    }

    if(num($query) > 0 ){
      $json = array("status" => 1, "msg" => "Se encontraron estatus","estatus" => $json);
     }else{
      $json = array("status" => 0, "msg" => "No se encontro estatus");
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
