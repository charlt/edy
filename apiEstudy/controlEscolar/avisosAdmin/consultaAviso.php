<?php
include '../../jwt.php';
include '../../headers.php';


db('controlEscolare');

try {
    if ($_SERVER['REQUEST_METHOD'] == "GET") {
        foreach ($_GET as $clave => $valor) {
            ${$clave} = escape_cara($valor);
        }

        $usuario = Auth::GetData(
            $jwt
        );


        $query_encuesta = query('select tsa.aviso_id,tsa.alumno_id,tsa.grupo_id, orden_asignatura_id,
        tsa.asignatura_grupo_id, tsa.carrera_id, plan_estudios_id,rol_id, obligatorio,plan_orden_id
         from ' . $GLOBALS['db_controlEscolar'] . '.tr_switch_aviso tsa
        join ' . $GLOBALS['db_controlEscolar'] . '.tr_avisos ta on ta.aviso_id = tsa.aviso_id 
        where tsa.estatus = 1 and ta.estatus=1 and now() between fecha_inicio and fecha_fin');


        $encuestas_json = array();
        while ($arreglo = arreglo($query_encuesta)) {


            if (!empty($arreglo['asignatura_grupo_id'])) {

                if ($arreglo['rol_id'] == 2 || $arreglo['rol_id'] == "" && $usuario->id_rol == 2) {
                    $arreglo_asignatura_grupo = arreglo(query('select alumno_id from ' . $GLOBALS['db_learning'] . '.tr_materia where alumno_id =' . $usuario->id . ' and asignatura_grupo_id = ' . $arreglo['asignatura_grupo_id']));
                    $arreglo_asignatura_grupo['persona_id'] = $arreglo_asignatura_grupo['alumno_id'];
                } elseif ($arreglo['rol_id'] == 3 || $arreglo['rol_id'] == "" && $usuario->id_rol == 3) {
                    $arreglo_asignatura_grupo = arreglo(query('select docente_id from ' . $GLOBALS['db_controlEscolar'] . '.inter_docente_asignatura_grupo where docente_id = ' . $usuario->id . ' and asignatura_grupo_id = ' . $arreglo['asignatura_grupo_id']));
                    $arreglo_asignatura_grupo['persona_id'] = $arreglo_asignatura_grupo['docente_id'];
                }
                if (!empty($arreglo_asignatura_grupo['persona_id'])) {
                    $alumno_encuesta = query('select aviso_persona_id from ' . $GLOBALS['db_controlEscolar'] . '.inter_aviso_persona where persona_id =' . $arreglo_asignatura_grupo['persona_id'] . ' and estatus=1 and aviso_id =' . $arreglo['aviso_id']);
                    if (num($alumno_encuesta)) {
                    } else {
                        $json['tipo_asignatura_grupo'] = "asignatura_grupo_id";
                        $json['encuesta_asignatura_grupo'] = $arreglo['aviso_id'];
                        if ($arreglo['obligatorio'] == '') {
                            $arreglo['obligatorio'] = 0;
                        }

                        array_push($encuestas_json, array('tipo' => "asignatura_grupo_id", 'aviso_id' => $arreglo['aviso_id'], 'obligatorio' => $arreglo['obligatorio']));
                    }
                }
            } else if (!empty($arreglo['grupo_id'])) {
                if ($arreglo['rol_id'] == 2 ||  $arreglo['rol_id'] == "" && $usuario->id_rol == 2) {
                    $arreglo_grupo = arreglo(query('select alumno_id from ' . $GLOBALS['db_controlEscolar'] . '.inter_alumno_grupo where alumno_id =' . $usuario->id . ' and grupo_id =' . $arreglo['grupo_id']));
                    $arreglo_grupo['persona_id'] = $arreglo_grupo['alumno_id'];
                } elseif ($arreglo['rol_id'] == 3 || $arreglo['rol_id'] == "" && $usuario->id_rol == 3) {

                    $arreglo_grupo = arreglo(query('SELECT idag.docente_id from ' . $GLOBALS['db_controlEscolar'] . '.inter_docente_asignatura_grupo idag
                        join ' . $GLOBALS['db_controlEscolar'] . '.inter_asignatura_grupo iag on idag.asignatura_grupo_id = iag.asignatura_grupo_id
                        where docente_id = ' . $usuario->id . ' and iag.grupo_id = ' . $arreglo['grupo_id'] . ' and idag.estatus = 1 and iag.estatus=1'));
                    $arreglo_grupo['persona_id'] = $arreglo_grupo['docente_id'];
                }
                if (!empty($arreglo_grupo['persona_id'])) {
                    $alumno_encuesta = query('select aviso_persona_id from ' . $GLOBALS['db_controlEscolar'] . '.inter_aviso_persona where persona_id =' . $arreglo_grupo['persona_id'] . ' and estatus=1 and aviso_id=' . $arreglo['aviso_id']);
                    if (num($alumno_encuesta)) {
                    } else {
                        $json['tipo_grupo'] = "grupo_id";
                        $json['encuesta_grupo'] = $arreglo['aviso_id'];
                        if ($arreglo['obligatorio'] == '') {
                            $arreglo['obligatorio'] = 0;
                        }

                        array_push($encuestas_json, array('tipo' => "grupo_id", 'aviso_id' => $arreglo['aviso_id'], 'obligatorio' => $arreglo['obligatorio']));
                    }
                }
            } else if (!empty($arreglo['orden_asignatura_id'])) {
                if ($arreglo['rol_id'] == 2 ||  $arreglo['rol_id'] == "" && $usuario->id_rol == 2) {

                    $arreglo_orden_grupo = arreglo(query('select alumno_id from ' . $GLOBALS['db_datosGenerales'] . '.inter_orden_asignatura ioa
                        join ' . $GLOBALS['db_controlEscolar'] . '.inter_asignatura_grupo iag on iag.orden_asignatura_id = ioa.orden_asignatura_id
                        join ' . $GLOBALS['db_controlEscolar'] . '.inter_alumno_asignatura_grupo iaag on iaag.asignatura_grupo_id = iag.asignatura_grupo_id  
                        where alumno_id =' . $usuario->id . ' and ioa.orden_asignatura_id =' . $arreglo['orden_asignatura_id'] . ' and iag.estatus=1 and ioa.estatus=1'));
                    $arreglo_orden_grupo['persona_id'] = $arreglo_orden_grupo['alumno_id'];
                } elseif ($arreglo['rol_id'] == 3 ||  $arreglo['rol_id'] == "" && $usuario->id_rol == 3) {
                    $arreglo_orden_grupo = arreglo(query('SELECT docente_id, ioa.orden_asignatura_id 
                    from ' . $GLOBALS['db_controlEscolar'] . '.inter_docente_asignatura_grupo iaag 
                     join ' . $GLOBALS['db_controlEscolar'] . '.inter_asignatura_grupo iag on iag.asignatura_grupo_id = iaag.asignatura_grupo_id
                     join ' . $GLOBALS['db_datosGenerales'] . '.inter_orden_asignatura ioa on ioa.orden_asignatura_id = iag.orden_asignatura_id                                   
                     where docente_id=' . $usuario->id . ' and ioa.orden_asignatura_id =' . $arreglo['orden_asignatura_id'] . ' and iaag.estatus=1 and iag.estatus=1 and ioa.estatus=1'));
                    $arreglo_orden_grupo['persona_id'] = $arreglo_orden_grupo['docente_id'];
                } else if (!empty($arreglo_orden_grupo['persona_id'])) {

                    $alumno_encuesta = query('select aviso_persona_id from ' . $GLOBALS['db_controlEscolar'] . '.inter_aviso_persona where persona_id =' . $arreglo_orden_grupo['persona_id'] . ' and estatus=1 and aviso_id=' . $arreglo['aviso_id']);
                    if (num($alumno_encuesta)) {
                    } else {

                        $json['tipo_orden'] = "orden_asignatura_id";
                        $json['encuesta_orden_grupo'] = $arreglo['aviso_id'];
                        if ($arreglo['obligatorio'] == '') {
                            $arreglo['obligatorio'] = 0;
                        }

                        array_push($encuestas_json, array('tipo' => "orde_asignatura_id", 'aviso_id' => $arreglo['aviso_id'], 'obligatorio' => $arreglo['obligatorio']));
                    }
                }
            } else if (!empty($arreglo['plan_orden_id'])) {
                if ($arreglo['rol_id'] == 2 || $arreglo['rol_id'] == "" && $usuario->id_rol == 2) {
                    $arreglo_orden_jerarquico = arreglo(query('SELECT alumno_id from ' . $GLOBALS['db_controlEscolar'] . '.inter_alumno_plan iap
                    where alumno_id =' . $usuario->id . ' and plan_orden_id = ' . $arreglo['plan_orden_id'] . ' and iap.estatus=1 '));
                    $arreglo_orden_jerarquico['persona_id'] = $arreglo_orden_jerarquico['alumno_id'];
                } elseif ($arreglo['rol_id'] == 3 || $arreglo['rol_id'] == "" && $usuario->id_rol == 3) {
                    $arreglo_orden_jerarquico = arreglo(query('
                        SELECT docente_id from ' . $GLOBALS['db_controlEscolar'] . '.inter_docente_asignatura_grupo iaag 
                                                join ' . $GLOBALS['db_controlEscolar'] . '.inter_asignatura_grupo iag on iag.asignatura_grupo_id = iaag.asignatura_grupo_id
                                                join ' . $GLOBALS['db_datosGenerales'] . '.inter_orden_asignatura ioa on ioa.orden_asignatura_id = iag.orden_asignatura_id
                                            where docente_id=' . $usuario->id . ' and plan_orden_id = ' . $arreglo['plan_orden_id'] . ' and iaag.estatus=1 and iag.estatus=1 and ioa.estatus=1'));
                    $arreglo_orden_jerarquico['persona_id'] = $arreglo_orden_jerarquico['docente_id'];
                }

                if (!empty($arreglo_orden_jerarquico['persona_id'])) {
                    $alumno_encuesta = query('select aviso_persona_id from ' . $GLOBALS['db_controlEscolar'] . '.inter_aviso_persona where persona_id =' . $arreglo_orden_jerarquico['persona_id'] . ' and estatus=1 and aviso_id=' . $arreglo['aviso_id']);
                    if (num($alumno_encuesta)) {
                    } else {
                        $json['tipo_ordenjer'] = "plan_orden_id";
                        $json['encuesta_orden_jerarquico'] = $arreglo['aviso_id'];
                        if ($arreglo['obligatorio'] == '') {
                            $arreglo['obligatorio'] = 0;
                        }

                        array_push($encuestas_json, array('tipo' => "plan_orden_id", 'aviso_id' => $arreglo['aviso_id'], 'obligatorio' => $arreglo['obligatorio']));
                    }
                }
            } else if (!empty($arreglo['carrera_id'])) {
                if ($arreglo['rol_id'] == 2 || $arreglo['rol_id'] == "" && $usuario->id_rol == 2) {

                    $arreglo_carrera = arreglo(query('SELECT alumno_id, tpe.plan_estudio_id from ' . $GLOBALS['db_datosGenerales'] . '.inter_plan_orden ipo
                        join ' . $GLOBALS['db_controlEscolar'] . '.inter_alumno_plan iap on iap.plan_orden_id = ipo.plan_orden_id
                        join ' . $GLOBALS['db_datosGenerales'] . '.tr_plan_estudios tpe on tpe.plan_estudio_id = ipo.plan_estudio_id
                        where alumno_id =' . $usuario->id . ' and tpe.carrera_id = ' . $arreglo['carrera_id'] . ' and ipo.estatus=1 and tpe.estatus=1 and iap.estatus = 1'));

                    $arreglo_carrera['persona_id'] = $arreglo_carrera['alumno_id'];
                } elseif ($arreglo['rol_id'] == 3 || $arreglo['rol_id'] == "" && $usuario->id_rol == 3) {
                    $arreglo_carrera = arreglo(query('select distinct docente_id from ' . $GLOBALS['db_controlEscolar'] . '.inter_docente_asignatura_grupo iaag 
                        join ' . $GLOBALS['db_controlEscolar'] . '.inter_asignatura_grupo iag on iag.asignatura_grupo_id = iaag.asignatura_grupo_id
                        join ' . $GLOBALS['db_datosGenerales'] . '.inter_orden_asignatura ioa on ioa.orden_asignatura_id = iag.orden_asignatura_id
                        join ' . $GLOBALS['db_datosGenerales'] . '.inter_plan_orden ipo on ipo.plan_orden_id = ioa.plan_orden_id
                        join ' . $GLOBALS['db_datosGenerales'] . '.tr_plan_estudios tpe on tpe.plan_estudio_id = ipo.plan_estudio_id
                        where docente_id = ' . $usuario->id . ' and tpe.carrera_id = ' . $arreglo['carrera_id'] . ' and iaag.estatus=1 and iag.estatus=1 and ioa.estatus=1 and ipo.estatus=1 and tpe.estatus=1'));
                    $arreglo_carrera['persona_id'] = $arreglo_carrera['docente_id'];
                }
                if (!empty($arreglo_carrera['persona_id'])) {

                    $alumno_encuesta = query('select aviso_persona_id from ' . $GLOBALS['db_controlEscolar'] . '.inter_aviso_persona where persona_id =' . $arreglo_carrera['persona_id'] . ' and estatus=1 and aviso_id=' . $arreglo['aviso_id']);
                    if (num($alumno_encuesta)) {
                    } else {
                        $json['tipo_carrera'] = "carrera_id";
                        $json['encuesta_carrera'] = $arreglo['aviso_id'];
                        if ($arreglo['obligatorio'] == '') {
                            $arreglo['obligatorio'] = 0;
                        }

                        array_push($encuestas_json, array('tipo' => "carrera_id", 'aviso_id' => $arreglo['aviso_id'], 'obligatorio' => $arreglo['obligatorio']));
                    }
                }
            } else if (!empty($arreglo['plan_estudios_id'])) {
                if ($arreglo['rol_id'] == 2 || $arreglo['rol_id'] == "" && $usuario->id_rol == 2) {

                    $arreglo_plan = arreglo(query('SELECT alumno_id, tpe.plan_estudio_id from ' . $GLOBALS['db_datosGenerales'] . '.inter_plan_orden ipo
                        join ' . $GLOBALS['db_controlEscolar'] . '.inter_alumno_plan iap on iap.plan_orden_id = ipo.plan_orden_id
                        join ' . $GLOBALS['db_datosGenerales'] . '.tr_plan_estudios tpe on tpe.plan_estudio_id = ipo.plan_estudio_id
                        where alumno_id =' . $usuario->id . ' and tpe.plan_estudio_id = ' . $arreglo['plan_estudios_id'] . ' and ipo.estatus=1 and tpe.estatus=1 and iap.estatus = 1'));
                    $arreglo_plan['persona_id'] = $arreglo_plan['alumno_id'];
                } elseif ($arreglo['rol_id'] == 3 || $arreglo['rol_id'] == "" && $usuario->id_rol == 3) {
                    $arreglo_plan = arreglo(query('SELECT docente_id from ' . $GLOBALS['db_controlEscolar'] . '.inter_docente_asignatura_grupo iaag                     
                        join ' . $GLOBALS['db_controlEscolar'] . '.inter_asignatura_grupo iag on iag.asignatura_grupo_id = iaag.asignatura_grupo_id
                        join ' . $GLOBALS['db_datosGenerales'] . '.inter_orden_asignatura ioa on ioa.orden_asignatura_id = iag.orden_asignatura_id
                        join ' . $GLOBALS['db_datosGenerales'] . '.inter_plan_orden ipo on ipo.plan_orden_id = ioa.plan_orden_id
                        join ' . $GLOBALS['db_datosGenerales'] . '.tr_plan_estudios tpe on tpe.plan_estudio_id = ipo.plan_estudio_id
                        where docente_id = ' . $usuario->id . ' and tpe.plan_estudio_id = ' . $arreglo['plan_estudios_id'] . ' and iaag.estatus=1 and iag.estatus=1 and ioa.estatus=1 and ipo.estatus=1 and tpe.estatus=1'));
                    $arreglo_plan['persona_id'] = $arreglo_plan['docente_id'];
                }
                if (!empty($arreglo_plan['persona_id'])) {

                    $alumno_encuesta = query('select aviso_persona_id from ' . $GLOBALS['db_controlEscolar'] . '.inter_aviso_persona where persona_id =' . $arreglo_plan['persona_id'] . ' and estatus=1 and aviso_id=' . $arreglo['aviso_id']);
                    if (num($alumno_encuesta)) {
                    } else {
                        $json['tipo_plan'] = "plan_estudios_id";
                        $json['encuesta_plan_estudios'] = $arreglo['aviso_id'];
                        if ($arreglo['obligatorio'] == '') {
                            $arreglo['obligatorio'] = 0;
                        }

                        array_push($encuestas_json, array('tipo' => "plan_estudio_id", 'aviso_id' => $arreglo['aviso_id'], 'obligatorio' => $arreglo['obligatorio']));
                    }
                }

            } else if (!empty($arreglo['alumno_id'])) {
                if ($arreglo['rol_id'] == 2 || $arreglo['rol_id'] == "" && $usuario->id_rol == 2) {
                    $alumno_encuesta = query('select aviso_persona_id from ' . $GLOBALS['db_controlEscolar'] . '.inter_aviso_persona where persona_id =' . $arreglo['alumno_id'] . ' and estatus=1 and aviso_id=' . $arreglo['aviso_id']);
                    if (num($alumno_encuesta)) {
                    } else {
                        $json['tipo_plan'] = "alumno_id";
                        $json['encuesta_plan_estudios'] = $arreglo['aviso_id'];
                        if ($arreglo['obligatorio'] == '') {
                            $arreglo['obligatorio'] = 0;
                        }

                        array_push($encuestas_json, array('tipo' => "alumno_id", 'aviso_id' => $arreglo['aviso_id'], 'obligatorio' => $arreglo['obligatorio']));
                    }
            }
            } 
            
            if ($arreglo['rol_id'] == $usuario->id_rol) {
                $alumno_encuesta = query('select aviso_persona_id from ' . $GLOBALS['db_controlEscolar'] . '.inter_aviso_persona where persona_id =' . $usuario->id . ' and estatus=1 and aviso_id=' . $arreglo['aviso_id']);
                if (!num($alumno_encuesta)) {
                    array_push($encuestas_json, array('tipo' => "todo", 'aviso_id' => $arreglo['aviso_id'], 'obligatorio' => $arreglo['obligatorio']));
                }
            }
        }


        if (!empty($encuestas_json)) {
            $json = array("status" => 1, "msg" => "Tienes avisos por responder", "avisos" => $encuestas_json);
        } else {
            $json = array("status" => 0, "msg" => "No se encontraron aviso");
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
