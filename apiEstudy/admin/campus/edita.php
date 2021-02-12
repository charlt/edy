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

        
         //if ($instituciones_db != $institucion_clave) {ok
          $edita = update('cat_campus',
          'institucion_id = '.$usuario->id_institucion.',
          campus_clave = "'.$clave_campus.'",
          campus = "'.$campus.'",
          online = '.$online.',
          tipo_campus_id = '.$id_tipo_campus.',
          fecha_actualiza = now(),
          usuario_actualiza = current_user(),
          estatus = 1',
          'campus_ID = '.$id_campus);


       
       //ingreso todas las carreras que tiene
       
       if($edita){
    		$json = array("status" => 1, "msg" => "Se actualizó el campus correctamente");
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
