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
         
        //grupo es una cadena no un número
        $inserta = inserta('inter_carrera_plan', 'carrera_id, plan_estudio_id, estatus, fecha_creacion, fecha_actualiza',
        ''.$carrera_id.','.$plan_estudio_id.',1, now(), now()');


       
       //ingreso todas las escuelas que tiene este profesor
       
       if($inserta){
    		$json = array("status" => 1, "msg" => "Se creo el campus y la carrera correctamente");
    	 }else{
    		$json = array("status" => 0, "msg" => "No se logró vincular");
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
