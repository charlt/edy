<?php
include '../../headers.php';
require_once '../../config/db.php';

try {
  
//   db('datosGenerales');

    if($_SERVER['REQUEST_METHOD'] == "POST"){
        foreach($_POST as $clave => $valor){
            ${$clave} = escape_cara($valor);
        }

        $info = file_get_contents("php://input");
        //PRUEBA
        // $datos = json_decode('{"type":"charge.created","event_date":"2020-07-23T18:39:19-05:00","transaction":{"id":"trwrl99wmo5co2zhootg","authorization":null,"operation_type":"in","transaction_type":"charge","status":"in_progress","conciliated":false,"creation_date":"2020-07-23T18:39:19-05:00","operation_date":"2020-07-23T18:39:19-05:00","description":"Prueba pago en tienda","error_message":null,"order_id":null,"customer_id":"ajafdeacj3ewos3rd5kw","currency":"MXN","payment_method":{"type":"store","reference":"1010103185228562","barcode_url":"https://sandbox-api.openpay.mx/barcode/1010103185228562?width=1&height=45&text=false"},"amount":270.00,"method":"store"}}');
        $datos = json_decode($info);
        $datos = escape_cara($datos);
        $id_transaccion = $datos->transaction->id;
        // echo($datos->transaction->id);
        // foreach($datos as $b => $c){
        //     $d = $b.'=>'.$c.'<br>';
        //     echo $d;
        // }

        // $insert = inserta('tr_pago','matricula, saldo, estatus_pago_id, origen_pago_id, 
        //     tipo_pago_id, numero_transaccion, fecha_creacion, fecha_actualiza, estatus',
        //     '00000, 100.00, 2, 1, 1,  "'.$id_transaccion.'", now(), now(), 1');
        
        $json = array("status" => 1, "msg" => "Endpoint encontrado");

   
    }else{
        $json = array("status" => 0, "msg" => "Método no aceptado");
    }

echo json_encode($json);

} catch (Exception $e) {
  $json = array("status" => 0, "msg" =>  $e->getMessage());

  echo json_encode($json);
}
