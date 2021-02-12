<?php
include '../../jwt.php';
include '../../headers.php';
include '../class/alumno.class.php';
include '../class/materia.class.php';

try {

    db('controlEscolar');

    $alumno = new Alumno();
    $materia = new Materia();

    if ($_SERVER['REQUEST_METHOD'] == "POST") {
        foreach ($_POST as $clave => $valor) {
            ${$clave} = escape_cara($valor);
        }

        $usuario = Auth::GetData(
            $jwt
        );

        $consulta_aspirante = query('select persona_id from ' . $GLOBALS['db_datosGenerales'] . '.inter_persona_usuario_rol where usuario_id =' . $id_usuario . ' and rol_id = 4');
        if (num($consulta_aspirante)) {
            $consulta_materias = query('select materia_id from '.$GLOBALS['db_learning'].'.tr_materia where alumno_id ='.$id_usuario);
            while($arreglo_materias = arreglo($consulta_materias)){
                $reinicia_materia = $materia::eliminaActividades($arreglo_materias['materia_id']);
            }
            $baja_materia = delete('' . $GLOBALS['db_learning'] . '.tr_materia', 'alumno_id=' . $id_usuario);
            if ($baja_materia) {
                $elimina_alumno_grupo = delete('inter_alumno_grupo', 'alumno_id =' . $id_usuario);
                if ($elimina_alumno_grupo) {
                    $elimina_alumno_plan = delete('inter_alumno_plan', 'alumno_id =' . $id_usuario);
                    if ($elimina_alumno_plan) {
                        $baja_alumno = delete('tr_alumno','alumno_id =' . $id_usuario);
                        if ($baja_alumno) {
                            $elimina_inter_alumno = delete($GLOBALS['db_datosGenerales'] . '.inter_persona_usuario_rol', 'usuario_id =' . $id_usuario . ' and rol_id = 2');
                            $reactiva_rol_aspirante = update($GLOBALS['db_datosGenerales'] . '.inter_persona_usuario_rol', 'estatus=1', '' . $id_usuario . ' and rol_id = 4');
                            if ($elimina_inter_alumno && $reactiva_rol_aspirante) {
                                $activa_aspirante = update($GLOBALS['db_seguimiento'] . '.tr_aspirante', 'estatus=1', 'aspirante_id = ' . $id_usuario);
                            }
                        }
                    }
                }
            }
            if ($activa_aspirante) {
                $json = array("status" => 1, "msg" => "Se creó el rollback correctamente");
            } else {
                $json = array("status" => 0, "msg" => "No se logró el rollback correctamente");
            }
        } else {
            $json = array("status" => 1, "msg" => "Este alumno no se registro como aspirante");
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
