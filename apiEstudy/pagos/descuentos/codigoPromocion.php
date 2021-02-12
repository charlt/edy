<?php
include '../../jwt.php';
include '../../headers.php';

try {
  
  db('pagos');

  if($_SERVER['REQUEST_METHOD'] == "GET"){
    foreach($_GET as $clave => $valor){
      ${$clave} = escape_cara($valor);
    }
    
    $query_descuento = query('SELECT descuento_id,descripcion,descuento,valor from cat_descuento  where codigo_promocion= "'.$codigo_promocion.'" and now() between fecha_inicio and fecha_fin');

    if(num($query_descuento)){

      $arreglo_descuento = arreglo($query_descuento);

      $arreglo_solicitud_pago = arreglo(query('select monto,beca,descuento_id,porcentaje from tr_solicitud_pago where solicitud_pago_id = '.$id_solicitud_pago));

      include '../class/pago.class.php';
      $Pago=new Pago();

      $monto_final = $Pago::calcula_monto_final_solicitud($arreglo_solicitud_pago['monto'],$arreglo_solicitud_pago['beca'],$arreglo_descuento['descuento_id'],$arreglo_solicitud_pago['porcentaje']);

      update('tr_solicitud_pago','descuento_id='.$arreglo_descuento['descuento_id'].', monto_final='.$monto_final,'solicitud_pago_id='.$id_solicitud_pago);

      
      $json = array("status" => 1, "msg" => "Código de promoción correcto","montoFinal"=>$monto_final,"idDescuento" => $arreglo_descuento['descuento_id'], "nombreDescuento"=>$arreglo_descuento['descripcion'], "montoDescuento"=>$arreglo_descuento['descuento'], "valorDescuento"=>$arreglo_descuento['valor']);
    }else{
      $json = array("status" => 0, "msg" => "Código de promoción inválido");
     }

}else{
    $json = array("status" => 0, "msg" => "Método no aceptado");
}

/* Output header */

echo json_encode($json);

} catch (Exception $e) {
  $json = array("status" => 0, "msg" =>  $e->getMessage());

  echo json_encode($json);
}
