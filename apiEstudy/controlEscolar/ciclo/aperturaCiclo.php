<?php
include '../../jwt.php';
include '../../headers.php';
include '../../controlEscolar/class/grupo.class.php';

try {

    db('controlEscolar');

    if ($_SERVER['REQUEST_METHOD'] == "POST") {
        foreach ($_POST as $clave => $valor) {
            ${$clave} = escape_cara($valor);
        }

        $usuario = Auth::GetData(
            $jwt
        );

        $query_alumno = query('SELECT iag.alumno_id,ipo.orden_jerarquico_id, ipo.plan_estudio_id 
                    from tr_grupo tg 
                    join inter_alumno_grupo iag on iag.grupo_id = tg.grupo_id
                    join inter_alumno_plan iap on iap.alumno_id = iag.alumno_id
                    join '.$GLOBALS['db_datosGenerales'].'.inter_plan_orden ipo on ipo.plan_orden_id = iap.plan_orden_id
                    where tg.estatus=1 and iag.estatus=1 and iap.estatus=1 and ipo.estatus =1 and tg.ciclo_id =' . $id_ciclo . ' order by iag.alumno_id');

        $json_alumnos = array();
        while ($arreglo_alumnos = arreglo($query_alumno)) {
            $nuevo_orden = $arreglo_alumnos['orden_jerarquico_id'] + 1;
            $arreglo_orden = arreglo(query('SELECT plan_orden_id, orden_jerarquico_id from '.$GLOBALS['db_datosGenerales'].'.inter_plan_orden where plan_estudio_id =' . $arreglo_alumnos['plan_estudio_id'] . ' and orden_jerarquico_id = ' . $nuevo_orden));
            if (!empty($arreglo_orden)) {
                $edita_alumnos = update('inter_alumno_plan', 'estatus=0', 'alumno_id=' . $arreglo_alumnos['alumno_id']);
                $alumnos['alumno_id'] = $arreglo_alumnos['alumno_id'];
                $alumnos['plan_orden_id'] = $arreglo_orden['plan_orden_id'];
                array_push($json_alumnos, $alumnos);
            } else {
                $edita_alumnos = query('update inter_alumno_plan as iap, tr_alumno as ta set iap.estatus=0, ta.situacion_alumno_id = 4 
                    where iap.alumno_id= ' . $arreglo_alumnos['alumno_id'] . ' and ta.alumno_id=' . $arreglo_alumnos['alumno_id']);
            }
        }


        $alumnos_grado = "INSERT INTO inter_alumno_plan(alumno_id, plan_orden_id, estatus) VALUES";


        foreach ($json_alumnos as $alumnos_tmp) {
            $alumnos_grado .= '(' . $alumnos_tmp['alumno_id'] . ',' . $alumnos_tmp['plan_orden_id']  . ',1),';
        }

        $alumnos_grado = trim($alumnos_grado, ',');
        $inserta = query($alumnos_grado);



        $ciclo_cerrado = arreglo(query('select ciclo_id from cat_ciclo where ciclo_id =' . $id_ciclo . ' and ciclo_estatus_id =2'));
        if (isset($ciclo_cerrado['ciclo_id'])) {
            $inserta_ciclo = inserta_last_id(
                'cat_ciclo',
                'ciclo_desc, ciclo_estatus_id, fecha_inicio, fecha_fin, estatus',
                '"' . $ciclo_desc . '",1,"' . $fecha_inicio . '", "' . $fecha_fin . '",1'
            );
            if ($inserta_ciclo) {
                $grupo = new Grupo();

                $grupos_viejos = query('select grupo_id,grupo, nombre_grupo, descripcion, cupo, plan_orden_id,campus_id,estatus from tr_grupo where ciclo_id=' . $id_ciclo . ' and estatus = 1');
                while ($arreglo_grupos = arreglo($grupos_viejos)) {

                    $nuevo_plan_orden = $arreglo_grupos['plan_orden_id'] + 1;
                    $arreglo_orden = arreglo(query('select plan_orden_id from ' . $GLOBALS['db_datosGenerales'] . '.inter_plan_orden where plan_orden_id=' . $nuevo_plan_orden));

                    if (!empty($arreglo_orden)) {

                        $inserta_grupos = $grupo::inserta_grupo($inserta_ciclo, $arreglo_grupos['grupo'], $arreglo_grupos['nombre_grupo'], 1, $arreglo_orden['plan_orden_id'], $arreglo_grupos['descripcion'], $arreglo_grupos['cupo'], $arreglo_grupos['campus_id'],null);

                        if ($inserta_grupos) {

                            $asignaturas[0] = "";
                            $inserta_asignatura_grupo = $grupo::inserta_asignatura_grupo($arreglo_orden['plan_orden_id'], $inserta_grupos, $asignaturas);
                            if ($inserta_asignatura_grupo) {

                                $alumnos_grupo = query('select alumno_id from inter_alumno_grupo where grupo_id= ' . $arreglo_grupos['grupo_id'] . ' and estatus=1');
                                $json_alumnos_grupos = array();

                                while ($arreglo_alum_gru = arreglo($alumnos_grupo)) {
                                    $consulta_materias_reprobadas = query('select count(historial_id) from tr_historial where alumno_id = ' . $arreglo_alum_gru['alumno_id'] . ' and calificacion <6');
                                    $num_mat_rep = num($consulta_materias_reprobadas);

                                    if ($num_mat_rep <= $materias_aceptables) {
                                        $arreglo_alum_gru['grupo_id'] = $inserta_grupos;
                                        array_push($json_alumnos_grupos, $arreglo_alum_gru);
                                    }
                                }



                                $inter_alumnos_grupo = "INSERT INTO inter_alumno_grupo(alumno_id, grupo_id, estatus) VALUES";


                                foreach ($json_alumnos_grupos as $alumnos_grupos_tmp) {
                                    $inter_alumnos_grupo .= '(' . $alumnos_grupos_tmp['alumno_id'] . ',' . $alumnos_grupos_tmp['grupo_id']  . ',1),';
                                }

                                $inter_alumnos_grupo = trim($inter_alumnos_grupo, ',');
                                $inserta = query($inter_alumnos_grupo);
                            }
                        }
                    }
                }
            }
        }




        if ($query_alumno) {
            $json = array("status" => 1, "msg" => "Se agregaron grados correctamente.");
        } else {
            $json = array("status" => 0, "msg" => "No se agregaron grados.");
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
