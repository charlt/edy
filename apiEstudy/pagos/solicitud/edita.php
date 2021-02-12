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

        if(!isset($porcentaje)){
          $porcentaje = '0';
        }

        if(!isset($beca)) $beca = '0';

        if(!isset($id_descuento)){
          $id_descuento = 'null';
        }

        if($observacion != 'null'){
          $script_observacion = 'observacion = "'.$observacion.'",';
        }else{
          $script_observacion = '';
        }
        
        

        

        $edita_pago = update('tr_solicitud_pago',
         'estatus_solicitud_pago_id = '.$id_estatus_solicitud_pago.',
         monto = '.$monto.', 
         beca = '.$beca.',
         fecha_pago = "'.$fecha_pago.'", 
         forma_pago_id ='.$id_forma_pago.',
         descuento_id = '.$id_descuento.',
         monto_final = '.$monto_final.',
         porcentaje = '.$porcentaje.' ,
         '.$script_observacion.'
         usuario_actualiza = "'.$usuario->usuario.'"'
         ,'solicitud_pago_id='.$id_solicitud_pago);

      if($edita_pago){
        $json = array("status" => 1, "msg" => "Se editó la solicitud correctamente");
      }else{
        $json = array("status" => 1, "msg" => "Hubo un problema al editar la solicitud");
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


