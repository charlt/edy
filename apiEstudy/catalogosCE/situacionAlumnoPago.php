<?php
include '../jwt.php';
include '../headers.php';

try {

  db('controlEscolar');

  if($_SERVER['REQUEST_METHOD'] == "GET"){
    foreach($_GET as $clave => $valor){
      ${$clave} = escape_cara($valor);
    }
    
    $usuario = Auth::GetData(
        $jwt  
    );


    $query_situacion_pago = query('SELECT * FROM cat_situacion_pago where estatus =1');

    $json_situacion_pago = array();
    while($arreglo_situacion_pago = arreglo($query_situacion_pago)){
      array_push($json_situacion_pago,$arreglo_situacion_pago);
    }
  

    if(num($query_situacion_pago) > 0 ){
      $json = array("status" => 1, "msg" => "Se encontraron Estatus","ciclo_estatus" => $json_situacion_pago);
     }else{
      $json = array("status" => 0, "msg" => "No se encontraron Estatus");
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
