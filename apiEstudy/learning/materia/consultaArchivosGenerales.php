<?php
include '../../jwt.php';
include '../../headers.php';

try {
  
  db ('learning');

  if($_SERVER['REQUEST_METHOD'] == "GET"){
    foreach($_GET as $clave => $valor){
      ${$clave} = escape_cara($valor);
    }

      $usuario = Auth::GetData(
            $jwt  
        );

    $query_archivo = query('SELECT tfr.contenido as archivo,tfr.persona_id as alumno_id, tfr.materia_fecha_actividad_id,ca.asignatura, unix_timestamp(tfr.fecha_creacion) as fecha_creacion, ta.actividad_nombre from tr_fr_respuesta tfr
    join tr_materia_fecha_actividad tmfa on tmfa.materia_fecha_actividad_id = tfr.materia_fecha_actividad_id 
    join tr_materia tm on tm.materia_id = tmfa.materia_id 
    join '.$GLOBALS["db_controlEscolar"].'.inter_asignatura_grupo iag on iag.asignatura_grupo_id = tm.asignatura_grupo_id 
    join '.$GLOBALS["db_datosGenerales"].'.inter_orden_asignatura ioa on ioa.orden_asignatura_id = iag.orden_asignatura_id 
    join '.$GLOBALS["db_datosGenerales"].'.cat_asignaturas ca on ca.asignatura_id = ioa.asignatura_id 
    join '.$GLOBALS["db_learning"].'.tr_actividad ta on ta.actividad_id = tmfa.actividad_id 
    where persona_id = '.$alumno_id.' and contenido is not null
    union
    SELECT tar.url_archivo as archivo, tm.alumno_id, tmfa.materia_fecha_actividad_id,ca.asignatura, unix_timestamp(tar.fecha_creacion) as fecha_creacion,ta.actividad_nombre FROM tr_ad_respuesta tar
    join tr_materia_fecha_actividad tmfa on tmfa.materia_fecha_actividad_id = tar.materia_fecha_actividad_id 
    join tr_materia tm on tm.materia_id = tmfa.materia_id
    join '.$GLOBALS["db_controlEscolar"].'.inter_asignatura_grupo iag on iag.asignatura_grupo_id = tm.asignatura_grupo_id 
    join '.$GLOBALS["db_datosGenerales"].'.inter_orden_asignatura ioa on ioa.orden_asignatura_id = iag.orden_asignatura_id 
    join '.$GLOBALS["db_datosGenerales"].'.cat_asignaturas ca on ca.asignatura_id = ioa.asignatura_id 
    join '.$GLOBALS["db_learning"].'.tr_actividad ta on ta.actividad_id = tmfa.actividad_id 
    where tm.alumno_id = '.$alumno_id.' and tar.url_archivo is not null
    union
    select tr.url_imagen as archivo, tr.persona_id as alumno_id, tr.materia_fecha_actividad_id, ca.asignatura, unix_timestamp(tr.fecha_creacion) as fecha_creacion, ta.actividad_nombre FROM tr_retroalimentacion tr
    join tr_materia_fecha_actividad tmfa on tmfa.materia_fecha_actividad_id = tr.materia_fecha_actividad_id 
    join tr_materia tm on tm.materia_id = tmfa.materia_id 
    join '.$GLOBALS["db_controlEscolar"].'.inter_asignatura_grupo iag on iag.asignatura_grupo_id = tm.asignatura_grupo_id 
    join '.$GLOBALS["db_datosGenerales"].'.inter_orden_asignatura ioa on ioa.orden_asignatura_id = iag.orden_asignatura_id 
    join '.$GLOBALS["db_datosGenerales"].'.cat_asignaturas ca on ca.asignatura_id = ioa.asignatura_id
    join '.$GLOBALS["db_learning"].'.tr_actividad ta on ta.actividad_id = tmfa.actividad_id 
    where tr.persona_id = '.$alumno_id.' and tr.url_imagen is not null');
    
       $json_archivo= array();
       while ($arreglo_archivo = arreglo($query_archivo)){
          array_push($json_archivo,$arreglo_archivo);
       }
       
       if(num($query_archivo)){
    		$json = array("status" => 1, "msg" => "Se encontraron archivos","archivos" => $json_archivo);
    	 }else{
    		$json = array("status" => 0, "msg" => "No se encontraron archivos");
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