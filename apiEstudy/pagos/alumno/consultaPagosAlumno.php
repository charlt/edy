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
     
    $query_datos = query('select tsp.pago_id, tsp.nombre_pago, tsp.solicitud_pago_id, 
	tsp.estatus_solicitud_pago_id, cesp.descripcion as desc_estatus_solicitud_pago, tsp.monto, beca,
	fecha_pago, tsp.forma_pago_id, cfp.descripcion as desc_forma_pago, tsp.descuento_id, cd.descripcion as desc_descuento, cd.descuento,
	monto_final, tsp.observacion,cd.valor,tsp.porcentaje, tp.tipo_pago_id
    from tr_solicitud_pago tsp
    join tr_pago tp on tp.pago_id = tsp.pago_id
    join cat_estatus_solicitud_pago cesp on cesp.estatus_solicitud_pago_id = tsp.estatus_solicitud_pago_id
    join cat_forma_pago cfp on cfp.forma_pago_id = tsp.forma_pago_id
    left join cat_descuento cd on cd.descuento_id = tsp.descuento_id
    where persona_id = '.$id_alumno.' and tsp.estatus = 1 order by tsp.solicitud_pago_id asc');
    $json = array();

    $mes_antiguo = 0;
    
    while($arreglo_datos = arreglo($query_datos)){
    
      //lógica para bloquear pagos pendientes de colegiaturas  y que pague el mes más antiguo
      if($arreglo_datos['estatus_solicitud_pago_id'] == 1 || $arreglo_datos['estatus_solicitud_pago_id'] == 2){ 
          if($arreglo_datos['tipo_pago_id'] == 1){
            if(!$mes_antiguo){
              $arreglo_datos['boton_pago'] = 1;    
              $mes_antiguo= 1;
            }else{
              $arreglo_datos['boton_pago'] = 0;    
            }

          }else{
            $arreglo_datos['boton_pago'] = 1;    
          }

      }else{
        $arreglo_datos['boton_pago'] = 0;
      }
      
        array_push($json, $arreglo_datos);
    }


    function compare($a, $b)
    {
       return ($a['solicitud_pago_id']< $b['solicitud_pago_id']);
    }
    usort($json, "compare");


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
