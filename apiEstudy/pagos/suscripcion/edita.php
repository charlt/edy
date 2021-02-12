<?php
include '../../jwt.php';
include '../../headers.php';

try {

  db('pagos');

  if($_SERVER['REQUEST_METHOD'] == "POST"){
    foreach($_POST as $clave => $valor){
      ${$clave} = escape_cara($valor);
    }
    
      $usuario = Auth::GetData(
            $jwt  
        );
         
    

        $edita = update('cat_suscripcion', 
        'nombre_suscripcion = "'.$nombre_suscripcion.'",
        descripcion_suscripcion = "'.$descripcion_suscripcion.'",
        clave_suscripcion = "'.$clave_suscripcion.'",
        monto_reinscripcion = '.$monto_reinscripcion.',
        dia_pago_reinscripcion = '.$dia_pago_reinscripcion.',
        monto_colegiatura = '.$monto_colegiatura.',
        dia_pago_colegiatura = '.$dia_pago_colegiatura,
        'suscripcion_id = '.$id_suscripcion);


       
       //ingreso todas las escuelas que tiene este profesor
       
       if($edita){
    		$json = array("status" => 1, "msg" => "Se actualizó el dato correctamente");
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
