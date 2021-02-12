<?php
// include '../jwt.php';
// include '../headers.php';

// db('controlEscolar');

try {
  if($_SERVER['REQUEST_METHOD'] == "POST"){
    foreach($_POST as $clave => $valor){
      ${$clave} = $valor;
    }

    require_once '../../vendor/autoload.php';

    MercadoPago\SDK::setAccessToken("TEST-1669444573406749-070819-50e7833d08dc6eafca8b4f77ea2696ac-606048403");

    var_dump($_POST);
    $payment = new MercadoPago\Payment();
    $payment->transaction_amount = (float)$_POST['transactionAmount'];
    $payment->token = $_POST['token'];
    $payment->description = $_POST['description'];
    // $payment->installments = (int)$_POST['installments'];
    $payment->installments = 1;
    $payment->payment_method_id = $_POST['paymentMethodId'];
    $payment->issuer_id = (int)$_POST['issuer'];

    $payer = new MercadoPago\Payer();
    $payer->email = $_POST['email'];
    // $payer->identification = array( 
    //     // "type" => $_POST['docType'],
    //     "number" => $_POST['docNumber']
    // );
    $payment->payer = $payer;

    $payment->save();

    $response = array(
        'status' => $payment->status,
        'status_detail' => $payment->status_detail,
        'id' => $payment->id,
        'amount' => $payment->transaction_amount,
        'statement_descriptor' => $payment->statement_descriptor,
        'payment_method_id' => $payment->payment_method_id
        // 'payer' => $payment->payer,
        // 'additional_info' => $payment->additional_info
    );

    // if ($response['status'] == 1) {
      $location = "http://localhost/estudy_new/pagos/mercadoPago/respuesta.html?status=".$response['status']
        ."&status_detail=".$response['status_detail']."&id=".$response['id']."&amount=".$response['amount']
        ."&statement_descriptor=".$response['statement_descriptor']."&payment_method_id=".$response['payment_method_id'];
        header("Location: $location");
        die();
    // }else if ($response['status'] == 0 || $response['status'] == null) {
    //   $location = "http://localhost/estudy_new/pagos/mercadoPago/respuesta.html?status=0";
    //   header("Location: $location");
    //   die();    
    // }
    

    // $payment = new MercadoPago\Payment();
    // $payment->transaction_amount = $transaction_amount;
    // $payment->token = $token;
    // $payment->description = $description;
    // $payment->installments = $installments;
    // $payment->payment_method_id = $payment_method_id;
    // $payment->payer = array(
    //     "email" => $email
    // );

    // $payment->save();
    // // print_r($payment->status);
    // print_r($payment);

    // $response = array(
    //   'status' => $payment->status,
    //   'status_detail' => $payment->status_detail,
    //   'id' => $payment->id
    // );

    // echo json_encode($response);
    
    //   $usuario = Auth::GetData(
    //         $jwt  
    //     );
         
    //     $inserta = inserta('cat_area','area_desc, area_nombre ,estatus','"'.$area_desc.'","'.$area.'",1');

    //     if($inserta){
    //     $json = array("status" => 1, "msg" => "Se insertó el rol correctamente");
    //    }else{
    //     $json = array("status" => 0, "msg" => "No se logró insertar");
    //    }
    $json = array( "token" => $token );

  }else{
    $json = array("status" => 0, "msg" => "Método no aceptado");
  }

//   echo json_encode($json);

} catch (Exception $e) {
    $json = array("status" => 0, "msg" =>  $e->getMessage());

    echo json_encode($json);
}