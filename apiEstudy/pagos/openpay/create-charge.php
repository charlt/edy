<?php
// include '../../jwt.php';
include '../../headers.php';
include '../../vendor/openpay-php-master/Openpay.php';
require_once '../../config/db.php';

try{
    db('pagos');

    include './openpay-errors.php';

    if($_POST['produccion'] == 'true'){
        //PROD
        // Openpay::setProductionMode(true);
        // $id = 'mxtkp6hpf6eoqgrwsvat';
        // $openpay = Openpay::getInstance($id,'sk_0a659512cd8d4788919b17acf2329542');++
        // $openpay_url = "https://api.openpay.mx/v1"; 

        //PRUEBA EN SERVIDOR
        $id = 'mpbnfmkiekgicisu6qfi';
        $openpay = Openpay::getInstance($id,'sk_fcc15f4c41b34000a86dd13493ff2e52');
    }else {
        //PRUEBAS
        $id = 'mpbnfmkiekgicisu6qfi';
        $openpay = Openpay::getInstance($id,'sk_fcc15f4c41b34000a86dd13493ff2e52');
        // $openpay_url = "https://sandbox-dashboard.openpay.mx/";    
    }

    $customer = array(
        'name' => $_POST["name"],
        'last_name' => $_POST["last_name"],
        'phone_number' => $_POST["phone_number"],
        'email' => $_POST["email"]
    );

    // $customer = array(
    //     'name' => 'Miguel Angel ',
    //     'last_name' => 'González Espejel',
    //     'phone_number' => '5548173992',
    //     'email' => 'miguel-glezes@hotmail.com'
    // );

    $chargeData = array(
        'method' => 'store',
        'amount' => $_POST["monto"],
        'description' => $_POST["descripcion"],
        'customer' => $customer
    );
    
    $charge = $openpay->charges->create($chargeData);

    // $url = $openpay_url.'paynet-pdf/'.$id.'/'.$charge->payment_method->reference;

    if ($charge) {

        update('tr_solicitud_pago','forma_pago_id=3,estatus_solicitud_pago_id=2','solicitud_pago_id='.$_POST['id_solicitud_pago']);
        inserta('tr_pago_referencia','referencia,solicitud_pago_id,estatus', $charge->payment_method->reference.','.$_POST['id_solicitud_pago'].',1');

        $json = array("status" => 1, 'msg' => 'Cargo creado correctamente', "datos" => array(
            "descripcion" => $charge->description, "fecha" => $charge->creation_date,
            "monto" => $charge->amount, "pago" => $charge->payment_method 
        ));
    }else {
        $json = array("status" => 0, 'msg' => 'Error al crear el cargo');
    }
    
    echo json_encode($json);
}
catch (Exception $e) {
    $json = array("status" => 0, "msg" =>  $e->getMessage());

    echo json_encode($json);
}

?>
