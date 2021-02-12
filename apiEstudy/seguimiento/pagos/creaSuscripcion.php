<?php
include '../../headers.php';
include '../../jwt.php';
include '../../vendor/openpay-php-master/Openpay.php';
include './class/pago.class.php';
include '../../extras/correo/class/correo.class.php';



try{
  db('pagos');
  $pagos=new Pago();
  $correo=new Correo();


  $jwt = $_POST["jwt"];

  $usuario = Auth::GetData(
    $jwt  
  );
  

  if($GLOBALS['produccion'] == 1){
  //PROD
  Openpay::setProductionMode(true);
  $openpay = Openpay::getInstance('mtjhizunvsxqpivzkskj','sk_adc3d4ecf41f49cb98f29b15fa48f427');
  $subscription2=array('4640','p4qj9kkcna7cmatwlsqn');
  $subscription3=array('3886','pzrrnlnrwpg4jaljjlc7');
  $subscription4=array('3480','pexrwejpk4op89qd3yxg');
  
  }else{
  //PRUEBAS
  $openpay = Openpay::getInstance('mlh6cva6fahaxtl9xx3g','sk_9bd4e46da0a64615a313a8f7605c8244');
  $subscription2=array('4640','pk9araaj5hmulek7lsoo');
  $subscription3=array('3886','pk9araaj5hmulek7lsoo');
  $subscription4=array('3480','pk9araaj5hmulek7lsoo');

  }

  

  


    $customerData = array(
      'name' => $_POST["name"],
      'email' => $_POST["email"]
    );

    $customer = $openpay->customers->add($customerData);

    $cliente_id=$customer->id;

    //$json = array("status" => 1, "cliente_id" =>  $cliente_id);

    //echo json_encode($json);


    $cardDataRequest = array(
      'holder_name' => $_POST["holder_name"],
      'card_number' => $_POST["card_number"],
      'cvv2' => $_POST["cvv2"],
      'expiration_month' => $_POST["expiration_month"],
      'expiration_year' => $_POST["expiration_year"]);
  
    $customer = $openpay->customers->get($cliente_id);
    $card = $customer->cards->add($cardDataRequest);
    $tarjeta_id=$card->id;

    if ($_POST["subscription"]==2){
      $monto=$subscription2[0];
      $suscripcion=$subscription2[1];
    }else if($_POST["subscription"]==3){
      $monto=$subscription3[0];
      $suscripcion=$subscription3[1];
    }else if($_POST["subscription"]==4){
      $monto=$subscription4[0];
      $suscripcion=$subscription4[1];
    }

    $subscriptionDataRequest = array(
      "trial_end_date" => "2020-01-18",
      'plan_id' => $suscripcion,
      'card_id' => $tarjeta_id);

    $customer = $openpay->customers->get($cliente_id);
    $subscription = $customer->subscriptions->add($subscriptionDataRequest);

 
    $edita = query('update tr_solicitud_pago set estatus = 0 where aspirante_id = '.$usuario->id);
    /*funcion inserta solicitud y tarjeta*/
    $inserta_pago=$pagos::inserta_solicitud($usuario->id,2,4,$monto);
    if($inserta_pago){
        $inserta_suscripcion=$pagos::inserta_suscripcion($inserta_pago, $cliente_id,$tarjeta_id,$suscripcion, 1);
    }

    $edita = query('update '.$GLOBALS['db_seguimiento'].'.tr_aspirante set paso =4 where aspirante_id = '.$usuario->id);
   
      
    $pagado=$correo::pago_exitoso($usuario->id);

    
    if($edita){
        $json = array("status" => 1, "msg" =>  "Domiciliación exitosa");
     }else{
        $json = array("status" => 0, "msg" => "No se logró actualizar");
     }

    echo json_encode($json);
  

}
catch (Exception $e) {
  
  $msg;

  switch($e->getCode()){
    case 3001: 
        $msg = 'La tarjeta fue rechazada (3001).';
    break;
    case 3002: 
        $msg = 'La tarjeta ha expirado (3002).';
    break;
    case 3003: 
        $msg = 'La tarjeta no tiene fondos suficientes. (3003)';
    break;
    case 3004: 
        $msg = 'La tarjeta ha sido identificada como una tarjeta robada. (3004).';
    break;
    case 3005: 
        $msg = 'La tarjeta se ha rechazado por el sistema  de openPay (3005)';
    break;
    default:
        $msg = $e->getMessage();
    break;
}
    $json = array("status" => 0, "msg" =>  $msg);

    echo json_encode($json);
}



?>