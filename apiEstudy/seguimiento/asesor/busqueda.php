<?php
include '../../jwt.php';
include '../../headers.php';
include '../class/asesor.class.php';

try {
  
  db('seguimiento');

  $asesor = new Asesor();

  if($_SERVER['REQUEST_METHOD'] == "GET"){
    foreach($_GET as $clave => $valor){
      ${$clave} = escape_cara($valor);
    }
    
    $usuario = Auth::GetData(
        $jwt
    );
      
    if(!isset($busqueda)) $busqueda = null; //si no existe el parámetro de busqueda forzar a que busque algo
    
    $asesores = $asesor::busquedaAsesor($busqueda,$tipo_busqueda,$min,$max);    

    if($asesor){
      $json = array("status" => 1, "msg" => "Se encontraron asesores", "usuario" => $asesores);
     }else{
      $json = array("status" => 0, "msg" => "No se encontraron asesores");
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
