<?php
// include '../../jwt.php';
include '../../headers.php';
// include '../../vendor/autoload.php';
include '../../vendor/openpay-php-master/Openpay.php';
require_once '../../config/db.php';

try{
    include './openpay-errors.php';
    
    $autorizacion = $_POST['autorizacion'];
    //$openpay = Openpay::getInstance('m5gnjuckgutcnnq5ak5x', 'sk_f1f1955c8b9a44798c1d650a90e35e3a');
    if($_POST['produccion'] == 'true'){
    //PROD
        // Openpay::setProductionMode(true);
        // $id = 'mxtkp6hpf6eoqgrwsvat';
        // $openpay = Openpay::getInstance($id,'sk_0a659512cd8d4788919b17acf2329542');
        
        //PRUEBA EN SERVIDOR
        $id = 'mpbnfmkiekgicisu6qfi';
        $openpay = Openpay::getInstance($id,'sk_fcc15f4c41b34000a86dd13493ff2e52');  
    }else {
    //PRUEBAS
        $id = 'mpbnfmkiekgicisu6qfi';
        $openpay = Openpay::getInstance($id,'sk_fcc15f4c41b34000a86dd13493ff2e52');    
        // $id = 'mt2b4o1w2olgt3ksgjok';
        // $openpay = Openpay::getInstance($id, 'sk_5f174dd97b4b4b2b9dbeba0d6fd20f49');
    }
        
    $charge = $openpay->charges->get($autorizacion);
    if ($charge->error_code) {
        $error_desc = $error_codes[$charge->error_code];
    }else{
        $error_desc = '';
    }

    $json = array("status" => $charge->status, "error" => array("detalles" => $error_desc,
        "codigo" => $charge->error_code, "http_code" => $charge->http_code, "fraud_rules" => $charge->fraud_rules), 
        "data" => array("id" => $charge->authorization, "amount" => $charge->amount, 
        "descripcion" => $charge->description, "autorizacion" => $charge->id));

    echo json_encode($json);
}
catch (Exception $e) {
    print_r($e);
    $json = array("status" => 0, "msg" => $e);

    echo json_encode($json);
}

?>
