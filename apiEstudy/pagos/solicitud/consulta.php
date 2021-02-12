<?php
include '../../jwt.php';
include '../../headers.php';

db('pagos');

try {
  if($_SERVER['REQUEST_METHOD'] == "GET"){
    foreach($_GET as $clave => $valor){
      ${$clave} = escape_cara($valor);
    }
    
    //$usuario = Auth::GetData(
    //    $jwt  
    //);

    $query_consultas = query('SELECT solicitud_pago_id,persona_id,nombre_pago,tsp.pago_id,estatus_solicitud_pago_id,monto,beca,UNIX_TIMESTAMP(fecha_pago) as fecha_pago,forma_pago_id,monto_final,porcentaje,observacion,tarjeta,transferencia,fisico,
    cd.descuento_id,clave as clave_descuento, descripcion as descripcion_descuento, descuento,valor as valor_descuento
    FROM tr_solicitud_pago tsp 
    join tr_pago tp on tp.pago_id = tsp.pago_id
    join cat_tipo_pago ctp on ctp.tipo_pago_id = tp.tipo_pago_id
    left join cat_descuento cd on cd.descuento_id = tsp.descuento_id
    where solicitud_pago_id = '.$id_solicitud_pago);


    if(num($query_consultas)){
    $arreglo_consultas = arreglo($query_consultas);
    switch($arreglo_consultas['forma_pago_id']){
      case 2:
        $query_info_pago = query('select pago_tarjeta_error_id,solicitud_pago_id,descripcion from tr_pago_tarjeta_error where estatus = 1 and solicitud_pago_id = '.$id_solicitud_pago);
        if(num($query_info_pago)){
          $arreglo_info_pago = arreglo($query_info_pago);
        }else{
          $query_info_pago = query('select pago_exitoso_id,
          solicitud_pago_id,
          codigo_autorizacion,
          transaccion from tr_pago_tarjeta_exitoso where estatus = 1 and solicitud_pago_id = '.$id_solicitud_pago);

          $arreglo_info_pago = arreglo($query_info_pago);
        }
      break;
      case 3:
        $query_info_pago = query('select pago_referencia_id,referencia from tr_pago_referencia where estatus = 1 and solicitud_pago_id = '.$id_solicitud_pago);
        if(num($query_info_pago)){
          $arreglo_info_pago = arreglo($query_info_pago);
        }else{
          $arreglo_info_pago = null;
        }
      break;
      case 4:
      case 5:
        $query_info_pago = query('select pago_externo_id,comprobante from tr_pago_externo where estatus = 1 and solicitud_pago_id = '.$id_solicitud_pago);
        if(num($query_info_pago)){
          $arreglo_info_pago = arreglo($query_info_pago);
        }else{
          $arreglo_info_pago = null;  
        }
      break;
      default:
        $arreglo_info_pago = null;
      break;
    }

    $arreglo_consultas['info_pago'] = $arreglo_info_pago;
       

    $json = array("status" => 1, "msg" => "Se encontró información","solicitud" =>  $arreglo_consultas);
    }else{
    $json = array("status" => 0, "msg" => "No se encontró información");
    }

    //QUERY Y RESULTADO AQUI
    //
}else{
    $json = array("status" => 0, "msg" => "Método no aceptado");
}

/* Output header */

echo json_encode($json);

} catch (Exception $e) {
  $json = array("status" => 0, "msg" =>  $e->getMessage());

  echo json_encode($json);
}