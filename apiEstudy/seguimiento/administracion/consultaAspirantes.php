<?php
include '../../jwt.php';
include '../../headers.php';
include '../class/aspirante.class.php';

try {
  
  db('datosGenerales');

  $aspirante=new Aspirante();

  if($_SERVER['REQUEST_METHOD'] == "GET"){
    foreach($_GET as $clave => $valor){
      ${$clave} = escape_cara($valor);
    }
    
    $usuario = Auth::GetData(
        $jwt  
    );
      
    if(!isset($busqueda)) $busqueda = null; //si no existe el parámetro de busqueda forzar a que busque algo
    if(!isset($carrera_id)) $carrera_id = null;
    if(!isset($fecha_inicio)) $fecha_inicio = null;
    if(!isset($fecha_fin)) $fecha_fin = null;
    
    $json_aspirante=$aspirante::busqueda_aspirante($busqueda,$limit_inicio,$limit_final,$tipo, $carrera_id, $fecha_inicio, $fecha_fin);

    if($json_aspirante != null){
      $json = array("status" => 1, "msg" => "se encontraron aspirantes","aspirante" => $json_aspirante);
     }else{
      $json = array("status" => 0, "msg" => "No se encontraron aspirantes");
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
