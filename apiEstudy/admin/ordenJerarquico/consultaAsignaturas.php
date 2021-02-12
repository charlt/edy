<?php
include '../../jwt.php';
include '../../headers.php';

try {
  
  db('datosGenerales');

  if($_SERVER['REQUEST_METHOD'] == "GET"){
    foreach($_GET as $clave => $valor){
      ${$clave} = escape_cara($valor);
    }

      $usuario = Auth::GetData(
            $jwt  
        );

    //SERVICIO DE CONSULTA DE SESIÓN
    $query_orden_jearquico = query('SELECT ipo.plan_orden_id, ipo.plan_estudio_id, ioa.plan_orden_id, ioa.orden_asignatura_id,ioa.asignatura_id,
    ca.asignatura_clave, ca.asignatura from inter_plan_orden ipo 
    join inter_orden_asignatura ioa on ioa.plan_orden_id = ipo.plan_orden_id
    join cat_asignaturas ca on ca.asignatura_id = ioa.asignatura_id
    where ipo.plan_orden_id = '.$id_plan_orden.' and ca.estatus=1 and ioa.estatus= 1');

    
       $json_orden_jearquico = array();
       while ($arreglo_orden_jearquico = arreglo($query_orden_jearquico)){
          array_push($json_orden_jearquico,$arreglo_orden_jearquico);
       }
       
       //ingreso todas las escuelas que tiene este profesor
       
       if(num($query_orden_jearquico)){
    		$json = array("status" => 1, "msg" => "Se encontraron Asignaturas","asignatura" => $json_orden_jearquico);
    	 }else{
    		$json = array("status" => 0, "msg" => "No se encontraron Asignatura");
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
