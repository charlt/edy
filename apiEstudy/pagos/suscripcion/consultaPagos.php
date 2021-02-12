<?php
include '../../jwt.php';
include '../../headers.php';

db('pagos');

try {
  if($_SERVER['REQUEST_METHOD'] == "GET"){
    foreach($_GET as $clave => $valor){
      ${$clave} = escape_cara($valor);
    }
    
    $usuario = Auth::GetData(
        $jwt  
    );

    $query_consultas = query('SELECT tp.pago_id,mes,anio,cs.suscripcion_id,monto_inscripcion,monto_colegiatura,monto_reinscripcion,tipo 
    FROM tr_suscripcion_pago tsp
    join cat_suscripcion cs on cs.suscripcion_id = tsp.suscripcion_id
    join tr_pago tp on tp.pago_id = tsp.pago_id
    WHERE cs.suscripcion_id =  '.$id_suscripcion.' and tp.estatus = 1 and tsp.estatus = 1
    ');

    $arreglo_consultas = array();

    while ($arreglo = arreglo($query_consultas)) {
        array_push($arreglo_consultas, $arreglo);
    }
              
    if(num($query_consultas)){
        $json = array("status" => 1, "msg" => "Se encontró información", "pagos" =>  $arreglo_consultas);
    }else{
        $json = array("status" => 0, "msg" => "No se encontró información");
    }

}else{
    $json = array("status" => 0, "msg" => "Método no aceptado");
}

echo json_encode($json);

} catch (Exception $e) {
  $json = array("status" => 0, "msg" =>  $e->getMessage());

  echo json_encode($json);
}