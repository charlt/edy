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

    
    $alumnos_sin_plan= array();
    $query_alumnos_sin_plan = query('SELECT ta.alumno_id, p.nombre, p.primer_apellido, p.segundo_apellido, ta.clave_alumno 
    from tr_alumno ta
    join '.$GLOBALS['db_datosGenerales'].'.personas p on p.persona_id = ta.alumno_id
    left join inter_alumno_plan iap on iap.alumno_id = ta.alumno_id and iap.estatus = 1
    where ta.estatus=1 and iap.alumno_id is null
    order by p.primer_apellido,p.segundo_apellido,p.nombre');

    while($arreglo_alumnos_sin_plan = arreglo($query_alumnos_sin_plan)){
        array_push($alumnos_sin_plan, $arreglo_alumnos_sin_plan);
    }

    $alumnos_sin_grupo = array();
    $query_alumnos_sin_grupo = query('SELECT ta.alumno_id, p.nombre, p.primer_apellido, p.segundo_apellido, ta.clave_alumno from tr_alumno ta
    join '.$GLOBALS['db_datosGenerales'].'.personas p on p.persona_id = ta.alumno_id
    join inter_alumno_plan iap on iap.alumno_id = ta.alumno_id and iap.estatus = 1
    left join inter_alumno_grupo iag on iag.alumno_id = ta.alumno_id and iag.estatus =1
    left join tr_grupo tg on tg.grupo_id = iag.grupo_id and tg.estatus = 1  and situacion_grupo_id not in (4,5)
    where ta.estatus=1 and iag.alumno_id is null
    order by p.primer_apellido,p.segundo_apellido,p.nombre');
    while($arreglo_alumnos_sin_grupo = arreglo($query_alumnos_sin_grupo)){
        array_push($alumnos_sin_grupo, $arreglo_alumnos_sin_grupo);
    }

    $alumnos_materias_incompletas = array();
    $query_materias_incompletas = query('SELECT ta.alumno_id, p.nombre, p.primer_apellido, p.segundo_apellido, ta.clave_alumno,totales,activas
    from tr_alumno ta
    join '.$GLOBALS['db_datosGenerales'].'.personas p on p.persona_id = ta.alumno_id
    join inter_alumno_plan iap on iap.alumno_id = ta.alumno_id and iap.estatus = 1
    join (select plan_orden_id, count(*) as totales from '.$GLOBALS['db_datosGenerales'].'.inter_orden_asignatura ioa where estatus = 1 group by plan_orden_id) ioa on ioa.plan_orden_id = iap.plan_orden_id
    join (select plan_orden_id,alumno_id, count(*) as activas 
    from '.$GLOBALS['db_datosGenerales'].'.inter_orden_asignatura ioa 
    join inter_asignatura_grupo iag on iag.orden_asignatura_id = ioa.orden_asignatura_id
    join '.$GLOBALS['db_learning'].'.tr_materia tm on iag.asignatura_grupo_id = tm.asignatura_grupo_id  
    join '.$GLOBALS['db_learning'].'.cat_estatus_materia cem on cem.estatus_materia_id = tm.estatus_materia_id
    where tm.estatus =1 and iag.estatus = 1 and validacion = 1 group by plan_orden_id,alumno_id) tm on tm.plan_orden_id = iap.plan_orden_id and tm.alumno_id = ta.alumno_id
    where ta.estatus=1 and iap.estatus = 1 and totales > activas
    order by p.primer_apellido,p.segundo_apellido,p.nombre');
    
    while($arreglo_materias_incompletas = arreglo($query_materias_incompletas)){
    
      array_push($alumnos_materias_incompletas, $arreglo_materias_incompletas);
    }
    
    $alumnos_asignatura_duplicada = array();
    $query_asignatura_duplicada = query('SELECT alumno_id,t1.nombre, t1.primer_apellido, t1.segundo_apellido,t1.clave_alumno, asignatura_clave,asignatura
    from (select tm.alumno_id, ioa.asignatura_id, p.nombre, p.primer_apellido, p.segundo_apellido,clave_alumno from '.$GLOBALS['db_learning'].'.tr_materia tm
    join inter_asignatura_grupo iag on iag.asignatura_grupo_id = tm.asignatura_grupo_id
    join '.$GLOBALS['db_datosGenerales'].'.inter_orden_asignatura ioa on ioa.orden_asignatura_id = iag.orden_asignatura_id
    join tr_alumno ta on ta.alumno_id = tm.alumno_id 
    join '.$GLOBALS['db_datosGenerales'].'.personas p on p.persona_id = ta.alumno_id
    join '.$GLOBALS['db_learning'].'.cat_estatus_materia cem on cem.estatus_materia_id = tm.estatus_materia_id 
    where tm.estatus =1 and iag.estatus = 1 and cem.validacion =1) t1
    join '.$GLOBALS['db_datosGenerales'].'.cat_asignaturas ca on ca.asignatura_id = t1.asignatura_id
    group by alumno_id,t1.asignatura_id having  count(*) > 1
    order by t1.primer_apellido,t1.segundo_apellido,t1.nombre');
    while($arreglo_asignatura_deplicada = arreglo($query_asignatura_duplicada)){
        array_push($alumnos_asignatura_duplicada , $arreglo_asignatura_deplicada );
    }


    $alumnos['alumnos_sin_grupo'] = $alumnos_sin_grupo;
    $alumnos['alumnos_materias_incompletas'] = $alumnos_materias_incompletas;
    $alumnos['alumnos_asignaturas_duplicadas'] = $alumnos_asignatura_duplicada;
    $alumnos['alumnos_sin_plan'] = $alumnos_sin_plan;
    


    if(!empty($alumnos)){
      $json = array("status" => 1, "msg" => "Se encontraron alumnos","alumnos" => $alumnos);
     }else{
      $json = array("status" => 0, "msg" => "No se encontraron alumnos");
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
