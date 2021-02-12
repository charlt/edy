<?php
include '../../jwt.php';
include '../../headers.php';
include './class/docente.class.php';

try {
  
  db('controlEscolar');

  $docente = new Docente();

  if($_SERVER['REQUEST_METHOD'] == "GET"){
    foreach($_GET as $clave => $valor){
      ${$clave} = escape_cara($valor);
    }

      $usuario = Auth::GetData(
            $jwt  
        );


      $json_docente = $docente::consulta_docente($curp);   
       
       //ingreso todas las escuelas que tiene este profesor
       
       if($docente::numero()){
    		$json = array("status" => 1, "msg" => "Se encontró el alumno","alumno" => $json_docente);
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
