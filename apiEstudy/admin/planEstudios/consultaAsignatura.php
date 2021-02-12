<?php
include '../../jwt.php';
include '../../headers.php';

try {

  db ('datosGenerales');


  if($_SERVER['REQUEST_METHOD'] == "GET"){
    foreach($_GET as $clave => $valor){
      ${$clave} = escape_cara($valor);
    }
     

      $usuario = Auth::GetData(
            $jwt  
        );

    //SERVICIO DE CONSULTA DE SESIÓN
    $query_asignaturas = query('SELECT ioa.orden_asignatura_id,ca.asignatura_id,asignatura_clave, asignatura, ca.tipo_asignatura_id,calif_min,
    calif_max, creditos, ca.fecha_creacion,ca.usuario_crea, ca.estatus, ipo.plan_estudio_id, cta.tipo_asignatura 
    FROM cat_asignaturas ca
    join cat_tipo_asignaturas cta on cta.tipo_asignatura_id = ca.tipo_asignatura_id
    join inter_orden_asignatura ioa on ioa.asignatura_id = ca.asignatura_id
    join inter_plan_orden ipo on ipo.plan_orden_id = ioa.plan_orden_id
    WHERE ipo.plan_estudio_id = '.$id_plan_estudio.' and ca.estatus =1 and ipo.estatus=1 and ioa.estatus=1');
    
       $json_asignaturas = array();
       while ($arreglo_asignaturas = arreglo($query_asignaturas)){
          array_push($json_asignaturas,$arreglo_asignaturas);
       }
       
       //ingreso todas las escuelas que tiene este profesor
       
       if(num($query_asignaturas)){
    		$json = array("status" => 1, "msg" => "Se encontraron asignaturas","asignaturas" => $json_asignaturas);
    	 }else{
    		$json = array("status" => 0, "msg" => "No se encontraron asignaturas");
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
