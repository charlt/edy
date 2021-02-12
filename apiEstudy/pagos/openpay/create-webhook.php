<?php
// include '../../jwt.php';
include '../../headers.php';
include '../../vendor/openpay-php-master/Openpay.php';

try{
    $openpay = Openpay::getInstance('mpbnfmkiekgicisu6qfi', 'sk_fcc15f4c41b34000a86dd13493ff2e52');

    //AGREGAR
    $webhook = array(
        'url' => 'https://plataformaestudy.mx/casalamm/apiEstudy/pagos/openpay/webhook_response.php',
        'user' => ' m_coronar@yahoo.com',
        'password' => 'CEC1996',
        'event_types' => array(
          'charge.refunded',
          'charge.failed',
          'charge.cancelled',
          'charge.created',
          'chargeback.accepted'
        )
    );
    
    $webhook = $openpay->webhooks->add($webhook);


    //OBTENER
    // $webhook = $openpay->webhooks->get('wkhhcsazvpvabn4eir9c');

    //ELIMINAR
    // $webhook = $openpay->webhooks->get('wkhhcsazvpvabn4eir9c');
    // $webhook->delete();

    // //LISTADO
    // $webhook = $openpay->webhooks->getList(array());

    print_r($webhook);

    $json = array("status" => 1, "msg" => "Correcto", "webhook" => $webhook);
    echo json_encode($json);
}
catch (Exception $e) {
    $json = array("status" => 0, "msg" => $e);
    echo json_encode($json);
}

?>
