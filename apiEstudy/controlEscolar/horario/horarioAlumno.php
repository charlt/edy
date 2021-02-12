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


        $query = query('select iag.asignatura_grupo_id, p.nombre,p.primer_apellido,p.segundo_apellido,cc.asignatura,tg.nombre_grupo
    from inter_alumno_grupo ialg
    join inter_asignatura_grupo iag on ialg.grupo_id = iag.grupo_id
    join '.$GLOBALS['db_datosGenerales'].'.inter_orden_asignatura ioa on ioa.orden_asignatura_id = iag.orden_asignatura_id
    join '.$GLOBALS['db_datosGenerales'].'.cat_asignaturas cc on cc.asignatura_id = ioa.asignatura_id
    join inter_docente_asignatura_grupo idag on idag.asignatura_grupo_id = iag.asignatura_grupo_id
    join tr_docente td on td.docente_id = idag.docente_id
    join '.$GLOBALS['db_datosGenerales'].'.personas p on p.persona_id = td.docente_id
    join tr_grupo tg on tg.grupo_id = iag.grupo_id
    where alumno_id = '.$usuario->id.' and ialg.estatus=1 and iag.estatus=1 and ioa.estatus= 1 and cc.estatus=1');
        $json = array();
        $datos_horario=array();
        while ($arreglo = arreglo($query)) {
            $query_horario = query('select dia,hora_inicio, hora_fin from tr_horario where estatus =1 and asignatura_grupo_id =' . $arreglo['asignatura_grupo_id']);
            $horario = array();
            while($arreglo_horario = arreglo($query_horario)){
                array_push($horario, $arreglo_horario);    
            }
            $arreglo['horario'] = $horario;
            array_push($json,$arreglo);

        }

        if (num($query)) {
            $json = array("status" => 1, "msg" => "Se encontró horario", "horario" => $json);
        } else {
            $json = array("status" => 0, "msg" => "No se encontró información historial");
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
