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

    $query_solicitud = query('SELECT * from tr_solicitud_pago where aspirante_id='.$usuario->id.' and estatus = 1'); 

    $arreglo = arreglo($query_solicitud);
        
        switch ($arreglo['forma_pago_id']) {
            case '2':
                $tabla='tr_tarjeta';
                break;
            case '3':
                $tabla='tr_tienda';
                $query = query('SELECT * from '.$tabla.' where solicitud_pago_id='.$arreglo['solicitud_pago_id']);
                $arreglo_tienda=arreglo($query);
                $arreglo['tipo_pago']=$arreglo_tienda;
                
                break;            
            case '4':
                $tabla='tr_suscripcion';
                break;
    
            default:
                break;
        }
        

    



    if(num($query_solicitud) && num($query)){
      $json = array("status" => 1, "msg" => "Se encontró una solicitud","solicitud" => $arreglo);
     }else{
      $json = array("status" => 0, "msg" => "No se encontraron solicitudes");
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
