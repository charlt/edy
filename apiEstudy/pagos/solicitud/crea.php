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
        
      
        if(!isset($beca)) $beca = '0';

        if(!isset($id_descuento)){
          $id_descuento = 'null';
        }

        $inserta_solicitud = inserta('tr_solicitud_pago','persona_id, pago_id,nombre_pago,estatus_solicitud_pago_id, monto, beca, fecha_pago, 
        forma_pago_id, descuento_id, monto_final, porcentaje,usuario_creacion, estatus, observacion',
        ''.$id_persona.','.$id_pago.',"'.$nombre_pago.'",'.$id_estatus_solicitud_pago.','.$monto.','.$beca.',"'.$fecha_pago.'",
        '.$id_forma_pago.', '.$id_descuento.','.$monto_final.','.$porcentaje.',"'.$usuario->usuario.'", 1,"'.$observacion.'"');

      if($inserta_solicitud){
        $json = array("status" => 1, "msg" => "Se insertó la solicitud correctamente");
      }else{
        $json = array("status" => 1, "msg" => "No se insertó correctamente");
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


