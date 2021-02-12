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

        //TICKETS
        $query_ticket = query('SELECT 1 as tipo, "Notificación de la escuela" as tipo_descripcion, tt.ticket_id
    FROM tr_ticket tt
    where persona_id =' . $usuario->id . ' and tt.rol_id =' . $usuario->id_rol . ' and tt.estatus =1 and visto = 0 and estatus_ticket_id != 1 order by ticket_id desc ');

    $query_materias_alumno = query('select materia_id,ca.asignatura,iag.asignatura_grupo_id 
    from '.$GLOBALS['db_learning'].'.tr_materia tm
    join '.$GLOBALS['db_controlEscolar'].'.inter_asignatura_grupo iag ON tm.asignatura_grupo_id = iag.asignatura_grupo_id
    join '.$GLOBALS['db_datosGenerales'].'.inter_orden_asignatura ioa ON ioa.orden_asignatura_id = iag.orden_asignatura_id
    join '.$GLOBALS['db_datosGenerales'].'.cat_asignaturas ca ON ca.asignatura_id = ioa.asignatura_id
    join '.$GLOBALS['db_controlEscolar'].'.inter_docente_asignatura_grupo idag on idag.asignatura_grupo_id = iag.asignatura_grupo_id 
    where docente_id = '.$usuario->id.' and estatus_materia_id != 4 and tm.estatus = 1');



    $array_materias_alumno = array();
    $array_materias = array();
    $array_asignatura_grupos = array();
    $array_nombre_asignatura = array();

    while($arreglo_materia_alumno = arreglo($query_materias_alumno)){
      array_push($array_materias_alumno,$arreglo_materia_alumno);
      array_push($array_materias,$arreglo_materia_alumno['materia_id']);
      array_push($array_nombre_asignatura,$arreglo_materia_alumno['asignatura']);
      array_push($array_asignatura_grupos,$arreglo_materia_alumno['asignatura_grupo_id']);

    }

    if(sizeof($array_materias) > 0){
      $secuencia_materias= implode(',',$array_materias);
      $secuencia_asignatura_grupo= implode(',',$array_asignatura_grupos);
    }else{
      $secuencia_materias=0;
      $secuencia_asignatura_grupo=0;
      
    }
    

        //ENCUESTAS
        $query_aviso_encuesta = query('select  5 as tipo,"Encuesta pendiente" as tipo_descripcion, obligatorio, 
    asignatura_grupo_id,grupo_id,orden_asignatura_id,plan_orden_id,plan_estudios_id,carrera_id, tse.encuesta_id, tse.switch_encuesta_id
    from ' . $GLOBALS['db_seguimiento'] . '.tr_switch_encuesta tse
    join ' . $GLOBALS['db_seguimiento'] . '.tr_encuesta te on te.encuesta_id = tse.encuesta_id
    left join ' . $GLOBALS['db_seguimiento'] . '.inter_encuesta_persona iep on iep.switch_encuesta_id = tse.switch_encuesta_id  and iep.persona_id=' . $usuario->id . ' 
    where te.estatus=1 and te.encuesta_id and now() BETWEEN fecha_inicio and fecha_fin and iep.persona_id is null  and rol_id = ' . $usuario->id_rol . '
    ');


        //AVISOS DEL ADMINISTRADOR
        $query_aviso_admin = query('select 6 as tipo,ta.aviso_id,"Aviso de la escuela" as tipo_descripcion, tsa.aviso_id,ta.importancia_aviso_id,
    asignatura_grupo_id,grupo_id,orden_asignatura_id,plan_orden_id,plan_estudios_id,carrera_id
    from tr_switch_aviso tsa
    join tr_avisos ta on ta.aviso_id = tsa.aviso_id 
    left join inter_aviso_persona iap on iap.aviso_id = tsa.aviso_id  and iap.persona_id=' . $usuario->id . '
    where tsa.estatus = 1 and ta.estatus=1 and now() between fecha_inicio and fecha_fin and iap.persona_id is null and rol_id = ' . $usuario->id_rol);


        $json_notificacion_mensajes = array();


        while ($arreglo_ticket = arreglo($query_ticket)) {
            array_push($json_notificacion_mensajes, $arreglo_ticket);
        }


 

        $array_temp_encuesta = array();

        while ($arreglo_aviso_encuesta = arreglo($query_aviso_encuesta)) {


            if (!empty($arreglo_aviso_encuesta['asignatura_grupo_id']) || !empty($arreglo_aviso_encuesta['grupo_id']) || !empty($arreglo_aviso_encuesta['orden_asignatura_id'])) {

                $ver_encuesta = 0;

                $query_grupo = query('select iag.grupo_id,iag.orden_asignatura_id,iag.asignatura_grupo_id
        from inter_asignatura_grupo iag
        join tr_grupo tg on tg.grupo_id = iag.grupo_id
        join ' . $GLOBALS['db_datosGenerales'] . '.inter_orden_asignatura ioa on ioa.orden_asignatura_id = iag.orden_asignatura_id
        where iag.asignatura_grupo_id in (' . $secuencia_asignatura_grupo . ') and iag.estatus = 1 and tg.estatus = 1 and ioa.estatus= 1');

                if (num($query_grupo)) {


                    while ($arreglo_grupo = arreglo($query_grupo)) {
                        if (
                            $arreglo_grupo['asignatura_grupo_id'] == $arreglo_aviso_encuesta['asignatura_grupo_id']  ||
                            $arreglo_grupo['grupo_id'] == $arreglo_aviso_encuesta['grupo_id']  ||
                            $arreglo_grupo['orden_asignatura_id'] == $arreglo_aviso_encuesta['orden_asignatura_id']
                        ) {
                            $ver_encuesta = 1;
                        }
                    }
                }
            } else if (!empty($arreglo_aviso_encuesta['plan_orden_id']) || !empty($arreglo_aviso_encuesta['plan_estudios_id']) ||  !empty($arreglo_aviso_encuesta['carrera_id'])) {

                $ver_encuesta = 0;

                $query_plan = query('SELECT alumno_id, tpe.plan_estudio_id,ipo.plan_orden_id,carrera_id
          from ' . $GLOBALS['db_datosGenerales'] . '.inter_plan_orden ipo
          join ' . $GLOBALS['db_controlEscolar'] . '.inter_alumno_plan iap on iap.plan_orden_id = ipo.plan_orden_id
          join ' . $GLOBALS['db_datosGenerales'] . '.tr_plan_estudios tpe on tpe.plan_estudio_id = ipo.plan_estudio_id
          where alumno_id =' . $usuario->id . ' and ipo.estatus=1 and tpe.estatus=1 and iap.estatus = 1');

                if (num($query_plan)) {
                    $arreglo_plan = arreglo($query_plan);

                    if (
                        $arreglo_plan['plan_estudio_id'] == $arreglo_aviso_encuesta['plan_estudios_id']  ||
                        $arreglo_plan['plan_orden_id'] == $arreglo_aviso_encuesta['plan_orden_id']  ||
                        $arreglo_plan['carrera_id'] == $arreglo_aviso_encuesta['carrera_id']
                    ) {
                        $ver_encuesta = 1;
                    }
                }
            } else {
                $ver_encuesta = 1;
            }

            if ($ver_encuesta == 1) {
                array_push($json_notificacion_mensajes, $arreglo_aviso_encuesta);
            }
        }

        while ($arreglo_aviso_admin = arreglo($query_aviso_admin)) {


            if (!empty($arreglo_aviso_admin['asignatura_grupo_id']) || !empty($arreglo_aviso_admin['grupo_id']) || !empty($arreglo_aviso_admin['orden_asignatura_id'])) {

                $ver_aviso = 0;

                $query_grupo = query('select iag.grupo_id,iag.orden_asignatura_id,asignatura_grupo_id
        from inter_asignatura_grupo iag
        join tr_grupo tg on tg.grupo_id = iag.grupo_id
        join ' . $GLOBALS['db_datosGenerales'] . '.inter_orden_asignatura ioa on ioa.orden_asignatura_id = iag.orden_asignatura_id
        where iag.asignatura_grupo_id in (' . $secuencia_asignatura_grupo . ') and iag.estatus = 1 and tg.estatus = 1 and ioa.estatus= 1');

                if (num($query_grupo)) {
                    $arreglo_grupo = arreglo($query_grupo);

                    if (
                        $arreglo_grupo['asignatura_grupo_id'] == $arreglo_aviso_admin['asignatura_grupo_id']  ||
                        $arreglo_grupo['grupo_id'] == $arreglo_aviso_admin['grupo_id']  ||
                        $arreglo_grupo['orden_asignatura_id'] == $arreglo_aviso_admin['orden_asignatura_id']
                    ) {
                        $ver_aviso = 1;
                    }
                }
            } else if (!empty($arreglo_aviso_admin['plan_orden_id']) || !empty($arreglo_aviso_admin['plan_estudios_id']) ||  !empty($arreglo_aviso_admin['carrera_id'])) {

                $ver_aviso = 0;

                $query_plan = query('SELECT alumno_id, tpe.plan_estudio_id,ipo.plan_orden_id,carrera_id
          from ' . $GLOBALS['db_datosGenerales'] . '.inter_plan_orden ipo
          join ' . $GLOBALS['db_controlEscolar'] . '.inter_alumno_plan iap on iap.plan_orden_id = ipo.plan_orden_id
          join ' . $GLOBALS['db_datosGenerales'] . '.tr_plan_estudios tpe on tpe.plan_estudio_id = ipo.plan_estudio_id
          where alumno_id =' . $usuario->id . ' and ipo.estatus=1 and tpe.estatus=1 and iap.estatus = 1');

                if (num($query_plan)) {
                    $arreglo_plan = arreglo($query_plan);

                    if (
                        $arreglo_plan['plan_estudio_id'] == $arreglo_aviso_admin['plan_estudios_id']  ||
                        $arreglo_plan['plan_orden_id'] == $arreglo_aviso_admin['plan_orden_id']  ||
                        $arreglo_plan['carrera_id'] == $arreglo_aviso_admin['carrera_id']
                    ) {
                        $ver_aviso = 1;
                    }
                }
            } else {
                $ver_aviso = 1;
            }

            if ($ver_aviso == 1) {
                array_push($json_notificacion_mensajes, $arreglo_aviso_admin);
            }
        }

        $json = array("status" => 1, "msg" => "Se encontro ticket", "notificacion" => $json_notificacion_mensajes);
    } else {
        $json = array("status" => 0, "msg" => "Método no aceptado");
    }

    /* Output header */

    echo json_encode($json);
} catch (Exception $e) {
    $json = array("status" => 0, "msg" =>  $e->getMessage());

    echo json_encode($json);
}
