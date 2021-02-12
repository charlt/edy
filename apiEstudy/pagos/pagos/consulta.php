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

    $query_consultas = query('SELECT pago_id,nombre_pago,descripcion_pago,tipo_pago_id,estatus_pago_id,estatus,monto
    FROM cat_pago where pago_id = '.$id_pago);

    $arreglo_consultas = arreglo($query_consultas);
       
       //ingreso todas las escuelas que tiene este profesor
       
       if(num($query_consultas)){
    		$json = array("status" => 1, "msg" => "Se encontró información","pago" =>  $arreglo_consultas);
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