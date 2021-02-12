<?php
include '../../jwt.php';
include '../../headers.php';
include './class/actividad.class.php';
try {
  
  db ('learning');

  $actividad = new Actividad();

  if($_SERVER['REQUEST_METHOD'] == "POST"){
    foreach($_POST as $clave => $valor){
      ${$clave} = escape_cara($valor);
    }

      $usuario = Auth::GetData(
            $jwt  
        );

        $json_actividad = $actividad::clonarActividad($id_actividad,$id_modulo,$usuario->usuario);
       if($json_actividad){
    		$json = array("status" => 1, "msg" => "Se duplicó la actividad correctamente");
    	 }else{
    		$json = array("status" => 0, "msg" => "No se duplicó la actividad");
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