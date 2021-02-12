<?php
include '../../headers.php';
include '../../jwt.php';
include '../../vendor/openpay-php-master/Openpay.php';
include './class/pago.class.php';


try{
  db('pagos');
  $pagos=new Pago();

  $jwt = $_POST["jwt"];

  $usuario = Auth::GetData(
    $jwt  
  );


  if($GLOBALS['produccion'] == 1){
  //PRODUCCIÓN
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
    'method' => 'store',
    'amount' => (float)$_POST["amount"],
    'description' => $_POST["description"],
    'customer' => $customer);

    $charge = $openpay->charges->create($chargeData);

    $referencia=$charge->serializableData['payment_method']->reference;


    /*inserta solicitud y tienda */
    $inserta_pago=$pagos::inserta_solicitud($usuario->id,2,3,$_POST['amount']);
    if($inserta_pago){
        $inserta_tienda=$pagos::inserta_tienda($inserta_pago, $referencia, 1);
    }
    $json = array("status" => 1, "referencia" =>  $referencia);

    echo json_encode($json);

}
catch (Exception $e) {
    $json = array("status" => 0, "msg" =>  $e->getMessage());

    echo json_encode($json);
}



?>