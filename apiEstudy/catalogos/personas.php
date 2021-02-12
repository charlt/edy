<?php
include '../jwt.php';
include '../headers.php';

try {

  db ('datosGenerales');
  if($_SERVER['REQUEST_METHOD'] == "GET"){
    foreach($_GET as $clave => $valor){
      ${$clave} = escape_cara($valor);
    }
    
    $usuario = Auth::GetData(
        $jwt  
    );


    $query_personas = query('SELECT * FROM personas');

    $json_personas = array();
    while($arreglo_personas = arreglo($query_personas)){
      array_push($json_personas,$arreglo_personas);
    }
  

    if(num($query_personas) > 0 ){
      $json = array("status" => 1, "msg" => "Se encontraron personas","personas" => $json_personas);
     }else{
      $json = array("status" => 0, "msg" => "No se encontraron personas");
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
