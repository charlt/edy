<?php
include '../../jwt.php';
include '../../headers.php';
include '../class/alumno.class.php';

try {
  
  db('controlEscolar');

  $alumno=new Alumno();

  if($_SERVER['REQUEST_METHOD'] == "GET"){
    foreach($_GET as $clave => $valor){
      ${$clave} = escape_cara($valor);
    }
    
    $usuario = Auth::GetData(
        $jwt
    );
      
    if(!isset($busqueda)) $busqueda = null; //si no existe el parámetro de busqueda forzar a que busque algo
  
    $alumnos=$alumno::busquedaAlumnos($busqueda,$tipo_busqueda,$min,$max);    

    if($alumnos){
      $json = array("status" => 1, "msg" => "se encontraron alumnos","usuario" => $alumnos);
     }else{
      $json = array("status" => 0, "msg" => "No se encontraron alumnos");
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
