<?php
include '../../jwt.php';
include '../../headers.php';
include '../class/usuario.class.php';

try {

  db('datosGenerales');

  $_usuario = new Usuario();

  if($_SERVER['REQUEST_METHOD'] == "GET"){
    foreach($_GET as $clave => $valor){
      ${$clave} = escape_cara($valor);
    }

      $usuario = Auth::GetData(
            $jwt  
        );

        $consulta = $_usuario::consulta_usuario($usuario->id,$usuario->id_rol);
         
       if($consulta != null){
    		$json = array("status" => 1, "msg" => "Bienvenido a tu plataforma","usuario" => $consulta);
    	 }else{
    		$json = array("status" => 0, "msg" => "No se encontró usuario");
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
