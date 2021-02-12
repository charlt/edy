<?php
include '../../admin/class/persona.class.php';


class Alumno extends Persona
{


    public static function alumnos_iniciados()
    {
        $query = query('select ta.alumno_id,p.persona_id, p.curp from ' . $GLOBALS["db_controlEscolar"] . '.tr_alumno ta 
        join ' . $GLOBALS["db_controlEscolar"] . '.inter_alumno_plan iap on iap.alumno_id = ta.alumno_id 
        join ' . $GLOBALS["db_datosGenerales"] . '.personas p on p.persona_id = ta.alumno_id
        where orden_jerarquico_id = 0 and ta.estatus = 1 and iap.estatus = 1');


        return $query;
    }

    public static function crea_alumno($nombre, $primer_apellido, $segundo_apellido, $curp, $email, $celular, $rfc, $fecha_nacimiento, $usuario, $password, $color, $clave_alumno, $cedula_profesional, $situacion_alumno_id)
    {

        $existe_usuario = self::valida_usuario($curp, $email,null);

        if (!$existe_usuario) {
            $inserta_persona = self::inserta_persona($nombre, $primer_apellido, $segundo_apellido, $curp, $rfc, $fecha_nacimiento, $email, $celular, 1);

            if ($inserta_persona) {

                $res_usuario_rol = self::crear_usuario_rol($usuario, $password, $color, $inserta_persona, 2);

                if ($res_usuario_rol['status']) {
                    if ($clave_alumno == "") {
                        $arreglo_matricula = arreglo(query('select id_institucion,ultimo_consecutivo+1 as ultimo_consecutivo from '.$GLOBALS['db_controlEscolar'].'.matricula'));
                        if(isset($arreglo_matricula['ultimo_consecutivo']))
                            $clave_alumno = $arreglo_matricula['ultimo_consecutivo'];
                        else
                            $clave_alumno = "S/M";
                        update($GLOBALS['db_controlEscolar'].'.matricula', 'ultimo_consecutivo=' . $clave_alumno, 'id_institucion=1');

                    }
                    $inserta_alumno = inserta(
                        $GLOBALS["db_controlEscolar"] . '.tr_alumno',
                        'alumno_id,situacion_alumno_id, clave_alumno,cedula_profesional, fecha_creacion,
        usuario_crea, estatus',

                        '"' . $inserta_persona . '",' . $situacion_alumno_id . ',"' . $clave_alumno . '",' . $cedula_profesional . ',now(),current_user(),1'
                    );

                    if ($inserta_alumno) {
                        
                        return array("status" => 1, "msg" => "Se logró crear el alumno",  "id_persona" => $inserta_persona,"email"=>$email, "usuario"=> $usuario, "password"=> $res_usuario_rol['password']);
                    } else {
                        return array("status" => 0, "msg" => "No se logró insertar el alumno");
                    }
                } else {
                    //no se pudo insertar el usuario
                    return $res_usuario_rol;
                }
            } else {
                //no se pudo insertar la persona
                return array("status" => 0, "msg" => "No se pudo insertar la persona");
            }
        } else {
            //usuario ya existe
            if ($existe_usuario == 1)
                $msg = "CURP ya existe";
            if ($existe_usuario == 2)
                $msg = "Correo ya existe";

            return array("status" => 0, "tipo_error" => 1, "msg" => $msg);
        }
    }



    public static function busquedaAlumnos($busqueda, $tipo_busqueda, $min, $max)
    {

        $query = self::busqueda($busqueda, $tipo_busqueda, 2, $min, $max);
        $json_alumnos = array();
        while ($arreglo_alumnos = arreglo($query)) {
            $query_oferta_ecucativa = query('SELECT tpe.carrera_id, carrera,coj.orden_jerarquico_id,orden_jerarquico from inter_alumno_plan iap
            left join ' . $GLOBALS['db_datosGenerales'] . '.inter_plan_orden ipo on ipo.plan_orden_id = iap.plan_orden_id
            join ' . $GLOBALS['db_datosGenerales'] . '.tr_plan_estudios tpe on tpe.plan_estudio_id = ipo.plan_estudio_id
            join ' . $GLOBALS['db_datosGenerales'] . '.cat_orden_jerarquico coj on coj.orden_jerarquico_id = ipo.orden_jerarquico_id
            join ' . $GLOBALS['db_datosGenerales'] . '.tr_carrera tc on tc.carrera_id = tpe.carrera_id where alumno_id=' . $arreglo_alumnos['persona_id']);
            $arreglo_oferta = arreglo($query_oferta_ecucativa);

            $query_matricula = query('select clave_alumno, tr.situacion_alumno_id,situacion_alumno_descripcion from tr_alumno tr 
            join cat_situacion_alumno csa on csa.situacion_alumno_id = tr.situacion_alumno_id
            where alumno_id =' . $arreglo_alumnos['persona_id'] . ' and tr.estatus=1 ');

            if (num($query_oferta_ecucativa)) {
                $arreglo_alumnos['orden_jerarquico_id'] = $arreglo_oferta['orden_jerarquico_id'];
                $arreglo_alumnos['orden_jerarquico'] = $arreglo_oferta['orden_jerarquico'];
                $arreglo_alumnos['carrera_id'] = $arreglo_oferta['carrera_id'];
                $arreglo_alumnos['carrera'] = $arreglo_oferta['carrera'];
            } else {
                $arreglo_alumnos['orden_jerarquico_id'] = null;
                $arreglo_alumnos['orden_jerarquico'] = null;
                $arreglo_alumnos['carrera_id'] = null;
                $arreglo_alumnos['carrera'] = null;
            }

            if(num($query_matricula)){
                $arreglo_matricula = arreglo($query_matricula);
                $arreglo_alumnos['matricula'] = $arreglo_matricula['clave_alumno'];
                $arreglo_alumnos['situacion_alumno_id'] = $arreglo_matricula['situacion_alumno_id'];
                $arreglo_alumnos['situacion_alumno'] = $arreglo_matricula['situacion_alumno_descripcion'];
            }else{
                $arreglo_alumnos['matricula'] = null;
                $arreglo_alumnos['situacion_alumno_id'] = null;
                $arreglo_alumnos['situacion_alumno'] = null;
            }

            

            array_push($json_alumnos, $arreglo_alumnos);
        }

        return $json_alumnos;
    }


    public static function eliminaAlumno($id_alumno)
    {

        $elimina = query('update tr_alumno ta 
        join ' . $GLOBALS['db_datosGenerales'] . '.inter_persona_usuario_rol ipur on ta.alumno_id = ipur.persona_id 
         set ta.estatus = 0, ipur.estatus = 0  where alumno_id = ' . $id_alumno);

        if ($elimina) {
            $elimina_materia = update($GLOBALS['db_learning'] . '.tr_materia', 'estatus=0', 'alumno_id = ' . $id_alumno);

            if ($elimina_materia) {
                $inserta_accion = inserta($GLOBALS['db_datosGenerales'] . '.tr_bitacora_accion', 'accion_id, usuario_id', '4,' . $id_alumno . '');
            }
        }

        return $inserta_accion;
    }
}
