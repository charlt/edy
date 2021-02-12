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


    $query_tipo_certificacion = query('SELECT * FROM cat_tipo_certificacion');

    $json_tipo_certificacion = array();
    while($arreglo_tipo_certificacion = arreglo($query_tipo_certificacion)){
      array_push($json_tipo_certificacion,$arreglo_tipo_certificacion);
    }
  

    if(num($query_tipo_certificacion) > 0 ){
      $json = array("status" => 1, "msg" => "Se encontro certificación","certificación" => $json_tipo_certificacion);
     }else{
      $json = array("status" => 0, "msg" => "No se encontro certificación");
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
