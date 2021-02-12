<?php
include '../../jwt.php';
include '../../headers.php';

try {
  
  db('controlEscolar');

  if($_SERVER['REQUEST_METHOD'] == "GET"){
    foreach($_GET as $clave => $valor){
      ${$clave} = escape_cara($valor);
    }

      /*$usuario = Auth::GetData(
            $jwt  
        );*/


    //SERVICIO DE CONSULTA DE SESIÓN
    $query_historial = query('
    select historial_id,ioa.asignatura_id,ipo.orden_jerarquico_id,ipo.plan_estudio_id,tpe.carrera_id,th.orden_asignatura_id,
    ciclo_id,alumno_id,estatus_historial_id,calificacion,materia_id,situacion_reprobatoria_id,ioa.plan_orden_id
    from tr_historial th
    join '.$GLOBALS['db_datosGenerales'].'.inter_orden_asignatura ioa on ioa.orden_asignatura_id = th.orden_asignatura_id
    join '.$GLOBALS['db_datosGenerales'].'.cat_asignaturas ca on ca.asignatura_id = ioa.asignatura_id
    join '.$GLOBALS['db_datosGenerales'].'.inter_plan_orden ipo on ipo.plan_orden_id = ioa.plan_orden_id
    join '.$GLOBALS['db_datosGenerales'].'.tr_plan_estudios tpe on tpe.plan_estudio_id = ipo.plan_estudio_id
    where historial_id = '.$id_historial.'  and th.estatus = 1');

    $arreglo_historial = arreglo($query_historial);
       
       //ingreso todas las escuelas que tiene este profesor
    
    if(num($query_historial)){
    $json = array("status" => 1, "msg" => "Información del historial","historial" => $arreglo_historial);
    }else{
    $json = array("status" => 0, "msg" => "No se encontró información historial");
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
