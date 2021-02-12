<?php
include '../../jwt.php';
include '../../headers.php';

try {
  
  db('pagos');


  if($_SERVER['REQUEST_METHOD'] == "GET"){
    foreach($_GET as $clave => $valor){
      ${$clave} = escape_cara($valor);
    }
    
  $usuario = Auth::GetData(
     $jwt
  );
     
    $total = arreglo(query('SELECT count(*) as total FROM tr_solicitud_pago WHERE estatus = 1'));

    if(count($total) > 0){
      $json = array("status" => 1, "msg" => "Se encontraron pagos", "pagos" => $total);
     }else{
      $json = array("status" => 0, "msg" => "No se encontraron pagos");
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
