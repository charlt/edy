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

    //TICKETS
    $query_ticket = query('SELECT 1 as tipo, "Notificación de la escuela" as tipo_descripcion, tt.ticket_id
    FROM tr_ticket tt
    where persona_id ='.$usuario->id.' and tt.rol_id ='.$usuario->id_rol.' and tt.estatus =1 and visto = 0 and estatus_ticket_id != 1 order by ticket_id desc ');

    $query_materias_alumno = query('select materia_id,ca.asignatura,iag.grupo_id,iag.asignatura_grupo_id,iag.orden_asignatura_id,ioa.plan_orden_id
    from '.$GLOBALS['db_learning'].'.tr_materia tm
    join '.$GLOBALS["db_controlEscolar"].'.inter_asignatura_grupo iag ON tm.asignatura_grupo_id = iag.asignatura_grupo_id
    join '.$GLOBALS["db_datosGenerales"].'.inter_orden_asignatura ioa ON ioa.orden_asignatura_id = iag.orden_asignatura_id
    join '.$GLOBALS["db_datosGenerales"].'.cat_asignaturas ca ON ca.asignatura_id = ioa.asignatura_id
    where alumno_id = '.$usuario->id.' and estatus_materia_id not in (5,4) and tm.estatus = 1 and iag.estatus = 1 and ioa.estatus = 1');



    $array_materias_alumno = array();
    $array_materias = array();
    $array_asignatura_grupos = array();
    $array_grupos = array();
    $array_orden_asignatura = array();
    $array_plan_orden = array();
    $array_nombre_asignatura = array();

    while($arreglo_materia_alumno = arreglo($query_materias_alumno)){
      array_push($array_materias_alumno,$arreglo_materia_alumno);
      array_push($array_materias,$arreglo_materia_alumno['materia_id']);
      array_push($array_nombre_asignatura,$arreglo_materia_alumno['asignatura']);
      array_push($array_asignatura_grupos,$arreglo_materia_alumno['asignatura_grupo_id']);
      array_push($array_grupos,$arreglo_materia_alumno['grupo_id']);
      array_push($array_orden_asignatura,$arreglo_materia_alumno['orden_asignatura_id']);
      array_push($array_plan_orden,$arreglo_materia_alumno['plan_orden_id']);
    }

    $query_plan = query('SELECT tpe.plan_estudio_id,carrera_id
    from ' . $GLOBALS['db_controlEscolar'] . '.inter_alumno_plan iap 
    join ' . $GLOBALS['db_datosGenerales'] . '.inter_plan_orden ipo on ipo.plan_orden_id = iap.plan_orden_id
    join ' . $GLOBALS['db_datosGenerales'] . '.tr_plan_estudios tpe on tpe.plan_estudio_id = ipo.plan_estudio_id
    where alumno_id ='.$usuario->id.' and iap.estatus=1 and tpe.estatus=1');

    $array_plan = array();
    $array_carrera = array();
    
    while($arreglo_plan = arreglo($query_plan)){
      array_push($array_plan,$arreglo_plan['plan_estudio_id']);
      array_push($array_carrera,$arreglo_plan['carrera_id']);
    }


    if(sizeof($array_materias) > 0){
      $secuencia_materias= implode(',',$array_materias);
      $secuencia_asignatura_grupo= implode(',',$array_asignatura_grupos);
      $secuencia_grupos = implode(',',$array_grupos);
      $secuencia_orden_asignatura = implode(',',$array_orden_asignatura);
      $secuencia_plan_orden = implode(',',$array_plan_orden);
    }else{
      $secuencia_materias=0;
      $secuencia_asignatura_grupo=0;
      $secuencia_orden_asignatura = 0;
      $secuencia_plan_orden = 0;  
      $secuencia_grupos= 0;
    }

    if(sizeof($array_plan) > 0){
      $secuencia_plan = implode(',',$array_plan);
      $secuencia_carrera = implode(',',$array_carrera);
    }else{
      $secuencia_plan = 0;
      $secuencia_carrera = 0;
    }


    

    //MENSAJES ALUMNOS
    $query_mensajes = query('SELECT 2 as tipo,"Nuevo mensaje del profesor" as tipo_descripcion, tmm.materia_id, count(tmm.mensaje_id) as total
    FROM '.$GLOBALS['db_learning'].'.tr_mensaje_materia tmm
    WHERE materia_id in ('.$secuencia_materias.') and origen = 3 and (visto = 0 or visto is null)
    group by materia_id');

    //AVISOS DEL PROFESOR
    $query_avisos_profesor = query('SELECT 3 as tipo,CONCAT("Aviso: ",titulo) as tipo_descripcion, asignatura_grupo_id,importancia_aviso_id, count(iagp.avisos_grupo_id) as total 
    FROM tr_avisos_grupo tag 
    left join inter_aviso_grupo_persona iagp on iagp.avisos_grupo_id = tag.avisos_grupo_id and iagp.persona_id = '.$usuario->id.'
    WHERE tag.estatus = 1 and asignatura_grupo_id in ('.$secuencia_asignatura_grupo.') and iagp.persona_id is null and now() between tag.fecha_inicio and tag.fecha_fin
    group by asignatura_grupo_id,importancia_aviso_id
    ');

    //RETROALIMENTACIONES
    $query_retro_mensajes = query('SELECT 4 as tipo,"Nueva retroalimentación" as tipo_descripcion,  tmfa.actividad_id,tmfa.materia_id, count(tr.retroalimentacion_id) as total
    FROM '.$GLOBALS['db_learning'].'.tr_retroalimentacion tr
    join '.$GLOBALS['db_learning'].'.tr_materia_fecha_actividad tmfa on tmfa.materia_fecha_actividad_id = tr.materia_fecha_actividad_id
    WHERE tmfa.materia_id in ('.$secuencia_materias.')  and origen = 3 and (visto = 0 or visto is null)
    group by tmfa.materia_fecha_actividad_id'
    );

    
    //ENCUESTAS
    $query_aviso_encuesta = query('select  5 as tipo,CONCAT("Encuesta: ",titulo) as tipo_descripcion, obligatorio, 
    asignatura_grupo_id,grupo_id,orden_asignatura_id,plan_orden_id,plan_estudios_id,carrera_id, tse.encuesta_id, tse.switch_encuesta_id
    from ' . $GLOBALS['db_seguimiento'] . '.tr_switch_encuesta tse
    join ' . $GLOBALS['db_seguimiento'] . '.tr_encuesta te on te.encuesta_id = tse.encuesta_id
    left join ' . $GLOBALS['db_seguimiento'] . '.inter_encuesta_persona iep on iep.switch_encuesta_id = tse.switch_encuesta_id  and iep.persona_id='.$usuario->id.' 
    where te.estatus=1 and tse.estatus =1 and te.encuesta_id and now() BETWEEN fecha_inicio and fecha_fin and iep.persona_id is null  and rol_id = '.$usuario->id_rol.'
    and ( asignatura_grupo_id in ('.$secuencia_asignatura_grupo.') 
    or grupo_id in ('.$secuencia_grupos.') 
    or orden_asignatura_id in ('.$secuencia_orden_asignatura.')
    or plan_orden_id in ('.$secuencia_plan_orden.')
    or plan_estudios_id in ('.$secuencia_plan.')
    or carrera_id in ('.$secuencia_carrera.')
    or (carrera_id is null and plan_estudios_id is null and plan_orden_id is null and orden_asignatura_id is null and grupo_id is null and asignatura_grupo_id is null)
    )
    ');

    
    //AVISOS DEL ADMINISTRADOR
    $query_aviso_admin = query('select 6 as tipo,CONCAT("Aviso: ",titulo) as tipo_descripcion, tsa.aviso_id,ta.importancia_aviso_id,
    asignatura_grupo_id,grupo_id,orden_asignatura_id,plan_orden_id,plan_estudios_id,carrera_id
    from tr_switch_aviso tsa
    join tr_avisos ta on ta.aviso_id = tsa.aviso_id 
    left join inter_aviso_persona iap on iap.aviso_id = tsa.aviso_id  and iap.persona_id='.$usuario->id.'
    where tsa.estatus = 1 and ta.estatus=1 and now() between fecha_inicio and fecha_fin and iap.persona_id is null and rol_id = '.$usuario->id_rol.'
    and ( asignatura_grupo_id in ('.$secuencia_asignatura_grupo.') 
    or grupo_id in ('.$secuencia_grupos.') 
    or orden_asignatura_id in ('.$secuencia_orden_asignatura.')
    or plan_orden_id in ('.$secuencia_plan_orden.')
    or plan_estudios_id in ('.$secuencia_plan.')
    or carrera_id in ('.$secuencia_carrera.')
    or (carrera_id is null and plan_estudios_id is null and plan_orden_id is null and orden_asignatura_id is null and grupo_id is null and asignatura_grupo_id is null)
    )
    ');




    $json_notificacion_mensajes= array();


    while($arreglo_ticket = arreglo($query_ticket)){
      array_push($json_notificacion_mensajes, $arreglo_ticket);
    }


    while($arreglo_mensajes = arreglo($query_mensajes)){
      
      
      for($i =0; $i < sizeof($array_materias); $i++){
        if($array_materias[$i] == $arreglo_mensajes['materia_id']){
          $arreglo_mensajes['nombre_materia'] = $array_nombre_asignatura[$i];
        }
      }

      array_push($json_notificacion_mensajes, $arreglo_mensajes);
    }

    while($arreglo_avisos_profesor = arreglo($query_avisos_profesor)){
     // print_r($arreglo_avisos_profesor);
     for($i =0; $i < sizeof($array_asignatura_grupos); $i++){
      if($array_asignatura_grupos[$i] == $arreglo_avisos_profesor['asignatura_grupo_id']){
        $arreglo_avisos_profesor['nombre_materia'] = $array_nombre_asignatura[$i];
        $arreglo_avisos_profesor['materia_id'] = $array_materias[$i];
      }
    }
     array_push($json_notificacion_mensajes, $arreglo_avisos_profesor);
    }

    while($arreglo_retro_profesor = arreglo($query_retro_mensajes)){
      //print_r($arreglo_retro_profesor);

      for($i =0; $i < sizeof($array_materias); $i++){
        if($array_materias[$i] == $arreglo_retro_profesor['materia_id']){
          $arreglo_retro_profesor['nombre_materia'] = $array_nombre_asignatura[$i];
        }
      }

      array_push($json_notificacion_mensajes, $arreglo_retro_profesor);


    }



    while($arreglo_aviso_encuesta = arreglo($query_aviso_encuesta)){
        array_push($json_notificacion_mensajes,$arreglo_aviso_encuesta);
    }


    while($arreglo_aviso_admin = arreglo($query_aviso_admin)){
        array_push($json_notificacion_mensajes, $arreglo_aviso_admin);
    }

    
    $json = array("status" => 1, "msg" => "Se encontro ticket","notificacion" => $json_notificacion_mensajes);


}else{
    $json = array("status" => 0, "msg" => "Método no aceptado");
}

/* Output header */

echo json_encode($json);

} catch (Exception $e) {
  $json = array("status" => 0, "msg" =>  $e->getMessage());

  echo json_encode($json);
}
