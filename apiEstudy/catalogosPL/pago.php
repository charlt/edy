<?php
include '../jwt.php';
include '../headers.php';

db('pagos');

try {
  if($_SERVER['REQUEST_METHOD'] == "GET"){
    foreach($_GET as $clave => $valor){
      ${$clave} = escape_cara($valor);
    }

    if(isset($id_tipo_pago)){
      $script_id_tipo_pago = ' and ctp.tipo_pago_id ='.$id_tipo_pago;
    }else{
      $script_id_tipo_pago = '';
    }
    
    $usuario = Auth::GetData(
        $jwt  
    );

    $query_pago = query('SELECT pago_id,nombre_pago,cp.descripcion_pago,ctp.descripcion_pago as descripcion_tipo_pago,cp.tipo_pago_id,estatus_pago_id,monto FROM cat_pago cp
    join cat_tipo_pago ctp on ctp.tipo_pago_id = cp.tipo_pago_id
    where cp.estatus = 1'.$script_id_tipo_pago);

       $json_pago = array();
       while ($arreglo_pago = arreglo($query_pago)){
          array_push($json_pago,$arreglo_pago);
       }
       
       //ingreso todas las escuelas que tiene este profesor
       
       if(num($query_pago)){
    		$json = array("status" => 1, "msg" => "Se encontraron pagos","pagos" => $json_pago);
    	 }else{
    		$json = array("status" => 0, "msg" => "No se encontraron pagos");
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