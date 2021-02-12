<?php
// include '../../jwt.php';
include '../../headers.php';
include '../../vendor/openpay-php-master/Openpay.php';
require_once '../../config/db.php';

try{
    include './openpay-errors.php';

    // $matricula = $_POST['matricula'];
    $monto = $_POST['amount'];
    $id_solicitud_pago = $_POST['id_solicitud_pago'];
    $descripcion = $_POST['description'];

    if($_POST['produccion'] == 'true'){
        //PROD
        // Openpay::setProductionMode(true);
        // // $id = 'mxtkp6hpf6eoqgrwsvat';
        // $id = 'mxtkp6hpf6eoqgrwsvat';
        // $openpay = Openpay::getInstance($id,'sk_0a659512cd8d4788919b17acf2329542');
        // $redirect_url = $GLOBALS['url_front_pago']."/#/completado-op/$id_solicitud_pago";
        
        // $openpay_url = "https://api.openpay.mx/v1/$id/charges/"; 
        

        //PRUEBA EN SERVIDOR
        // $id = 'm5gnjuckgutcnnq5ak5x';
        $id = 'mpbnfmkiekgicisu6qfi';

        $openpay = Openpay::getInstance($id,'sk_fcc15f4c41b34000a86dd13493ff2e52');    
        // $id = 'mt2b4o1w2olgt3ksgjok';
        // $openpay = Openpay::getInstance($id, 'sk_5f174dd97b4b4b2b9dbeba0d6fd20f49');
        // $redirect_url ="https://enlace.edu.mx/web_dev/pagos/#/metodo/$matricula/1";
        $redirect_url = $GLOBALS['url_front_pago']."/#/completado-op/$id_solicitud_pago";
        $openpay_url = "https://sandbox-api.openpay.mx/v1/$id/charges/";
    }else {
        //PRUEBAS
        // $id = 'm5gnjuckgutcnnq5ak5x';
        $id = 'mpbnfmkiekgicisu6qfi';

        $openpay = Openpay::getInstance($id,'sk_fcc15f4c41b34000a86dd13493ff2e52');    
        // $id = 'mt2b4o1w2olgt3ksgjok';
        // $openpay = Openpay::getInstance($id, 'sk_5f174dd97b4b4b2b9dbeba0d6fd20f49');
        // $redirect_url ="https://enlace.edu.mx/web_dev/pagos/#/metodo/$matricula/1";
        $redirect_url = $GLOBALS['url_front_pago']."/#/completado-op/$id_solicitud_pago";
        $openpay_url = "https://sandbox-api.openpay.mx/v1/$id/charges/";
    }



    $customer = array(
        'name' => $_POST["name"],
        'last_name' => $_POST["last_name"],
        'phone_number' => $_POST["phone_number"],
        'email' => $_POST["email"]);
    
    $chargeData = array(
        'method' => 'card',
        'source_id' => $_POST["token_id"],
        'amount' => $monto, // formato númerico con hasta dos dígitos decimales.
        'description' => $descripcion,
        'device_session_id' => $_POST["deviceIdHiddenFieldName"],
        'customer' => $customer,
        "currency" => 'MXN',
        'use_3d_secure' => 'true',
        'redirect_url' => $redirect_url
    );


    // try {
        $charge = $openpay->charges->create($chargeData);
        $charge_url = $openpay_url.$charge->authorization."/redirect/";
        // header("Location: https://sandbox-api.openpay.mx/v1/vpos/3dsecure-auth-simulator/$charge->authorization");
        $autorizacion = $charge->authorization;
        $estado = $charge->status;
    // }catch(OpenpayApiTransactionError $error_charge) {
    //     $error = $error_codes[$error_charge->getErrorCode()];
        $json = array("status" => 1, "url" => $charge_url, "autorizacion" => $charge->authorization, "estado" => $charge->status);
        echo json_encode($json);
    // }

    // $charge = $openpay->charges->create($chargeData);
 
    // $autorizacion=$charge->authorization;
    // $estado=$charge->status;
    // $id_cliente=$charge->id;
    // $id_orden=$charge->order_id;

    // $json = array("status" => 1, "autorizacion" => $autorizacion, "estado" => $estado);
 
    // $inserta_pago = inserta('tr_pago','matricula, saldo, estatus_pago_id, origen_pago_id, tipo_pago_id,numero_transaccion, estatus'
    // ,'"'.$_POST['matricula'].'",'.$_POST['amount'].',2,1,1,"'.$json['autorizacion'].'",1');



//     $edita = query('update tr_solicitud_pago set estatus = 0 where aspirante_id = '.$usuario->id);
//     /*funcion inserta solicitud y tarjeta*/
//     $inserta_pago=$pagos::inserta_solicitud($usuario->id,2,2,$_POST['amount']);
//     if($inserta_pago){
//         $inserta_tarjeta=$pagos::inserta_tarjeta($inserta_pago, $autorizacion, 1);
//     }

// $edita = query('update '.$GLOBALS['db_seguimiento'].'.tr_aspirante set paso =4 where aspirante_id = '.$usuario->id);
//     $edita = query('update '.$GLOBALS['db_seguimiento'].'.tr_aspirante set paso =4 where aspirante_id = '.$usuario->id);
      
//     $pagado=$correo::pago_exitoso($usuario->id);

// if($edita){
//         $json = array("status" => 1, "msg" =>  "Pago realizado, su número de autorización es: ".$autorizacion);
//      }else{
//         $json = array("status" => 0, "msg" => "No se logró actualizar");
//      }


}
catch (Exception $e) {
    
    switch($e->getCode()){
        case 3001: 
            $msg = 'La tarjeta fue rechazada (3001).';
            // $isnerta_error = inserta('tr_pago','matricula, saldo, estatus_pago_id, origen_pago_id, tipo_pago_id,observacion, estatus'
            // ,'"'.$_POST['matricula'].'","'.$_POST['amount'].'",4,1,1,"'.$msg.'",1');
        break;
        case 3002: 
            $msg = 'La tarjeta ha expirado (3002).';
            // $isnerta_error = inserta('tr_pago','matricula, saldo, estatus_pago_id, origen_pago_id, tipo_pago_id,observacion, estatus'
            // ,'"'.$_POST['matricula'].'","'.$_POST['amount'].'",4,1,1,"'.$msg.'",1');
            
        break;
        case 3003: 
            $msg = 'La tarjeta no tiene fondos suficientes. (3003)';
            // $isnerta_error = inserta('tr_pago','matricula, saldo, estatus_pago_id, origen_pago_id, tipo_pago_id,observacion, estatus'
            // ,'"'.$_POST['matricula'].'","'.$_POST['amount'].'",4,1,1,"'.$msg.'",1');
        
        break;
        case 3004: 
            $msg = 'La tarjeta ha sido identificada como una tarjeta robada. (3004).';
            // $isnerta_error = inserta('tr_pago','matricula, saldo, estatus_pago_id, origen_pago_id, tipo_pago_id,observacion, estatus'
            // ,'"'.$_POST['matricula'].'","'.$_POST['amount'].'",4,1,1,"'.$msg.'",1');
        
        break;
        case 3005: 
            $msg = 'La tarjeta se ha rechazado por el sistema  de openPay (3005)';
            // $isnerta_error = inserta('tr_pago','matricula, saldo, estatus_pago_id, origen_pago_id, tipo_pago_id,observacion, estatus'
            // ,'"'.$_POST['matricula'].'","'.$_POST['amount'].'",4,1,1,"'.$msg.'",1');
        
            // $inserta = isnerta('');
        break;
        default:
            $msg = $e->getMessage();
            // $isnerta_error = inserta('tr_pago','matricula, saldo, estatus_pago_id, origen_pago_id, tipo_pago_id,observacion, estatus'
            // ,'"'.$_POST['matricula'].'",'.$_POST['amount'].',4,1,1,"'.$msg.'",1');
        
        break;
    }
    $json = array("status" => 0, "msg" =>  $msg);

    echo json_encode($json);
}

?>
