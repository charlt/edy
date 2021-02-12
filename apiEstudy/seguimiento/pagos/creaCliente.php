<?php
include '../../jwt.php';
include '../../headers.php';
include '../../vendor/openpay-php-master/Openpay.php';
try{
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
  

    $customerData = array(
        'name' => $_POST["name"],
        'email' => $_POST["email"]);

    $customer = $openpay->charges->add($customerData);
 
    
    $id_cliente=$charge->id;    
    $json = array("status" => 1, "referencia" =>  $referencia);

    echo json_encode($json);

}
catch (Exception $e) {
    $json = array("status" => 0, "msg" =>  $e->getMessage());

    echo json_encode($json);
}

?>
