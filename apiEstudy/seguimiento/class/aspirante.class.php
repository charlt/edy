<?php

use function GuzzleHttp\Psr7\str;

include '../../admin/class/persona.class.php';



class Aspirante extends Persona
{

    public static function consulta_aspirante($id)
    {

        $query = query('SELECT clave_aspirante,paso,carrera_id,aceptacion_terminos,info_personal_completa,cleaver_completo  FROM ' . $GLOBALS["db_seguimiento"] . '.tr_aspirante
        WHERE aspirante_id = ' . $id . ' and estatus=1');

        if (num($query))
            $arreglo = arreglo($query);
        else
            $arreglo = null;

        return $arreglo;
    }

    public static function consulta_aspirantes_aptos()
    {
        $query = query('SELECT persona_id,usuario_id, paso, carrera_id
        FROM tr_aspirante ta
        join ' . $GLOBALS['db_datosGenerales'] . '.personas p on p.persona_id = ta.aspirante_id
        join ' . $GLOBALS['db_datosGenerales'] . '.usuarios u on u.usuario_id = p.persona_id
        where ta.estatus= 1 and paso = 4');

        $aspirante = array();
        while ($arreglo = arreglo($query)) {
            array_push($aspirante, $arreglo);
        }
        return $aspirante;
    }

    public static function crea_aspirante($nombre, $primer_apellido, $segundo_apellido, $curp, $email, $celular, $rfc, $fecha_nacimiento, $usuario, $password, $color, $carrera_id, $clave_aspirante)
    {

        $existe_usuario = self::valida_usuario($curp, $email, null);

        if (!$existe_usuario) {
            $inserta_persona = self::inserta_persona($nombre, $primer_apellido, $segundo_apellido, $curp, $rfc, $fecha_nacimiento, $email, $celular, 1);

            if ($inserta_persona) {

                $res_usuario_rol = self::crear_usuario_rol($usuario, $password, $color, $inserta_persona, 4);

                if ($res_usuario_rol['status']) {
                    if ($clave_aspirante == "") {
                        $clave_aspirante = '4' . $inserta_persona;
                    }

                    $inserta_aspirante = inserta(
                        $GLOBALS["db_seguimiento"] . '.tr_aspirante',
                        'aspirante_id, clave_aspirante,situacion_aspirante_id,validado_administrador, paso, carrera_id, aceptacion_terminos, fecha_creacion, usuario_crea, estatus',
                        '' . $inserta_persona . ', "' . $clave_aspirante . '",1,0,0, ' . $carrera_id . ',0, now(), current_user(), 1'
                    );

                    if ($inserta_aspirante) {

                        return array("status" => 1, "msg" => "se logró crear el aspirante", "id_usuario" => $res_usuario_rol['id_usuario'],  "id_persona" => $inserta_persona, "email" => $email, "usuario" => $usuario, "password" => $res_usuario_rol['password']);
                    } else {
                        return array("status" => 0, "msg" => "No se pudo insertar el aspirante");
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

    public static function busqueda_aspirante($busqueda, $min, $max, $tipo, $carrera_id, $fecha_inicio, $fecha_fin)
    {

        $arreglo_personas_acept = array();
        if ($tipo == 1) { // todos
            $query = self::busqueda($busqueda, 1, 4, $min, $max);


            
        } else {
            if($tipo == 4){//todos con carrera y con fecha 
                $condicion_validado = 'and p.fecha_creacion between "'.$fecha_inicio.'" and "'.$fecha_fin.'" and carrera_id = '.$carrera_id;
            }else if($tipo == 5){//todos con carrera y sin fecha 
                $condicion_validado = 'and carrera_id = '.$carrera_id;
            }else if($tipo == 6){//todos sin carrera y con fecha 
                $condicion_validado = 'and p.fecha_creacion between "'.$fecha_inicio.'" and "'.$fecha_fin.'"';
            }

            
            else if($tipo == 2){//validado sin carrera y sin fecha 
                $condicion_validado = 'and ta.validado_administrador = 1';
            }else if($tipo == 7){//validado con carrera y con fecha 
                $condicion_validado = 'and ta.validado_administrador = 1 and p.fecha_creacion between "'.$fecha_inicio.'" and "'.$fecha_fin.'" and carrera_id = '.$carrera_id;
            }else if($tipo == 8){//validado con carrera y sin fecha 
                $condicion_validado = 'and ta.validado_administrador = 1 and carrera_id = '.$carrera_id;
            }else if($tipo == 9){//validado sin carrera y con fecha 
                $condicion_validado = 'and ta.validado_administrador = 1 and p.fecha_creacion between "'.$fecha_inicio.'" and "'.$fecha_fin.'"';
            }
            

            else if($tipo == 3){//sin validar sin carrera y sin fecha 
                $condicion_validado = 'and ta.validado_administrador = 0';
            }else if($tipo == 10){//sin validar con carrera y con fecha 
                $condicion_validado = 'and ta.validado_administrador = 0 and p.fecha_creacion between "'.$fecha_inicio.'" and "'.$fecha_fin.'" and carrera_id = '.$carrera_id;
            }else if($tipo == 11){//sin validar con carrera y sin fecha 
                $condicion_validado = 'and ta.validado_administrador = 0 and carrera_id = '.$carrera_id;
            }else if($tipo == 12){//sin validar sin carrera y con fecha 
                $condicion_validado = 'and ta.validado_administrador = 0 and p.fecha_creacion between "'.$fecha_inicio.'" and "'.$fecha_fin.'"';
            }

            // if ($tipo == 2) { // validado sin carrera
            //     $condicion_validado = 'and ta.validado_administrador = 1';

            // } elseif ($tipo == 3) { // sin validar sin carrera
            //     $condicion_validado = 'and ta.validado_administrador = 0';

            // }elseif ($tipo == 4) { // validados con carrera
            //     $condicion_validado = 'and ta.validado_administrador = 1';

            // }elseif ($tipo == 5) { // sin validar con carrera
            //     $condicion_validado = 'and ta.validado_administrador = 0';
            //     $condicion_validado = 'and ta.validado_administrador = 0';

            // }elseif ($tipo == 6) { // todos carrera
            //     $condicion_validado = '';
            // }

            // if(isset($carrera_id) && ($tipo == 4 || $tipo == 5 || $tipo == 6)){
            //     $condicion_validado .= ' and carrera_id = '.$carrera_id;

            // }

            $condicion_validado .= " limit " . $min . "," . $max;

            $query = query("SELECT distinct p.persona_id,usuario_id, nombre, primer_apellido, segundo_apellido, curp, rfc, fecha_nacimiento,
            email, sexo_id, otros_datos_id, p.fecha_creacion, p.estatus 
            FROM  " . $GLOBALS["db_datosGenerales"] . ".personas p
            JOIN " . $GLOBALS["db_datosGenerales"] . ".inter_persona_usuario_rol upu on upu.persona_id =  p.persona_id
            JOIN " . $GLOBALS["db_seguimiento"] . ".tr_aspirante ta on ta.aspirante_id = p.persona_id
            where ta.estatus = 1 and p.estatus =1  and upu.estatus = 1 " . $condicion_validado);
        }



        $json_aspirante = array();

        if (num($query)) {
            while ($arreglo_personas = arreglo($query)) {


                $query_formulario = query('SELECT count(tf.formulario_id) as total from ' . $GLOBALS["db_seguimiento"] . '.tr_formulario tf 
                join ' . $GLOBALS["db_seguimiento"] . '.inter_formulario_carrera ifc on ifc.formulario_id = tf.formulario_id
                left join ' . $GLOBALS["db_seguimiento"] . '.tr_aspirante ta on ta.carrera_id = ifc.carrera_id
                where ta.aspirante_id = ' . $arreglo_personas['persona_id']);

                $arreglo_formulario = arreglo($query_formulario);
                if ($arreglo_formulario['total'] == 0) {
                    $num_formulario = 0;
                } else {
                    $num_formulario = 100 / $arreglo_formulario['total'];
                }

                $query_documento = query('SELECT cd.documento_id from ' . $GLOBALS['db_seguimiento'] . '.cat_documento cd
            join ' . $GLOBALS['db_seguimiento'] . '.inter_documento_carrera idc on cd.documento_id = idc.documento_id
            join ' . $GLOBALS['db_seguimiento'] . '.tr_aspirante ta on ta.carrera_id = idc.carrera_id
            where cd.estatus = 1 and ta.estatus = 1 and ta.aspirante_id =' . $arreglo_personas['persona_id']);
                if (num($query_documento) == 0) {
                    $num_documento = 0;
                } else {
                    $num_documento = 100 / num($query_documento);
                }

                $query_aspirante = query('SELECT ta.carrera_id,tr.carrera,aspirante_id,paso,cleaver_completo,aceptacion_terminos,info_personal_completa,
                    cleaver_completo, validado_administrador, ta.situacion_aspirante_id, csa.situacion_aspirante_descripcion FROM ' . $GLOBALS["db_seguimiento"] . '.tr_aspirante ta
                    JOIN ' . $GLOBALS["db_datosGenerales"] . '.tr_carrera tr ON ta.carrera_id = tr.carrera_id
                    LEFT JOIN ' . $GLOBALS["db_seguimiento"] . '.cat_situacion_aspirante csa on csa.situacion_aspirante_id = ta.situacion_aspirante_id
                    WHERE aspirante_id = ' . $arreglo_personas['persona_id'] . ' and ta.estatus = 1');


                $query_pagos = query('
                select nombre_suscripcion,estatus_solicitud_pago_id from '.$GLOBALS['db_pagos'].'.cat_suscripcion cs 
                join  '.$GLOBALS['db_pagos'].'.inter_alumno_suscripcion ias on ias.suscripcion_id  = cs.suscripcion_id 
                left join  '.$GLOBALS['db_pagos'].'.tr_suscripcion_pago tsp ON tsp.suscripcion_id  = ias.suscripcion_id 
                left join '.$GLOBALS['db_pagos'].'.tr_solicitud_pago tsp2  on tsp2.pago_id  = tsp.pago_id where ias.alumno_id  = '.$arreglo_personas['persona_id']);

                if(num($query_pagos)){
                    $arreglo_pagos = arreglo($query_pagos);
                    $arreglo_personas['plan_pago'] = $arreglo_pagos['nombre_suscripcion'];
                    $arreglo_personas['estatus_pago'] = $arreglo_pagos['estatus_solicitud_pago_id'];
                }else{
                    $arreglo_personas['plan_pago'] = null;
                    $arreglo_pagos['estatus_pago'] = null;
                }

                if (num($query_aspirante)) {

                    $arreglo_aspirante = arreglo($query_aspirante);


                    $query_expediente = query('SELECT expediente_id from ' . $GLOBALS["db_seguimiento"] . '.inter_expediente
                     where estatus=1 and aspirante_id=' . $arreglo_personas['persona_id']);

                    $num_expediente = num($query_expediente);
                    $porcentaje_doc = $num_documento * $num_expediente;


                    $query_formulario_aspirante = query('SELECT formulario_id from ' . $GLOBALS["db_seguimiento"] . '.inter_formulario_aspirante where aspirante_id=' . $arreglo_personas['persona_id']);
                    $num_form = num($query_formulario_aspirante);
                    $porcentaje_form = $num_formulario * $num_form;

                    $arreglo_personas['paso'] = $arreglo_aspirante['paso'];
                    $arreglo_personas['cleaver_completo'] = $arreglo_aspirante['cleaver_completo'];
                    $arreglo_personas['aceptacion_terminos'] = $arreglo_aspirante['aceptacion_terminos'];
                    $arreglo_personas['info_personal_completa'] = $arreglo_aspirante['info_personal_completa'];
                    $arreglo_personas['cleaver_completo'] = $arreglo_aspirante['cleaver_completo'];
                    $arreglo_personas['carrera'] = $arreglo_aspirante['carrera'];
                    $arreglo_personas['carrera_id'] = $arreglo_aspirante['carrera_id'];
                    $arreglo_personas['validado_administrador'] = $arreglo_aspirante['validado_administrador'];
                    $arreglo_personas['situacion_aspirante_id'] = $arreglo_aspirante['situacion_aspirante_id'];
                    $arreglo_personas['situacion_aspirante_descripcion'] = $arreglo_aspirante['situacion_aspirante_descripcion'];
                    $arreglo_personas['porcentaje_formulario'] = round($porcentaje_form);
                    $arreglo_personas['porcentaje_documento'] = round($porcentaje_doc);
                    $arreglo_sesion = arreglo(query('SELECT fecha_actualiza  from ' . $GLOBALS["db_datosGenerales"] . '.usuarios where usuario_id =' . $arreglo_personas['usuario_id']));
                    $arreglo_personas['sesion'] = $arreglo_sesion['fecha_actualiza'];

                    array_push($json_aspirante, $arreglo_personas);


                }
            }
        } else {
            $json_aspirante = null;
        }


        return $json_aspirante;
    }

    public static function  transicion_aspirante($id_aspirante, $matricula_alumno, $id_campus)
    {
        $aspirante = self::consulta_aspirante($id_aspirante);
        $id_carrera = $aspirante['carrera_id'];



        $query_plan = query(' select plan_orden_id 
        from '.$GLOBALS['db_datosGenerales'].'.tr_plan_estudios tpe
        join '.$GLOBALS['db_datosGenerales'].'.inter_plan_orden ipo on ipo.plan_estudio_id = tpe.plan_estudio_id
        join '.$GLOBALS['db_datosGenerales'].'.cat_orden_jerarquico coj on coj.orden_jerarquico_id = ipo.orden_jerarquico_id
        where carrera_id = '.$id_carrera.' and coj.orden_jerarquico=1 and tpe.estatus =1');

        if(num($query_plan)){
            $arreglo_plan = arreglo($query_plan);

            $query = query('select usuario_id from '.$GLOBALS['db_datosGenerales'].'.inter_persona_usuario_rol where persona_id='.$id_aspirante);
            $arreglo = arreglo($query);

            $inserta_persona_usuario_rol = inserta($GLOBALS['db_datosGenerales'].'.inter_persona_usuario_rol','persona_id, usuario_id, rol_id, estatus',
            ''.$id_aspirante.', '.$arreglo['usuario_id'].', 2, 1');    

            //temporalmente aún no se mat´ricula
            $inserta_alumno=inserta($GLOBALS['db_controlEscolar'].'.tr_alumno','alumno_id,situacion_alumno_id, clave_alumno, estatus',
            ''.$id_aspirante.',1,"",1');

            if(empty($id_campus)){
                $id_campus="null";
              }
            $inserta_plan = inserta($GLOBALS['db_controlEscolar'].'.inter_alumno_plan','plan_orden_id,alumno_id,asignado_grupo,estatus, campus_id ',$arreglo_plan['plan_orden_id'].','.$id_aspirante.',0,1, '.$id_campus.'');

            update($GLOBALS["db_datosGenerales"] . '.inter_persona_usuario_rol', 'estatus=0', 'persona_id=' . $id_aspirante . ' and rol_id = 4');
            $elimina = update($GLOBALS['db_seguimiento'].'.tr_aspirante', 'situacion_aspirante_id =2,estatus=0', 'aspirante_id=' . $id_aspirante);

            $Matricula = new Matricula();
            $clave_alumno = $Matricula::actualiza_matricula($id_aspirante,$matricula_alumno);


        }else{
            $inserta_alumno = null;
        }
        
        if ($inserta_alumno) {        
           return array('status' => 1, "msg" => "Aspirante matriculado exitosamente", "matricula" => $clave_alumno);
        } else {
            return array('status' => 0, "msg" => "No se pudo matricular");
        }

    }

    public static function elimina_aspirante($id_aspirante)
    {

        update($GLOBALS["db_datosGenerales"] . '.inter_persona_usuario_rol', 'estatus=0', 'persona_id=' . $id_aspirante . ' and rol_id = 4');
        $elimina = update('tr_aspirante', 'estatus=0', 'aspirante_id=' . $id_aspirante);

        return $elimina;
    }


  
}
