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

    if(isset($id_carrera)){
      $query_consultas = query('SELECT cs.suscripcion_id,nombre_suscripcion,descripcion_suscripcion,monto_colegiatura,dia_pago_colegiatura,monto_reinscripcion,monto_inscripcion,dia_pago_reinscripcion 
      FROM cat_suscripcion cs
      join inter_suscripcion_carrera isc on isc.suscripcion_id = cs.suscripcion_id 
      where cs.estatus = 1 and isc.carrera_id = '.$id_carrera);
    }else{
      $query_consultas = query('SELECT suscripcion_id,nombre_suscripcion,descripcion_suscripcion,monto_colegiatura,dia_pago_colegiatura,monto_reinscripcion,monto_inscripcion,dia_pago_reinscripcion  FROM cat_suscripcion where estatus = 1 ');
    }


       $json_consultas = array();
       while ($arreglo_consultas = arreglo($query_consultas)){
          array_push($json_consultas,$arreglo_consultas);
       }
       
       //ingreso todas las escuelas que tiene este profesor
       
       if(num($query_consultas)){
    		$json = array("status" => 1, "msg" => "Se encontraron conceptos","suscripcion" => $json_consultas);
    	 }else{
    		$json = array("status" => 0, "msg" => "No se encontraron conceptos");
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