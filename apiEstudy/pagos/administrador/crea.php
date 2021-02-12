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
        

        $inserta_pago = inserta('cat_pago','nombre_pago, descripcion_pago, tipo_pago_id, estatus_pago_id, estatus',
        '"'.$clave_pago.'", "'.$descripcion_pago.'", "'.$tipo_pago_id.'", '.$estatus_pago_id.', 1');

      if($inserta_pago){
        $json = array("status" => 1, "msg" => "Se insertó el pago correctamente");
      }else{
        $json = $nuevo_alumno;
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

