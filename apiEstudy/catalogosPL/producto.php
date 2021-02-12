<?php
include '../jwt.php';
include '../headers.php';

db('pagos');

try {
  if($_SERVER['REQUEST_METHOD'] == "GET"){
    foreach($_GET as $clave => $valor){
      ${$clave} = escape_cara($valor);
    }

  
    $usuario = Auth::GetData(
        $jwt  
    );

    $query_pago = query('SELECT tp.pago_id,nombre_producto,monto FROM tr_pago cp
    join tr_producto tp on tp.pago_id = cp.pago_id
    where cp.estatus = 1 and tp.producto_id != 1  and tp.estatus = 1');

       $json_pago = array();
       while ($arreglo_pago = arreglo($query_pago)){
          array_push($json_pago,$arreglo_pago);
       }
       
       //ingreso todas las escuelas que tiene este profesor
       
       if(num($query_pago)){
    		$json = array("status" => 1, "msg" => "Se encontraron productos","productos" => $json_pago);
    	 }else{
    		$json = array("status" => 0, "msg" => "No se encontraron productos");
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