<?php
include '../../jwt.php';
include '../../headers.php';
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
    }else{
    //PRUEBAS
    $openpay = Openpay::getInstance('mlh6cva6fahaxtl9xx3g','sk_9bd4e46da0a64615a313a8f7605c8244');    
    }

  

    $customer = array(
        'name' => $_POST["name"],
        'last_name' => $_POST["last_name"],
        'phone_number' => $_POST["phone_number"],
        'email' => $_POST["email"]);

    $chargeData = array(
        'method' => 'card',
        'source_id' => $_POST["token_id"],
        'amount' => (float)$_POST["amount"],
        'description' => $_POST["description"],
        'device_session_id' => $_POST["deviceIdHiddenFieldName"],
        'customer' => $customer
        );

    $charge = $openpay->charges->create($chargeData);
 
    $autorizacion=$charge->authorization;
    $estado=$charge->status;
    $id_cliente=$charge->id;
    $id_orden=$charge->order_id;

 
    $edita = query('update tr_solicitud_pago set estatus = 0 where aspirante_id = '.$usuario->id);
    /*funcion inserta solicitud y tarjeta*/
    $inserta_pago=$pagos::inserta_solicitud($usuario->id,2,2,$_POST['amount']);
    if($inserta_pago){
        $inserta_tarjeta=$pagos::inserta_tarjeta($inserta_pago, $autorizacion, 1);
    }

$edita = query('update '.$GLOBALS['db_seguimiento'].'.tr_aspirante set paso =4 where aspirante_id = '.$usuario->id);
    $edita = query('update '.$GLOBALS['db_seguimiento'].'.tr_aspirante set paso =4 where aspirante_id = '.$usuario->id);
    
    if($GLOBALS['produccion'] == 1)
        $pagado=$correo::pago_exitoso($usuario->id);

if($edita){
        $json = array("status" => 1, "msg" =>  "Pago realizado, su número de autorización es: ".$autorizacion);
     }else{
        $json = array("status" => 0, "msg" => "No se logró actualizar");
     }

    echo json_encode($json);

}
catch (Exception $e) {
    

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
