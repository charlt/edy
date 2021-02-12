<?php
include '../../jwt.php';
include '../../headers.php';

try {

  db ('pagos');

  if($_SERVER['REQUEST_METHOD'] == "POST"){
    foreach($_POST as $_clave => $_valor){
      ${$_clave} = escape_cara($_valor);
    }
    
    $usuario = Auth::GetData(
          $jwt  
      );

        // if ($carreras_db != $carrera_clave) {ok
        
          $edita = update('cat_descuento',
          'clave = "'.$clave.'",
          descripcion = "'.$descripcion.'",
          fecha_inicio = "'.$fecha_inicio.'",
          fecha_fin = "'.$fecha_fin.'",
          descuento = "'.$descuento.'",
          valor = '.$valor.',
          codigo_promocion = "'.$cod_promo.'"',
          'descuento_id = '.$id_descuento);


        
          
       
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
