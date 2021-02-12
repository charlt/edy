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

    $query_consultas = query('SELECT nombre_suscripcion,descripcion_suscripcion,clave_suscripcion,monto_colegiatura,
    monto_inscripcion,monto_reinscripcion,dia_pago_colegiatura,dia_pago_reinscripcion 
    FROM cat_suscripcion where suscripcion_id = '.$id_suscripcion);

    $arreglo_consultas = arreglo($query_consultas);
       
       //ingreso todas las escuelas que tiene este profesor
       
       if(num($query_consultas)){
    		$json = array("status" => 1, "msg" => "Se encontró información","suscripcion" =>  $arreglo_consultas);
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