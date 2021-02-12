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

    $query_pago = query('SELECT * FROM cat_tipo_pago ctp
    where ctp.estatus = 1 ');

       $json_pago = array();
       while ($arreglo_pago = arreglo($query_pago)){
          array_push($json_pago,$arreglo_pago);
       }
       
       //ingreso todas las escuelas que tiene este profesor
       
       if(num($query_pago)){
    		$json = array("status" => 1, "msg" => "Catálogo de tipo pagos","tipoPagos" => $json_pago);
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