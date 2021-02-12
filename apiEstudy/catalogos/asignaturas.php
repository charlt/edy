<?php
include '../jwt.php';
include '../headers.php';

try {
  if($_SERVER['REQUEST_METHOD'] == "GET"){
    foreach($_GET as $clave => $valor){
      ${$clave} = escape_cara($valor);
    }
  
      $usuario = Auth::GetData(
            $jwt  
        );

    //SERVICIO DE CONSULTA DE SESIÓN
    $query_plan_estudios = query('
    SELECT ca.asignatura_clave,ca.asignatura,cta.tipo_asignatura, ca.asignatura_id, coj.orden_jerarquico_descripcion,tpe.plan_estudio, tcr.carrera FROM cat_asignaturas ca
    left join inter_orden_asignatura ioa on ioa.asignatura_id = ca.asignatura_id and ioa.estatus = 1
    left join inter_plan_orden ipo on ipo.plan_orden_id = ioa.plan_orden_id and ipo.estatus = 1
    left join cat_orden_jerarquico coj on coj.orden_jerarquico_id = ipo.orden_jerarquico_id and coj.estatus = 1
    left join tr_plan_estudios tpe on tpe.plan_estudio_id = ipo.plan_estudio_id and tpe.estatus = 1
    join cat_tipo_asignaturas cta on cta.tipo_asignatura_id = ca.tipo_asignatura_id 
    left join tr_carrera tcr on tcr.carrera_id = tpe.carrera_id
    where ca.estatus = 1 
    ');
       $json_plan_estudios = array();
       while ($arreglo_plan_estudios = arreglo($query_plan_estudios)){
          array_push($json_plan_estudios,$arreglo_plan_estudios);
       }
       
       //ingreso todas las escuelas que tiene este profesor
       
       if(num($query_plan_estudios)){
    		$json = array("status" => 1, "msg" => "Se encontraron Asignaturas","Asignaturas" => $json_plan_estudios);
    	 }else{
    		$json = array("status" => 0, "msg" => "No se encontraron Asignaturas");
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
