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


    $query_tipo_periodo = query('SELECT * FROM cat_tipo_periodo');

    $json_tipo_periodo = array();
    while($arreglo_tipo_periodo = arreglo($query_tipo_periodo)){
      array_push($json_tipo_periodo,$arreglo_tipo_periodo);
    }
  

    if(num($query_tipo_periodo) > 0 ){
      $json = array("status" => 1, "msg" => "Se encontraron periodos","periodos" => $json_tipo_periodo);
     }else{
      $json = array("status" => 0, "msg" => "No se encontro sexo");
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