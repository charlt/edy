<?php
include '../../jwt.php';
include '../../headers.php';

try {

  db('controlEscolar');

  if ($_SERVER['REQUEST_METHOD'] == "POST") {
    foreach ($_POST as $clave => $valor) {
      ${$clave} = escape_cara($valor);
    }

    $usuario = Auth::GetData(
      $jwt
    );

    $query_plan = query('SELECT iag.grupo_id,tpe.plan_estudio_id from inter_alumno_grupo iag 
    join tr_grupo tg on tg.grupo_id = iag.grupo_id
    join '.$GLOBALS['db_datosGenerales'].'.inter_plan_orden ipo on ipo.plan_orden_id = tg.plan_orden_id
    join '.$GLOBALS['db_datosGenerales'].'.tr_plan_estudios tpe on tpe.plan_estudio_id = ipo.plan_estudio_id
    where alumno_id = ' . $id_alumno . ' and iag.estatus = 1 and (tg.estatus = 1 and tg.situacion_grupo_id not in  (4,5))
    and ipo.estatus=1 and iag.estatus=1 and tg.estatus=1 and ipo.estatus=1 and tpe.estatus=1');

    $arreglo_alumno_grupo = arreglo(query('SELECT tg.nombre_grupo,tg.grupo_id,tpe.plan_estudio_id,tg.plan_orden_id from tr_grupo tg 
    join '.$GLOBALS['db_datosGenerales'].'.inter_plan_orden ipo on ipo.plan_orden_id = tg.plan_orden_id
    join '.$GLOBALS['db_datosGenerales'].'.tr_plan_estudios tpe on tpe.plan_estudio_id = ipo.plan_estudio_id
    where ipo.estatus=1 and tpe.estatus=1 and tg.grupo_id = ' . $id_grupo));




    $sin_coincidencia = array();
    $con_coincidencia= array();
    
    while($arreglo_plan = arreglo($query_plan)){
      if($arreglo_plan['plan_estudio_id'] != $arreglo_alumno_grupo['plan_estudio_id']){
        array_push($sin_coincidencia, $arreglo_plan['plan_estudio_id']);
      }else{
        array_push($con_coincidencia, $arreglo_plan['plan_estudio_id']);
      }
    }


    if ($sin_coincidencia || num($query_plan)==0) {
      $inserta = inserta(
        'inter_alumno_grupo',
        'alumno_id, grupo_id, fecha_creacion, estatus',
        '' . $id_alumno . ',' . $id_grupo . ', now(), 1'
      );


      $query_grupos = query('select asignatura_grupo_id from inter_asignatura_grupo where grupo_id = ' . $id_grupo . ' and estatus=1');
      while ($arreglo_grupos = arreglo($query_grupos)) {

        $modifica_materias = query('SELECT alumno_id, asignatura_grupo_id from ' . $GLOBALS["db_learning"] . '.tr_materia where alumno_id =' . $id_alumno . ' and 
        asignatura_grupo_id =' . $arreglo_grupos['asignatura_grupo_id']);

        if (num($modifica_materias)) {
          $activa_materia = update($GLOBALS["db_learning"] . '.tr_materia', 'estatus=1, usuario_actualiza="' . $usuario->usuario . '"', 'alumno_id=' . $id_alumno . ' 
        and asignatura_grupo_id =' . $arreglo_grupos['asignatura_grupo_id']);
        } else {
          $inserta_materia = inserta(
            '' . $GLOBALS["db_learning"] . '.tr_materia',
            'alumno_id,asignatura_grupo_id,estatus_materia_id,tipo_materia_id,usuario_creacion,estatus',
            '' . $id_alumno . ',' . $arreglo_grupos['asignatura_grupo_id'] . ',1,1,"' . $usuario->usuario . '", 1'
          );
        }
      }

      if ($inserta) {
        update('inter_alumno_plan','asignado_grupo = 1','alumno_id ='.$id_alumno.' and plan_orden_id = '.$arreglo_alumno_grupo['plan_orden_id']);
        
        $json = array("status" => 1, "msg" => "Se insertó alumno correctamente");
      } else {
        $json = array("status" => 0, "msg" => "No se logro insertar ");
      }
    } else {
      $json = array("status" => 0, "msg" => "El alumno ya está asignado al grupo:" . ' ' . $arreglo_alumno_grupo['nombre_grupo']);
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
