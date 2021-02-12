<?php
include '../../jwt.php';
include '../../headers.php';
include '../class/alumno.class.php';

try {
  
  db('controlEscolar');

  $alumno = new Alumno();

  if($_SERVER['REQUEST_METHOD'] == "GET"){
    foreach($_GET as $clave => $valor){
      ${$clave} = escape_cara($valor);
    }

      $usuario = Auth::GetData(
            $jwt  
        );

    $consulta_alumno = $alumno::consulta($id_alumno,2);
      
      if($consulta_alumno){
    		$json = array("status" => 1, "msg" => "Se encontró el alumno","alumno" => $consulta_alumno);
    	 }else{
    		$json = array("status" => 0, "msg" => "No se encontró alumno");
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
