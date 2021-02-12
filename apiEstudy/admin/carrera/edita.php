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

        // if ($carreras_db != $carrera_clave) {ok
        
          $edita = update('tr_carrera',
          'nivel_estudios_id = "'.$nivel_estudios_id.'",
          carrera_clave = "'.$carrera_clave.'",
          carrera = "'.$carrera.'",
          fecha_actualiza = now(),
          usuario_actualiza = current_user(),
          estatus = 1 ',
          'carrera_id = '.$id_carrera);


        
          
       
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
