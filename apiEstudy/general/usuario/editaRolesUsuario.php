<?php
include '../../jwt.php';
include '../../headers.php';
include '../../admin/class/persona.class.php';

try {

    db('controlEscolar');

    $persona = new Persona();

    if ($_SERVER['REQUEST_METHOD'] == "POST") {
        foreach ($_POST as $_clave => $valor) {
            ${$_clave} = escape_cara($valor);
        }

        $usuario = Auth::GetData(
            $jwt
        );
        //$update_persona = query('UPDATE '.$GLOBALS['db_datosGenerales'].'.inter_persona_usuario_rol set rol_id = ' . $id_rol_new . ' where persona_id = ' . $persona_id . '');

       /* if ($id_rol_old == 1 && $id_rol_new != 1) {
            $update_user = query('UPDATE tr_administrador set estatus =0 where administrador_id =  ' . $persona_id . '');
        } else if ($id_rol_old == 2 && $id_rol_new != 2) {
            $update_user = query('UPDATE tr_alumno set estatus =0 where alumno_id =  ' . $persona_id . '');
        } else if ($id_rol_old == 3  && $id_rol_new != 3) {
            $update_user = query('UPDATE tr_docente set estatus =0 where docente_id =  ' . $persona_id . '');
        } else if ($id_rol_old == 4 && $id_rol_new != 4) {
            $update_user = query('UPDATE '.$GLOBALS['db_seguimiento'].'.tr_aspirante set estatus =0 where aspirante_id =  ' . $persona_id . '');
        }*/

        if ($id_rol_old == 1 && $id_rol_new == 1){
              if ($tipo_consulta == 1){
                $vista = 1;
                $edicion = 0;
            } else if ($tipo_consulta == 2){
                $vista = 1;
                $edicion = 1;
            }
            $update_user = query('UPDATE tr_administrador set edicion =  ' . $edicion . ', vista = ' . $vista . ',area_id = ' . $area_id . '  where administrador_id =  ' . $persona_id . '');
        } else if ($id_rol_old == 2 && $id_rol_new == 2) {
            $update_user = query('UPDATE tr_alumno set clave_alumno ="' . $clave . '" where alumno_id =  ' . $persona_id . '');
        } else if ($id_rol_old == 3  && $id_rol_new == 3) {
            $update_user = query('UPDATE tr_docente set clave_profesor ="' . $clave .'" where docente_id =  ' . $persona_id . '');
        } else if ($id_rol_old == 4 && $id_rol_new == 4) {
            $update_user = query('UPDATE '.$GLOBALS['db_seguimiento'].'.tr_aspirante set estatus =0 where aspirante_id =  ' . $persona_id . '');
        }

       /* if ($id_rol_new == 1 && $id_rol_new != 1) {
            if ($tipo_consulta == 1) {
                $vista = 1;
                $edicion = 0;
            } else if ($tipo_consulta == 2) {
                $vista = 1;
                $edicion = 1;
            }
            $query_inserta = inserta('tr_administrador', 'situacion_administrador_id, clave_administrador, edicion, vista, area_id, estatus', '1, "" ,' . $edicion . ', ' . $vista . ', ' . $area_id . ',1');
        } else if ($id_rol_old == 2 && $id_rol_new != 2) {
            $query_inserta = inserta('tr_alumno', 'situacion_alumno_id, clave_alumno, cedula_profesional,estatus', '1,' . $clave . ', "", 1');
        } else if ($id_rol_old == 3 && $id_rol_new != 3) {
            $query_inserta = inserta('tr_docente', 'situacion_docente_id, clave_profesor, cedula_profesional, edicion_contenido, estatus, terminos', '1,' . $clave . ',"",1,1,1');
        } else if ($id_rol_old == 4 && $id_rol_new != 4) {
            $query_inserta = inserta(''.$GLOBALS['db_seguimiento'].'.tr_aspirante', 'clave_aspirante,estatus', '"",1');
        }*/



        if ($update_user) {
            $json = array("status" => 1, "msg" => "Se actualizó la información correctamente");
        } else {
            $json = array("status" => 0, "msg" => "No se logró actualizar");
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
