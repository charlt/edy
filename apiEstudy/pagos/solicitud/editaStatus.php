<?php
include '../../jwt.php';
include '../../headers.php';
include '../class/pago.class.php';

try {

  db('pagos');

  $Pago = new Pago();

  if($_SERVER['REQUEST_METHOD'] == "POST"){
    foreach($_POST as $clave => $valor){
      ${$clave} = escape_cara($valor);
    }
    
      // $usuario = Auth::GetData(
      //       $jwt  
      //   );
         
      $edita_pago = update('tr_solicitud_pago',
      'estatus_solicitud_pago_id = '.$id_estatus_solicitud_pago,
      'solicitud_pago_id='.$id_solicitud_pago);


      if($id_estatus_solicitud_pago == '3'){

        $json = $Pago::procesa_pago($id_solicitud_pago);
      }else{
        if($edita_pago){
          $json = array("status" => 1, "msg" => "Se actualizó el dato correctamente");
        }else{
          $json = array("status" => 0, "msg" => "No se logró actualizar");
        }
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
