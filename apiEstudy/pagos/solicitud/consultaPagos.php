<?php
include '../../jwt.php';
include '../../headers.php';

try {
  
  db('pagos');


  if($_SERVER['REQUEST_METHOD'] == "GET"){
    foreach($_GET as $clave => $valor){
      ${$clave} = escape_cara($valor);
    }
    
  $usuario = Auth::GetData(
     $jwt
  );


    if(!isset($busqueda)) 
      $script_busqueda = ''; //si no existe el parámetro de busqueda forzar a que busque algo
    else
      $script_busqueda = ' and (p.nombre like "%'.$busqueda.'%" or p.primer_apellido like "%'.$busqueda.'%" or p.segundo_apellido like "%'.$busqueda.'%")';

      if(!isset($id_estatus_solicitud_pago)) 
      $script_estatus = ''; //si no existe el parámetro de busqueda forzar a que busque algo
    else
      $script_estatus = ' and tsp.estatus_solicitud_pago_id = '.$id_estatus_solicitud_pago;
  
    $script_limite = ' order by tsp.solicitud_pago_id asc limit '.$inicio.','.$max;
     
    $query_datos = query('select tsp.solicitud_pago_id, tsp.pago_id, tsp.nombre_pago, tsp.solicitud_pago_id, 
    tsp.estatus_solicitud_pago_id, cesp.descripcion as desc_estatus_solicitud_pago, tsp.monto, beca,
    fecha_pago, tsp.forma_pago_id, cfp.descripcion as desc_forma_pago, tsp.descuento_id, cd.descripcion as desc_descuento, cd.descuento,
    monto_final, tsp.observacion,cd.valor,nombre,primer_apellido,segundo_apellido,porcentaje
    from tr_solicitud_pago tsp
    join cat_estatus_solicitud_pago cesp on cesp.estatus_solicitud_pago_id = tsp.estatus_solicitud_pago_id
    join cat_forma_pago cfp on cfp.forma_pago_id = tsp.forma_pago_id
    left join cat_descuento cd on cd.descuento_id = tsp.descuento_id
    join '.$GLOBALS['db_datosGenerales'].'.personas p on p.persona_id = tsp.persona_id
    where  tsp.estatus = 1'.$script_busqueda.$script_estatus.$script_limite );
    $json = array();
    while($arreglo_datos = arreglo($query_datos)){
        array_push($json, $arreglo_datos);
    }

    if(num($query_datos)){
      $json = array("status" => 1, "msg" => "Se encontraron pagos","pagos" => $json);
     }else{
      $json = array("status" => 0, "msg" => "No se encontraron pagos");
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
