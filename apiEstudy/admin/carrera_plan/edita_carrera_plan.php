<?php
include '../../jwt.php';
include '../../headers.php';

try {

  db ('datosGenerales');

  if($_SERVER['REQUEST_METHOD'] == "POST"){
    foreach($_POST as $clave => $valor){
      ${$clave} = escape_cara($valor);
    }
    
       $usuario = Auth::GetData(
            $jwt  
        );


          $edita = update('inter_carrera_plan',
          'carrera_id = '.$id_carrera_alt.',
          plan_estudio_id = '.$id_plan_estudio_alt.',
          fecha_actualiza = now(),
          estatus = '.$estatus,
          'carrera_id = '.$id_carrera.' and plan_estudio_id = '.$id_plan_estudio);

               
       //ingreso todas las carreras que tiene
       
       if($edita){
    		$json = array("status" => 1, "msg" => "Se actualizó la carrera correctamente");
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
