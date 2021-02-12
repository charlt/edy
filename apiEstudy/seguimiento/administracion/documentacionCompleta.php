<?php
include '../../jwt.php';
include '../../headers.php';
include '../../extras/correo/class/correo.class.php';

try {

  $correo = new Correo();

  if($_SERVER['REQUEST_METHOD'] == "POST"){
    foreach($_POST as $clave => $valor){
      ${$clave} = escape_cara($valor);
    }
    
    $usuario = Auth::GetData(
        $jwt  
    );

    $correo = new Correo();

    $estatus_correo = $correo::documentacionCompleta($id_persona);

    if($estatus_correo == 1){
        $json = array("status" => 1, "msg" => "Correo enviado correctamente");
    }else{
        $json = array("status" => 1, "msg" => "Ocurrió un error al enviar el correo");
    }

  }else{
  	$json = array("status" => 1, "msg" => "Método no aceptado");
  }

  /* Output header */

  echo json_encode($json);

} catch (Exception $e) {
    $json = array("status" => 0, "msg" =>  $e->getMessage());

    echo json_encode($json);
}