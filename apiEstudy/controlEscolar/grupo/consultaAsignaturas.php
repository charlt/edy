<?php
include '../../jwt.php';
include '../../headers.php';

try {
  
  db ('controlEscolar');

  if($_SERVER['REQUEST_METHOD'] == "GET"){
    foreach($_GET as $clave => $valor){
      ${$clave} = escape_cara($valor);
    }

      $usuario = Auth::GetData(
            $jwt  
        );

    //SERVICIO DE CONSULTA DE SESIÓN
      $query = query('SELECT ioa.orden_asignatura_id, iag.asignatura_grupo_id,asignatura_padre_id, asignatura_padre_seriacion, ca.asignatura_id, asignatura_clave, asignatura, iag.situacion_asignatura_grupo_id,situacion_asignatura_grupo_descripcion,
      tipo_asignatura_id, tg.grupo_id, tg.nombre_grupo, calif_min, calif_max, creditos, pe.plan_estudio_id, plan_estudio, iag.fecha_inicio, iag.fecha_fin
      FROM '.$GLOBALS["db_datosGenerales"].'.cat_asignaturas ca
      join '.$GLOBALS["db_datosGenerales"].'.inter_orden_asignatura ioa on ioa.asignatura_id = ca.asignatura_id
      join '.$GLOBALS["db_datosGenerales"].'.inter_plan_orden ipo on ipo.plan_orden_id = ioa.plan_orden_id
      join '.$GLOBALS["db_datosGenerales"].'.tr_plan_estudios pe on pe.plan_estudio_id = ipo.plan_estudio_id 
      join  inter_asignatura_grupo iag on iag.orden_asignatura_id = ioa.orden_asignatura_id
      join cat_situacion_asignatura_grupo csag on csag.situacion_asignatura_grupo_id = iag.situacion_asignatura_grupo_id
      join tr_grupo tg on tg.grupo_id = iag.grupo_id  
      where iag.grupo_id ='.$id_grupo.' and ioa.estatus = 1 and iag.estatus = 1 ');

    
       $json_asignatura= array();
       while ($arreglo_asignatura = arreglo($query)){
          array_push($json_asignatura,$arreglo_asignatura);
       }
       
       //ingreso todas las escuelas que tiene este profesor
       
       if(num($query)){
    		$json = array("status" => 1, "msg" => "Se encontraron asignaturas","Asignaturas" => $json_asignatura);
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