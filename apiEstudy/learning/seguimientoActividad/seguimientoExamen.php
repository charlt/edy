<?php
include '../../jwt.php';
include '../../headers.php';
include '../../controlEscolar/class/asignaturagrupo.class.php';


try {
  
  db ('learning');
  $AsignaturaGrupo = new AsignaturaGrupo();

  if ($_SERVER['REQUEST_METHOD'] == "GET") {
    foreach ($_GET as $clave => $valor) {
      ${$clave} = escape_cara($valor);
    }

    $usuario = Auth::GetData(
      $jwt
    );

    $query_modulos = $AsignaturaGrupo::consultaTodosModulos($id_asignatura_grupo);

    $total_preguntas = 0;
    while($arreglo_modulos = arreglo($query_modulos)){
      $query_actividad = query('select datos_pregunta_id
      from tr_actividad ta
      join tr_datos_pregunta tdp on ta.actividad_id = tdp.actividad_id
      where ta.estatus = 1 and tdp.estatus = 1 and importancia_actividad_id = 2 and modulo_id = '.$arreglo_modulos['modulo_id'].'
      ');
      
      $total_preguntas += num($query_actividad);

    }



    //SERVICIO DE CONSULTA DE SESIÓN
    $query_seguimiento = query('select tsa.seguimiento_actividad_id, p.nombre,p.primer_apellido, p.segundo_apellido,ta.clave_alumno,UNIX_TIMESTAMP(tmfa.fecha_creacion) as inicio_examen,tsa.cambio_pagina, tsa.click_derecho, tsa.control_c, tsa.control_v, tsa.imp_pt,
    tmfa.calificacion,count(tr.respuesta_id) as reactivos_contestados, p.celular,p.email,p.persona_id, tmfa.estatus_actividad_id,tmfa.actividad_id,tmfa.materia_fecha_actividad_id,tm.materia_id
    from '.$GLOBALS['db_datosGenerales'].'.personas p
    join '.$GLOBALS['db_controlEscolar'].'.tr_alumno ta on ta.alumno_id = p.persona_id
    join tr_materia  tm  on ta.alumno_id = tm.alumno_id
    join '.$GLOBALS['db_controlEscolar'].'.inter_asignatura_grupo iag on iag.asignatura_grupo_id = tm.asignatura_grupo_id
    left join tr_materia_fecha_actividad tmfa on tmfa.materia_id = tm.materia_id
    left join tr_respuesta tr on tmfa.materia_fecha_actividad_id = tr.materia_fecha_actividad_id
    left join tr_seguimiento_actividad tsa on tsa.materia_fecha_actividad_id = tmfa.materia_fecha_actividad_id
    where  iag.asignatura_grupo_id =' . $id_asignatura_grupo . '  and iag.estatus = 1 and ta.estatus = 1 and tm.estatus = 1
    group by tm.materia_id,tmfa.materia_fecha_actividad_id');

    $seguimiento = num($query_seguimiento);

    $json_seguimiento = array();

    while ($arreglo_seguimiento = arreglo($query_seguimiento)) {
      $arreglo_seguimiento['total_preguntas'] = $total_preguntas;

      $query_notas = query('select nota_id from tr_nota where materia_id = '.$arreglo_seguimiento['materia_id']);
      $arreglo_seguimiento['notas'] = num($query_notas);
      array_push($json_seguimiento, $arreglo_seguimiento);
    }
    if (num($query_seguimiento)) {
      $json = array("status" => 1, "msg" => "Se encontró seguimiento", "seguimiento" => $json_seguimiento);
    } else {
      $json = array("status" => 0, "msg" => "No se encontró seguimiento");
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
