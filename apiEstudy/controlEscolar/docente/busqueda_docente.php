<?php
include '../../jwt.php';
include '../../headers.php';
include '../class/docente.class.php';

try {
  
  db('controlEscolar');

  $docente=new Docente();

  if($_SERVER['REQUEST_METHOD'] == "GET"){
    foreach($_GET as $clave => $valor){
      ${$clave} = escape_cara($valor);
    }
    
    $usuario = Auth::GetData(
        $jwt
    );
      
    if(!isset($busqueda)) $busqueda = null; //si no existe el parámetro de busqueda forzar a que busque algo
    
    $docente=$docente::busquedaDocente($busqueda,$tipo_busqueda,$min,$max);    

    if($docente){
      $json = array("status" => 1, "msg" => "se encontraron docentes","usuario" => $docente);
     }else{
      $json = array("status" => 0, "msg" => "No se encontraron docentes");
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
