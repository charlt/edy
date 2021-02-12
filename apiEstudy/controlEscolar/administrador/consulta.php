<?php
include '../../jwt.php';
include '../../headers.php';
include '../class/administrador.class.php';

try {
  
  db('controlEscolar');

  $admin = new Administrador();

  if($_SERVER['REQUEST_METHOD'] == "GET"){
    foreach($_GET as $clave => $valor){
      ${$clave} = escape_cara($valor);
    }

      $usuario = Auth::GetData(
            $jwt  
        );

    $consulta_administrador = $admin::consulta($id_adminstrador,1);
      
      if($consulta_administrador){
    		$json = array("status" => 1, "msg" => "Se encontró el administrador","administrador" => $consulta_administrador);
    	 }else{
    		$json = array("status" => 0, "msg" => "No se encontró administrador");
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
