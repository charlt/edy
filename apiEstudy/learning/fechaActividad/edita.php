<?php
include '../../jwt.php';
include '../../headers.php';
include './class/fechaActividad.class.php';

try {

  db ('learning');

  $actividad = new FechaActividad();

  if($_SERVER['REQUEST_METHOD'] == "POST"){
    foreach($_POST as $clave => $valor){
      ${$clave} = escape_cara($valor);
    }
    
      $usuario = Auth::GetData(
            $jwt  
        );

        $edita = $actividad::modifica_actividad( $calificacion, $intento_num, 
        $id_estatus_actividad, $id_materia_fecha_actividad); 
       //ingreso todas las carreras que tiene
       
       if($edita){
    		$json = array("status" => 1, "msg" => "Se actualizó la respuesta correctamente");
    	 }else{
    		$json = array("status" => 0, "msg" => "No se logró actualizar");
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
