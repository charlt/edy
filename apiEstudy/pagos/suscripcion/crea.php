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
         
        //grupo es una cadena no un número
        $inserta_suscripcion = inserta_last_id('cat_suscripcion', 'nombre_suscripcion,descripcion_suscripcion,clave_suscripcion,monto_inscripcion,monto_reinscripcion,dia_pago_reinscripcion,monto_colegiatura,dia_pago_colegiatura,estatus',
        '"'.$nombre_suscripcion.'", "'.$descripcion_suscripcion.'", "'.$clave_suscripcion.'",'.$monto_reinscripcion.','.$monto_reinscripcion.','.$dia_pago_reinscripcion.','.$monto_colegiatura.','.$dia_pago_colegiatura.',1');

        $inserta_inscripcion = inserta_last_id('tr_pago', 'tipo_pago_id,estatus','1,1');

        $inserta = inserta('tr_suscripcion_pago', 'suscripcion_id,mes,anio,pago_id,tipo,estatus',
        ''.$inserta_suscripcion.',0,0,'.$inserta_inscripcion.',3,1');
         
       //ingreso todas las escuelas que tiene este profesor
       
       if($inserta_suscripcion){
    		$json = array("status" => 1, "msg" => "Dato insertado correctamente", "idSuscripcion" => $inserta_suscripcion);
    	 }else{
    		$json = array("status" => 0, "msg" => "No se logró insertar el dato");
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
