<?php
include '../../jwt.php';
include '../../headers.php';
include '../class/aspirante.class.php';

try {
  
  db('seguimiento');

  $aspirante=new Aspirante();

  if($_SERVER['REQUEST_METHOD'] == "GET"){
    foreach($_GET as $clave => $valor){
      ${$clave} = escape_cara($valor);
    }
    
    $usuario = Auth::GetData(
        $jwt  
    );

    $elimina=$aspirante::elimina_aspirante($aspirante_id);

    if($elimina){
      $json = array("status" => 1, "msg" => "Se eliminó el aspirante correctamente");
     }else{
      $json = array("status" => 0, "msg" => "No se eliminó aspirante");
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
