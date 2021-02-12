<?php
include '../../jwt.php';
include '../../headers.php';

try {
  
  db('controlEscolar');

  if($_SERVER['REQUEST_METHOD'] == "GET"){
    foreach($_GET as $clave => $valor){
      ${$clave} = escape_cara($valor);
    }

      $usuario = Auth::GetData(
            $jwt  
        );

    //SERVICIO DE CONSULTA DE SESIÓN
    $query_historial = query('SELECT ca.asignatura_clave, coj.orden_jerarquico, ca.asignatura,cc.ciclo_desc,calificacion,ceh.estatus_historial_descripcion,
    th.historial_id, th.situacion_reprobatoria_id, cscr.situacion_clave 
    FROM tr_historial th
    JOIN '.$GLOBALS['db_datosGenerales'].'.inter_orden_asignatura ioa ON ioa.orden_asignatura_id = th.orden_asignatura_id
    JOIN '.$GLOBALS['db_datosGenerales'].'.cat_asignaturas ca ON ca.asignatura_id = ioa.asignatura_id
    JOIN '.$GLOBALS['db_datosGenerales'].'.inter_plan_orden ipo ON ipo.plan_orden_id = ioa.plan_orden_id
    JOIN '.$GLOBALS['db_datosGenerales'].'.cat_orden_jerarquico coj ON coj.orden_jerarquico_id =ipo.orden_jerarquico_id
    JOIN cat_ciclo cc ON cc.ciclo_id = th.ciclo_id
    JOIN cat_estatus_historial ceh ON ceh.estatus_historial_id = th.estatus_historial_id
    LEFT JOIN cat_situacion_calificacion_reprobatoria cscr ON th.situacion_reprobatoria_id = cscr.situacion_id
    WHERE alumno_id = '.$id_alumno.' AND ca.estatus = 1 AND th.estatus = 1
    order by coj.orden_jerarquico');

    
       $json_historial = array();
       while ($arreglo_historial = arreglo($query_historial)){
          array_push($json_historial,$arreglo_historial);
       }
       
       //ingreso todas las escuelas que tiene este profesor
       
       if(num($query_historial)){
    		$json = array("status" => 1, "msg" => "Se encontro historial del alumno","historial" => $json_historial);
    	 }else{
    		$json = array("status" => 0, "msg" => "No se encontró historial");
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
