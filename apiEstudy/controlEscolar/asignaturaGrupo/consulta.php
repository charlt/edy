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
    $query_cat_grupo = query('select iag.asignatura_grupo_id,tg.grupo_id,tg.grupo,ca.asignatura_id, iag.fecha_inicio, iag.fecha_fin,ca.asignatura, ca.asignatura_clave,coj.orden_jerarquico, coj.orden_jerarquico_descripcion,tpe.plan_estudio_id,tpe.plan_estudio, tcr.carrera_id, tcr.carrera, cc.ciclo_id, cc.ciclo_desc,cc.fecha_inicio as fecha_inicio_ciclo, cc.fecha_fin as fecha_fin_ciclo,iag.situacion_asignatura_grupo_id,csag.situacion_asignatura_grupo_descripcion
    from inter_asignatura_grupo iag
    join tr_grupo tg on tg.grupo_id = iag.grupo_id
    join cat_ciclo cc on cc.ciclo_id = tg.ciclo_id
    join cat_situacion_asignatura_grupo csag on csag.situacion_asignatura_grupo_id = iag.situacion_asignatura_grupo_id
    join '.$GLOBALS["db_datosGenerales"].'.inter_orden_asignatura ioa on ioa.orden_asignatura_id = iag.orden_asignatura_id
    join '.$GLOBALS["db_datosGenerales"].'.inter_plan_orden ipo on ipo.plan_orden_id = ioa.plan_orden_id
    join '.$GLOBALS["db_datosGenerales"].'.cat_asignaturas ca on ca.asignatura_id = ioa.asignatura_id
    join '.$GLOBALS["db_datosGenerales"].'.cat_orden_jerarquico coj on coj.orden_jerarquico_id = ipo.orden_jerarquico_id
    join '.$GLOBALS["db_datosGenerales"].'.tr_plan_estudios tpe on tpe.plan_estudio_id = ipo.plan_estudio_id
    join '.$GLOBALS["db_datosGenerales"].'.tr_carrera tcr on tcr.carrera_id = tpe.carrera_id
    where asignatura_grupo_id = '.$id_asignatura_grupo);

    $arreglo_cat_grupo = arreglo($query_cat_grupo);
       
       //ingreso todas las escuelas que tiene este profesor
       
       if(num($query_cat_grupo)){
    		$json = array("status" => 1, "msg" => "Se encontró el grupo","grupo" => $arreglo_cat_grupo);
    	 }else{
    		$json = array("status" => 0, "msg" => "No se encontró grupo");
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
