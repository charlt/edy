<?php
include '../../jwt.php';
include '../../headers.php';
include '../../controlEscolar/class/asignaturagrupo.class.php';
try {

  db('controlEscolar');

  if ($_SERVER['REQUEST_METHOD'] == "GET") {
    foreach ($_GET as $clave => $valor) {
      ${$clave} = escape_cara($valor);
    }

    $asignaturaGrupo = new AsignaturaGrupo();
    $usuario = Auth::GetData(
      $jwt
    );

    //SERVICIO DE CONSULTA DE SESIÓN
    $query_asignatura = query('select "Asignatura" as tipo, ca.asignatura as notificacion, UNIX_TIMESTAMP(iag.fecha_fin) as fecha_fin
      from inter_alumno_grupo ialg 
      join inter_asignatura_grupo iag on ialg.grupo_id = iag.grupo_id
      join ' . $GLOBALS['db_datosGenerales'] . '.inter_orden_asignatura ioa on iag.orden_asignatura_id = ioa.orden_asignatura_id
      join ' . $GLOBALS['db_datosGenerales'] . '.cat_asignaturas ca on ca.asignatura_id = ioa.asignatura_id
      where alumno_id = ' . $usuario->id . ' and now() between date_add(iag.fecha_fin, INTERVAL -4 DAY) and iag.fecha_fin 
      and ialg.estatus=1 and iag.estatus=1 and ioa.estatus=1 and ca.estatus=1');

    $json_notificaciones = array();

    $asignatura_grupo = query('select asignatura_grupo_id,materia_id from 
    ' . $GLOBALS['db_learning'] . '.tr_materia tm 
    where alumno_id = ' . $usuario->id . ' and tm.estatus = 1');
    $json_notificaciones = array();
    while ($arreglo_asignatura_grupo = arreglo($asignatura_grupo)) {
      $modulos = $asignaturaGrupo::consultaTodosModulos($arreglo_asignatura_grupo['asignatura_grupo_id']);
      while ($arreglo_modulos = arreglo($modulos)) {
        $query_actividades = query('select "Actividad" as tipo, actividad_id,actividad_nombre as notificacion, UNIX_TIMESTAMP(fecha_fin) as fecha_fin  
        from ' . $GLOBALS['db_learning'] . '.tr_actividad where modulo_id = ' . $arreglo_modulos['modulo_id'] . ' and now() between date_add(fecha_fin, INTERVAL -4 DAY) and fecha_fin and estatus = 1');
        while ($arreglo_actividades = arreglo($query_actividades)) {
          $arreglo_actividades['materia_id'] = $arreglo_asignatura_grupo['materia_id'];
          array_push($json_notificaciones, $arreglo_actividades);
        }
      }
    }

    /*$query_ciclo = query('SELECT "Ciclo" as tipo,cc.ciclo_desc as notificacion, UNIX_TIMESTAMP(cc.fecha_fin) as fecha_fin
     from cat_ciclo cc
    join tr_grupo tg on tg.ciclo_id = cc.ciclo_id
    join inter_alumno_grupo iag on tg.grupo_id = iag.grupo_id
    where alumno_id = ' . $usuario->id . ' and now() between date_add(cc.fecha_fin, INTERVAL -16 DAY) and cc.fecha_fin and cc.estatus=1 and tg.estatus=1 and iag.estatus=1');

    while ($arreglo_ciclo = arreglo($query_ciclo)) {
      array_push($json_notificaciones, $arreglo_ciclo);
    }
    while ($arreglo_asignatura = arreglo($query_asignatura)) {
      array_push($json_notificaciones, $arreglo_asignatura);
    }*/

    if ($json_notificaciones) {
      $json = array("status" => 1, "msg" => "Se encontraron notificaciones", "notificaciones" => $json_notificaciones,);
    } else {
      $json = array("status" => 0, "msg" => "No se encontraron notificaciones");
    }
  } else {
    $json = array("status" => 0, "msg" => "Método no aceptado");
  }

  /* Output header */

  echo json_encode($json);
} catch (Exception $e) {
  $json = array("status" => 0, "msg" =>  $e->getMessage());

  echo json_encode($json);
}
