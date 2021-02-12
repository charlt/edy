<?php
include '../../jwt.php';
include '../../headers.php';

db ('datosGenerales');

try {
  if($_SERVER['REQUEST_METHOD'] == "POST"){
    foreach($_POST as $clave => $valor){
      ${$clave} = escape_cara($valor);
    }
    
      $usuario = Auth::GetData(
            $jwt  
        );
         
        // if ($plan_estudio_db != $plan_estudio_clave) {
          $edita = query('update cat_rol 
          set rol = "'.$rol.'", 
          fecha_actualiza = now(),
          usuario_actualiza = current_user()
          where rol_id = '.$id_rol);


       
       //ingreso todas las escuelas que tiene este profesor
       
       if($edita){
    		$json = array("status" => 1, "msg" => "Se actualizó el rol correctamente");
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