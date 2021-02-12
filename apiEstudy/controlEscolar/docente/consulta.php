<?php
include '../../jwt.php';
include '../../headers.php';
include '../class/docente.class.php';

try {
  
  db('controlEscolar');

  $docente = new docente();

  if($_SERVER['REQUEST_METHOD'] == "GET"){
    foreach($_GET as $clave => $valor){
      ${$clave} = escape_cara($valor);
    }

      $usuario = Auth::GetData(
            $jwt  
        );

    //SERVICIO DE CONSULTA DE SESIÓN
    //faltó nombre docente
        
    $json_docente = $docente::consulta($id_docente,3);         
       
       //ingreso todas las escuelas que tiene este profesor
       
       if($docente){
    		$json = array("status" => 1, "msg" => "Se encontró el docente","docente" => $json_docente);
    	 }else{
    		$json = array("status" => 0, "msg" => "No se encontró docente");
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
