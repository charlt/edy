<?php
include '../../jwt.php';
include '../../headers.php';

try {
  
  db('controlEscolar');

  if($_SERVER['REQUEST_METHOD'] == "GET"){
    foreach($_GET as $clave => $valor){
      ${$clave} = escape_cara($valor);
    }
    
    $usuario = Auth::GetData( $jwt );

    // $consulta = 'SELECT tg.grupo_id,tg.ciclo_id,tg.grupo,tg.nombre_grupo,tg.descripcion,tg.cupo,tg.plan_orden_id,tg.situacion_grupo_id,csg.situacion_grupo_descripcion, ipo.plan_estudio_id, ipo.orden_jerarquico_id
    // FROM tr_grupo tg
    // JOIN cat_situacion_grupo csg ON csg.situacion_grupo_id = tg.situacion_grupo_id
    // JOIN '.$GLOBALS['db_datosGenerales'].'.inter_plan_orden ipo ON ipo.plan_orden_id = tg.plan_orden_id ';
    $consulta = 'SELECT tg.grupo_id,tg.ciclo_id,cc.ciclo_desc,grupo,nombre_grupo,descripcion,cupo,tg.plan_orden_id,tg.situacion_grupo_id,situacion_grupo_descripcion,ipo.plan_estudio_id,tpe.plan_estudio,tc.carrera,coj.orden_jerarquico_descripcion AS grado
    FROM tr_grupo tg
    JOIN cat_situacion_grupo csg on csg.situacion_grupo_id = tg.situacion_grupo_id
    JOIN cat_ciclo cc ON tg.ciclo_id = cc.ciclo_id
    left JOIN '.$GLOBALS['db_datosGenerales'].'.inter_plan_orden ipo ON tg.plan_orden_id = ipo.plan_orden_id
    left JOIN '.$GLOBALS['db_datosGenerales'].'.tr_plan_estudios tpe ON ipo.plan_estudio_id = tpe.plan_estudio_id
    left JOIN '.$GLOBALS['db_datosGenerales'].'.cat_orden_jerarquico coj ON ipo.orden_jerarquico_id = coj.orden_jerarquico_id
    left JOIN '.$GLOBALS['db_datosGenerales'].'.tr_carrera tc ON tpe.carrera_id = tc.carrera_id ';

    if ($tipo == 1) {
        $condicion = 'WHERE tg.estatus = 1 and cc.ciclo_estatus_id = 1';
        $query = query($consulta.$condicion);
    }else if ($tipo == 2) {
        $condicion = 'WHERE cc.ciclo_id = '.$filtro.' and tg.estatus = 1';
        $query = query($consulta.$condicion);
    }else if ($tipo == 3) {
        $condicion = 'WHERE campus_id = '.$filtro.' and tg.estatus = 1';
        $query = query($consulta.$condicion);
    }else if ($tipo == 4) {
        $query = query('SELECT tg.grupo_id,ciclo_id,grupo,nombre_grupo,descripcion,cupo,tg.plan_orden_id,tg.situacion_grupo_id,situacion_grupo_descripcion
        FROM tr_grupo tg JOIN cat_situacion_grupo csg ON csg.situacion_grupo_id = tg.situacion_grupo_id 
        JOIN inter_asignatura_grupo iag ON iag.grupo_id = tg.grupo_id
        JOIN '.$GLOBALS['db_datosGenerales'].'.inter_orden_asignatura ioa ON ioa.orden_asignatura_id = iag.orden_asignatura_id
        WHERE ioa.asignatura_id = '.$filtro.' AND tg.situacion_grupo_id != 4  and tg.estatus = 1');
    }else if ($tipo == 5) {
        $query = query('SELECT tg.grupo_id,ciclo_id,grupo,nombre_grupo,descripcion,cupo,tg.plan_orden_id,tg.situacion_grupo_id 
        from tr_grupo tg
        join '.$GLOBALS['db_datosGenerales'].'.inter_plan_orden ipo on ipo.plan_orden_id =tg.plan_orden_id
        where ipo.plan_orden_id = '.$filtro.' and tg.situacion_grupo_id != 4  and tg.estatus = 1');
    }
    
    if(num($query) > 0){
        $arreglo= array();
        while($arreglo_query = arreglo($query)){
            array_push($arreglo, $arreglo_query);
        }
        $json = array("status" => 1, "msg" => "Se encontraron grupos", "grupos" => $arreglo);
    }else{
        $json = array("status" => 0, "msg" => "No se encontraron grupos");
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
