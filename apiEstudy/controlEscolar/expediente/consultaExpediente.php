<?php
include '../../jwt.php';
include '../../headers.php';

try {

  db('controlEscolar');

  if ($_SERVER['REQUEST_METHOD'] == "GET") {
    foreach ($_GET as $clave => $valor) {
      ${$clave} = escape_cara($valor);
    }

    $usuario = Auth::GetData(
      $jwt
    );

    if($tipo_busqueda == 2){
      $is_null = 'and expediente_id is null';
    }  else if($tipo_busqueda == 1){
      $is_null = 'and expediente_id is not null';
    }

    $query_documento = query('select cd.documento_id,cd.nombre_documento from ' . $GLOBALS['db_seguimiento'] . '.cat_documento cd where estatus = 1');

    // $query_expediente = query('select nombre,primer_apellido,segundo_apellido, ta.clave_alumno, ta.alumno_id ,cd.nombre_documento, cd.documento_id from ' . $GLOBALS['db_datosGenerales'] . '.personas p
    // join ' . $GLOBALS['db_datosGenerales'] . '.inter_persona_usuario_rol ipur on ipur.persona_id = p.persona_id
    // join ' . $GLOBALS['db_controlEscolar'] . '.tr_alumno ta on ta.alumno_id =  p.persona_id
    // join ' . $GLOBALS['db_seguimiento'] . '.inter_expediente ie on ie.aspirante_id = p.persona_id 
    // join ' . $GLOBALS['db_seguimiento'] . '.cat_documento cd on cd.documento_id = ie.documento_id
    // where ipur.rol_id = 2 and cd.estatus = 1
    // order by p.persona_id');

    // $query_alumnos_tabla = query('select nombre,primer_apellido,segundo_apellido, ta.clave_alumno, ta.alumno_id , tc.carrera from ' . $GLOBALS['db_datosGenerales'] . '.personas p
    // join ' . $GLOBALS['db_datosGenerales'] . '.inter_persona_usuario_rol ipur on ipur.persona_id = p.persona_id
    // join ' . $GLOBALS['db_controlEscolar'] . '.tr_alumno ta on ta.alumno_id =  p.persona_id
    // left join  (select expediente_id,documento_id, aspirante_id from ' . $GLOBALS['db_seguimiento'] . '.inter_expediente where documento_id = '.$id_documento.' ) ie on ie.aspirante_id = p.persona_id 
    // join ' . $GLOBALS['db_controlEscolar'] . '.inter_alumno_plan iap on iap.alumno_id = ta.alumno_id 
    // join ' . $GLOBALS['db_datosGenerales'] . '.inter_plan_orden ipo on ipo.plan_orden_id = iap.plan_orden_id 
    // join ' . $GLOBALS['db_datosGenerales'] . '.tr_plan_estudios tpe on tpe .plan_estudio_id = ipo.plan_estudio_id 
    // join ' . $GLOBALS['db_datosGenerales'] . '.tr_carrera tc on tc.carrera_id = tpe.carrera_id
    // where ipur.rol_id = 2 '.$is_null.' and iap.estatus = 1
    // group by alumno_id
    // order by p.persona_id');

    $query_expediente = query('select nombre,primer_apellido,segundo_apellido, ta.clave_aspirante, ta.aspirante_id ,cd.nombre_documento, cd.documento_id from ' . $GLOBALS['db_datosGenerales'] . '.personas p
    join ' . $GLOBALS['db_datosGenerales'] . '.inter_persona_usuario_rol ipur on ipur.persona_id = p.persona_id
    join ' . $GLOBALS['db_seguimiento'] . '.tr_aspirante ta on ta.aspirante_id =  p.persona_id
    join ' . $GLOBALS['db_seguimiento'] . '.inter_expediente ie on ie.aspirante_id = p.persona_id 
    join ' . $GLOBALS['db_seguimiento'] . '.cat_documento cd on cd.documento_id = ie.documento_id
    where ipur.rol_id = 4 and cd.estatus = 1
    order by p.persona_id');

    $query_alumnos_tabla = query('select nombre,primer_apellido,segundo_apellido, ta.clave_aspirante, ta.aspirante_id, ta.carrera_id from ' . $GLOBALS['db_datosGenerales'] . '.personas p
    join ' . $GLOBALS['db_datosGenerales'] . '.inter_persona_usuario_rol ipur on ipur.persona_id = p.persona_id
    join ' . $GLOBALS['db_seguimiento'] . '.tr_aspirante ta on ta.aspirante_id =  p.persona_id
    left join  (select expediente_id,documento_id, aspirante_id from ' . $GLOBALS['db_seguimiento'] . '.inter_expediente where documento_id = '.$id_documento.' ) ie on ie.aspirante_id = p.persona_id 
    where ipur.rol_id = 4 '.$is_null.'
    group by aspirante_id 
    order by p.persona_id');

    $json_documentos = array();
    $json_expediente = array();
    $json_alumnos_tabla = array();
    while ($arreglo_documento = arreglo($query_documento)){
      array_push($json_documentos, $arreglo_documento);
    }


    while ($arreglo_expediente = arreglo($query_expediente)) {
      array_push($json_expediente, $arreglo_expediente);
    }


    while ($arreglo_alumnos_tabla = arreglo($query_alumnos_tabla)) {
      array_push($json_alumnos_tabla, $arreglo_alumnos_tabla);
    }

    

    if (num($query_expediente) || (num($query_documento) && num($query_alumnos_tabla))) {
      $json = array("status" => 1, "msg" => "Se encontró expediente", "expediente" => $json_expediente, $json_documentos,$json_alumnos_tabla);
    } else {
      $json = array("status" => 0, "msg" => "No se encontró expediente");
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
