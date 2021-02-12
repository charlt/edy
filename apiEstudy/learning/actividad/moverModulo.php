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

        $json_actividad = $actividad::moverModulo($id_actividad,$orden,$id_modulo,$id_modulo_nuevo);
       if($json_actividad){
    		$json = array("status" => 1, "msg" => "Se movío la actividad de bloque correctamente");
    	 }else{
    		$json = array("status" => 0, "msg" => "No se logro mover la actividad");
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