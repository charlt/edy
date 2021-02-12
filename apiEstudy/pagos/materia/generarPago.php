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
    
        $query_pagos = query('select asignatura_id,pago_id,monto from inter_asignatura_pago where asignatura_id = '.$id_asignatura);

        $arreglo_pagos = arreglo($query_pagos);
    
        $inserta_solicitud = inserta_last_id('tr_solicitud_pago','persona_id, pago_id,nombre_pago,estatus_solicitud_pago_id, monto, 
        forma_pago_id, monto_final, estatus',
        ''.$usuario->id.','.$arreglo_pagos['pago_id'].',"'.$nombre_pago.'",1,'.$arreglo_pagos['monto'].', 1,'.$arreglo_pagos['monto'].', 1');

      if($inserta_solicitud){
        $json = array("status" => 1, "msg" => "Se insertó la solicitud correctamente","idSolicitudPago" => $inserta_solicitud);
      }else{
        $json = array("status" => 1, "msg" => "No se logro procesar la solicitud");
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


