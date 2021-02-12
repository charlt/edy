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

    $query_descuento = query('SELECT descuento_id,clave,descripcion,fecha_inicio,fecha_fin,estatus_descuento_id,descuento,valor,estatus,codigo_promocion from cat_descuento where estatus = 1 ');

       $json_descuento = array();
       while ($arreglo_descuento = arreglo($query_descuento)){
          array_push($json_descuento,$arreglo_descuento);
       }
       
       //ingreso todas las escuelas que tiene este profesor
       
       if(num($query_descuento)){
    		$json = array("status" => 1, "msg" => "Se encontraron descuentos","descuentos" => $json_descuento);
    	 }else{
    		$json = array("status" => 0, "msg" => "No se encontraron descuentos");
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