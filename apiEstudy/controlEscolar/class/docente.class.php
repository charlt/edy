<?php
include '../../admin/class/persona.class.php';



class Docente extends Persona
{

    public static $query;

    public static function busquedaDocente($busqueda, $tipo_busqueda, $min, $max)
    {

        $query = self::busqueda($busqueda, $tipo_busqueda, 3, $min, $max);
        $json = array();
        while ($arreglo = arreglo($query)) {

            $query_docente = query('select clave_profesor, td.situacion_docente_id,csd.situacion_docente_descripcion,edicion_contenido from tr_docente td
            join cat_situacion_docente csd on csd.situacion_docente_id = td.situacion_docente_id
            where docente_id =' . $arreglo['persona_id'] . ' and td.estatus=1');

            if(num($query_docente)){
                $arreglo_docente = arreglo($query_docente);
                $arreglo['carga_contenido'] = $arreglo_docente['edicion_contenido'];
                $arreglo['clave_profesor'] = $arreglo_docente['clave_profesor'];
                $arreglo['situacion_docente_id'] = $arreglo_docente['situacion_docente_id'];
                $arreglo['situacion_docente'] = $arreglo_docente['situacion_docente_descripcion'];
            }else{
                $arreglo['carga_contenido'] = null;
                $arreglo['clave_profesor'] = null;
                $arreglo['situacion_docente_id'] = null;
                $arreglo['situacion_docente'] = null;
            }
            



            array_push($json, $arreglo);
        }

        return $json;
    }


    public static function consulta_docente($curp)
    {

        self::$query = query('SELECT td.docente_id, nombre,primer_apellido,segundo_apellido,
        p.sexo_id, sexo_clave, fecha_nacimiento, email,
        rfc, curp, td.cedula_profesional, td.estatus, td.fecha_creacion, td.fecha_actualiza      
        FROM tr_docente td
        join ' . $GLOBALS["db_datosGenerales"] . '.personas p on persona_id = docente_id
        join ' . $GLOBALS["db_datosGenerales"] . '.cat_sexo on cat_sexo.sexo_id = p.sexo_id 
        WHERE curp = "' . $curp . '"');


        $json = array();
        while ($arreglo = arreglo(self::$query)) {
            array_push($json, $arreglo);
        }

        return $json;
    }

    public static function num()
    {

        return num(self::$query);
    }


    public static function consulta_cat_alumno($limite)
    {

        self::$query = query('SELECT * FROM tr_alumno
        join ' . $GLOBALS["db_datosGenerales"] . '.personas on alumno_id = persona_id 
        where tr_alumno.estatus = 1 LIMIT ' . $limite);


        $json = array();
        while ($arreglo = arreglo(self::$query)) {
            array_push($json, $arreglo);
        }

        return $json;
    }

    public static function name()
    {

        return num(self::$query);
    }


    public static function crea_docente($nombre, $primer_apellido, $segundo_apellido, $curp, $email, $celular, $rfc, $fecha_nacimiento,  $usuario, $password, $color, $clave_docente, $situacion_docente_id)
    {

        $existe_usuario = self::valida_usuario($curp, $email,null);

        if (!$existe_usuario) {
            $inserta_persona = self::inserta_persona($nombre, $primer_apellido, $segundo_apellido, $curp, $rfc, $fecha_nacimiento, $email, $celular, 1);

            if ($inserta_persona) {

                $res_usuario_rol = self::crear_usuario_rol($usuario, $password, $color, $inserta_persona, 3);

                if ($res_usuario_rol['status']) {
                    if ($clave_docente == "") {
                        $clave_docente =  $inserta_persona;
                    }

                    $inserta_docente = inserta(
                        $GLOBALS["db_controlEscolar"] . '.tr_docente',
                        'docente_id,situacion_docente_id, clave_profesor, fecha_creacion,
        usuario_crea, estatus',
                        '"' . $inserta_persona . '",' . $situacion_docente_id . ',"' . $clave_docente . '",now(),current_user(),1'
                    );

                    if ($inserta_docente) {
                        
                        return array("status" => 1, "msg" => "Se logró crear el docente",  "id_persona" => $inserta_persona,"email"=>$email, "usuario"=> $usuario, "password"=> $res_usuario_rol['password']);
                    } else {
                        return array("status" => 0, "msg" => "No se logró insertar el docente");
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

    public static function consultaAsignaturas($usuario, $docente_id)
    {
        $query = query('SELECT iag.asignatura_grupo_id,asignatura_padre_id,grupo, asignatura_padre_seriacion, ca.asignatura_id, asignatura_clave, asignatura, 
        tipo_asignatura_id, tg.grupo_id, tg.nombre_grupo, calif_min, calif_max, creditos, cc.ciclo_estatus_id, ciclo_desc, 
        ciclo_estatus_desc, coj.orden_jerarquico_descripcion, UNIX_TIMESTAMP(iag.fecha_inicio) as fecha_inicio, UNIX_TIMESTAMP(iag.fecha_fin) as fecha_fin,csag.situacion_asignatura_grupo_id, situacion_asignatura_grupo_descripcion
        FROM ' . $GLOBALS["db_datosGenerales"] . '.cat_asignaturas ca
        join ' . $GLOBALS["db_datosGenerales"] . '.inter_orden_asignatura ioa on ioa.asignatura_id = ca.asignatura_id
        join ' . $GLOBALS["db_datosGenerales"] . '.inter_plan_orden ipo on ipo.plan_orden_id = ioa.plan_orden_id
        join inter_asignatura_grupo iag on iag.orden_asignatura_id = ioa.orden_asignatura_id
        join tr_grupo tg on tg.grupo_id = iag.grupo_id
        join cat_ciclo cc on cc.ciclo_id = tg.ciclo_id
        join cat_ciclo_estatus cce on cce.ciclo_estatus_id = cc.ciclo_estatus_id
        join ' . $GLOBALS["db_datosGenerales"] . '.cat_orden_jerarquico coj on coj.orden_jerarquico_id = ipo.orden_jerarquico_id
        join inter_docente_asignatura_grupo idag on idag.asignatura_grupo_id = iag.asignatura_grupo_id
        join cat_situacion_asignatura_grupo csag on csag.situacion_asignatura_grupo_id = iag.situacion_asignatura_grupo_id
        join tr_docente td on td.docente_id = idag.docente_id
        where td.docente_id =' . $docente_id . ' and td.estatus=1 and idag.estatus = 1 and iag.estatus = 1 and cc.ciclo_estatus_id = 1');

        return $query;
    }


    public static function actividadesPendientes($id_asignatura_grupo)
    {
        $query_antigua = query('SELECT fecha_actividad,tmfa.actividad_id,tm.materia_id
          from ' . $GLOBALS["db_learning"] . '.tr_materia tm 
          join ' . $GLOBALS["db_learning"] . '.tr_materia_fecha_actividad tmfa on tmfa.materia_id = tm.materia_id 
          join ' . $GLOBALS["db_learning"] . '.tr_actividad ta on ta.actividad_id = tmfa.actividad_id
          where asignatura_grupo_id=' . $id_asignatura_grupo . ' and estatus_actividad_id =3 and ta.estatus=1 and tmfa.estatus = 1 and tm.estatus = 1 order by fecha_actividad');

        return $query_antigua;
    }


    public static function Retroalimentaciones($id_asignatura_grupo)
    {
        $query_retroalimentacion = query('select tr.retroalimentacion_id, tr.persona_id
        from ' . $GLOBALS["db_learning"] . '.tr_materia tm 
        join ' . $GLOBALS["db_learning"] . '.tr_materia_fecha_actividad tmfa on tmfa.materia_id = tm.materia_id
        join ' . $GLOBALS["db_learning"] . '.tr_retroalimentacion tr on tr.materia_fecha_actividad_id = tmfa.materia_fecha_actividad_id
        where tm.asignatura_grupo_id=' . $id_asignatura_grupo . ' and tm.estatus = 1  and (origen = 2) and (visto = 0 or visto is null) and tmfa.estatus=1');

        return $query_retroalimentacion;
    }


    public static function mensajes($id_asignatura_grupo)
    {
        $query_retroalimentacion = query('SELECT tmm.mensaje_id, tm.alumno_id
        from ' . $GLOBALS["db_learning"] . '.tr_materia tm
        join ' . $GLOBALS["db_learning"] . '.tr_mensaje_materia tmm on tmm.materia_id = tm.materia_id
        where asignatura_grupo_id = ' . $id_asignatura_grupo . ' and tm.estatus = 1 and tmm.estatus=1 and origen=2 and (visto = 0 or visto is null)');

        return $query_retroalimentacion;
    }
}
