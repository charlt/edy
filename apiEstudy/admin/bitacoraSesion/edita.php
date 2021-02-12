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
        $edita = query('update tr_bitacora_sesion 
        usuario_id = '.$id_usuario.',
        fecha_inicio = "'.$fecha_inicio.'",
        fecha_fin = "'.$fecha_fin.'",
        dispositivo = "'.$dispositivo.'"',
        'where bitacora_sesion_id = '.$bitacora_sesion_id);


       
       //ingreso todas las escuelas que tiene este profesor
       
       if($edita){
    		$json = array("status" => 1, "msg" => "Se actualizó la sesion correctamente");
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