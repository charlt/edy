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

    $query_porcentaje = query('SELECT porcentaje_pago_id,tipo_porcentaje,descripcion,porcentaje,dia_inicio,dia_fin,valor
     FROM cat_porcentaje_fecha_pago
    where estatus = 1 and suscripcion_id= '.$id_suscripcion);

    $json_porcentaje = array();
    while ($arreglo_porcentaje = arreglo($query_porcentaje)){
      array_push($json_porcentaje,$arreglo_porcentaje);
    }
       
       //ingreso todas las escuelas que tiene este profesor
       
       if(num($query_porcentaje)){
    		$json = array("status" => 1, "msg" => "Se encontraron valores","porcentaje" => $json_porcentaje);
    	 }else{
    		$json = array("status" => 0, "msg" => "No se encontraron valores");
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