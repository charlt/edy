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
        $inserta_pago = inserta_last_id('tr_pago', 'tipo_pago_id,estatus','1,1');

        $inserta = inserta('tr_suscripcion_pago', 'suscripcion_id,mes,anio,pago_id,tipo,estatus',
        ''.$id_suscripcion.','.$mes.','.$anio.','.$inserta_pago.','.$tipo.',1');


       
       //ingreso todas las escuelas que tiene este profesor
       
       if($inserta){
    		$json = array("status" => 1, "msg" => "Dato insertado correctamente");
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
