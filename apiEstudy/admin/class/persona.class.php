<?php
include '../../extras/encriptacion/class/encriptacion.class.php';

class Persona {

    public static function consulta_persona($id) { 
        
            $query = query('SELECT p.persona_id, p.nombre, p.primer_apellido, p.segundo_apellido, p.curp, p.rfc, p.fecha_nacimiento, p.email, p.sexo_id, p.otros_datos_id,celular, p.fecha_creacion, p.estatus
             from '.$GLOBALS['db_datosGenerales'].'.personas p
            WHERE p.persona_id = '.$id.' and p.estatus=1'); 

            if(num($query))
            $arreglo = arreglo($query);
        else
            $arreglo = null;
          
        return $arreglo;
    }
    
    public static function consulta($id, $id_rol) { 

        if($id_rol == 1){ //admin
            $query = query('SELECT p.persona_id, p.nombre, p.primer_apellido, p.segundo_apellido, p.curp, p.rfc, p.fecha_nacimiento, p.email, p.sexo_id, p.otros_datos_id,celular, p.fecha_creacion, p.estatus, u.url_perfil, ta.clave_administrador from '.$GLOBALS['db_datosGenerales'].'.personas p
            join '.$GLOBALS['db_datosGenerales'].'.inter_persona_usuario_rol ipur on ipur.persona_id = p.persona_id 
            join '.$GLOBALS['db_datosGenerales'].'.usuarios u on ipur.usuario_id = u.usuario_id
            join '.$GLOBALS['db_controlEscolar'].'.tr_administrador ta on ta.administrador_id = ipur.persona_id 
            WHERE p.persona_id = '.$id.' and p.estatus=1');              
        }elseif ($id_rol == 2) { //alumno
            $query = query('SELECT coj.orden_jerarquico_descripcion as orden_jerarquico, tc.carrera, p.persona_id, p.nombre, p.primer_apellido, p.segundo_apellido, p.curp, p.rfc, p.fecha_nacimiento, p.email, p.sexo_id, p.otros_datos_id,celular, p.fecha_creacion, p.estatus, u.url_perfil, ta.clave_alumno, ipur.usuario_id from '.$GLOBALS['db_datosGenerales'].'.personas p
            join '.$GLOBALS['db_datosGenerales'].'.inter_persona_usuario_rol ipur on ipur.persona_id = p.persona_id 
            join '.$GLOBALS['db_datosGenerales'].'.usuarios u on ipur.usuario_id = u.usuario_id
            join '.$GLOBALS['db_controlEscolar'].'.tr_alumno ta on ta.alumno_id = ipur.persona_id 
            left join '.$GLOBALS['db_controlEscolar'].'.inter_alumno_plan iap on iap.alumno_id = ta.alumno_id 
            left join '.$GLOBALS['db_datosGenerales'].'.inter_plan_orden ipo on ipo.plan_orden_id = iap.plan_orden_id 
            left join '.$GLOBALS['db_datosGenerales'].'.tr_plan_estudios tpe on tpe.plan_estudio_id = ipo.plan_estudio_id 
            left join '.$GLOBALS['db_datosGenerales'].'.tr_carrera tc on tc.carrera_id = tpe.carrera_id 
            left join '.$GLOBALS['db_datosGenerales'].'.cat_orden_jerarquico coj on coj.orden_jerarquico_id = ipo.orden_jerarquico_id
            WHERE p.persona_id = '.$id.' and p.estatus=1');  
        }elseif ($id_rol == 3) { // docente
            $query = query('SELECT csd.situacion_docente_descripcion as situacion_docente, td.edicion_contenido as carga_contenido, p.persona_id, p.nombre, p.primer_apellido, p.segundo_apellido, p.curp, p.rfc, p.fecha_nacimiento, p.email, p.sexo_id, p.otros_datos_id,celular, p.fecha_creacion, p.estatus, u.url_perfil, td.clave_profesor from '.$GLOBALS['db_datosGenerales'].'.personas p
            join '.$GLOBALS['db_datosGenerales'].'.inter_persona_usuario_rol ipur on ipur.persona_id = p.persona_id 
            join '.$GLOBALS['db_datosGenerales'].'.usuarios u on ipur.usuario_id = u.usuario_id
            join '.$GLOBALS['db_controlEscolar'].'.tr_docente td on td.docente_id = ipur.persona_id
            join '.$GLOBALS['db_controlEscolar'].'.cat_situacion_docente csd on csd.situacion_docente_id = td.situacion_docente_id

            WHERE p.persona_id = '.$id.' and p.estatus=1'); 
        }else{
            $query = query('SELECT p.persona_id, nombre, primer_apellido, segundo_apellido, curp, rfc, fecha_nacimiento,
            email, sexo_id, otros_datos_id,celular, p.fecha_creacion, p.estatus FROM   '.$GLOBALS["db_datosGenerales"].'.personas p
            WHERE persona_id = '.$id.' and estatus=1');
        }


        if(num($query))
            $arreglo = arreglo($query);
        else
            $arreglo = null;
          
        return $arreglo;
        
    } 

    public static function busqueda($cadena,$tipo_busqueda,$id_rol,$min,$max) { 
        $cadena = escape_cara($cadena);
        $consulta_personas = "SELECT distinct p.persona_id,usuario_id, nombre, primer_apellido, segundo_apellido, curp, rfc, fecha_nacimiento,
            email, sexo_id, otros_datos_id, p.fecha_creacion, p.estatus FROM  ".$GLOBALS["db_datosGenerales"].".personas p
            JOIN ".$GLOBALS["db_datosGenerales"].".inter_persona_usuario_rol upu on upu.persona_id =  p.persona_id ";
        

        switch($tipo_busqueda){
            case 1: //coincidencia nombre
                $consulta_personas .= 'where ';
                if($cadena != null){
                    
                    $arreglo_cadena = explode(' ', $cadena);
                    for ($i = 0; $i < sizeof($arreglo_cadena); $i++) {
                        if ($i != 0)
                            $consulta_personas .= ' and ';
                        $consulta_personas .= '  (nombre like "%' . $arreglo_cadena[$i] . '%" or primer_apellido like "%' 
                        . $arreglo_cadena[$i] . '%" or segundo_apellido like "%' . $arreglo_cadena[$i]. '%")  ';
                    }
                }else{
                    $consulta_personas .= ' 1 ';    
                }
                

                $consulta_personas .= '';
            break;
            case 2: //coincidencia CURP
                $consulta_personas .= 'WHERE curp like "%'.$cadena.'%" ';
            break;

            case 3: //coincidencia Email
                $consulta_personas .= 'WHERE  email like "%'.$cadena.'%"  ';
            break;

            case 4: //coincidencia matricula
                if($id_rol == 2){
                    $rol_persona = "alumno";
                    $clave_persona = "clave_alumno";
                }elseif($id_rol == 3){
                    $rol_persona="docente";
                    $clave_persona="clave_profesor";
                }
                $consulta_personas .= 'join '.$GLOBALS['db_controlEscolar'].'.tr_'.$rol_persona.' ta on ta.'.$rol_persona.'_id = upu.persona_id where '.$clave_persona.' like "%'.$cadena.'%" and p.estatus = (1) and upu.estatus = 1 and ta.estatus=1';
            break;
        }

        if($id_rol == 0){
            $consulta_personas .= ' ';
        }else{
            $consulta_personas .= ' and rol_id = '.$id_rol.' ';
        }
        
        $consulta_personas .= 'and p.estatus = (1) and upu.estatus = 1 ';

        if($id_rol == 4){
            $consulta_personas .= 'order by p.fecha_creacion desc ';
        }else{
            $consulta_personas .= 'order by  primer_apellido, segundo_apellido, nombre, persona_id asc ';
        }
        
        $consulta_personas .= 'limit '.$min.','.$max;
        $query_personas = query($consulta_personas);

        return $query_personas;
           
    } 

    public static function inserta_persona($nombre,$primer_apellido,$segundo_apellido,$curp,$rfc,$fecha_nacimiento,$email,$celular,$id_sexo){
        
        $rfc == null ? $rfc = 'null' : $rfc = '"'.$rfc.'"';
        $curp == null ? $curp = 'null' : $curp = '"'.$curp.'"';
        $fecha_nacimiento == null ? $fecha_nacimiento = 'null' : $fecha_nacimiento = '"'.$fecha_nacimiento.'"';
        $email == null ? $email = 'null' : $email = '"'.$email.'"';
        $celular == null ? $celular = 'null' : $celular = '"'.$celular.'"';

        $inserta_persona = inserta_last_id('personas', 'nombre, primer_apellido, segundo_apellido, curp, rfc, fecha_nacimiento,
        email,celular, sexo_id, fecha_creacion, usuario_crea, estatus',
        '"'.$nombre.'", "'.$primer_apellido.'", "'.$segundo_apellido.'", '.$curp.', '.$rfc.', '.$fecha_nacimiento.',
        '.$email.','.$celular.', '.$id_sexo.', now(), current_user(),1');

        return $inserta_persona;

    }

    public static function update_persona($nombre,$primer_apellido,$segundo_apellido,$curp,$rfc,$fecha_nacimiento,$email,$celular,$id_sexo,$id_persona){
        $existe_usuario = self::valida_usuario($curp, $email,$id_persona);

        if (!$existe_usuario) {

            if ($fecha_nacimiento == '' || $fecha_nacimiento == 'null'){
                $update_persona = update('personas',
                'nombre = "'.$nombre.'",
                primer_apellido = "'.$primer_apellido.'",
                segundo_apellido = "'.$segundo_apellido.'", 
                curp = "'.$curp.'", 
                rfc = "'.$rfc.'", 
                email = "'.$email.'", 
                celular = "'.$celular.'", 
                sexo_id = '.$id_sexo.', 
                fecha_actualiza = now(), 
                usuario_actualiza = current_user()',
                'persona_id = '.$id_persona);
    
                return array("status" => 1, "msg" => "información actualizada exitosamente");
            }else{
                $update_persona = update('personas',
                'nombre = "'.$nombre.'",
                primer_apellido = "'.$primer_apellido.'",
                segundo_apellido = "'.$segundo_apellido.'", 
                curp = "'.$curp.'", 
                rfc = "'.$rfc.'", 
                fecha_nacimiento = "'.$fecha_nacimiento.'",
                email = "'.$email.'", 
                celular = "'.$celular.'", 
                sexo_id = '.$id_sexo.', 
                fecha_actualiza = now(), 
                usuario_actualiza = current_user()',
                'persona_id = '.$id_persona);
    
                return array("status" => 1, "msg" => "información actualizada exitosamente");
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

    public static function delete_persona($id_persona){
        $elimina = query('update personas 
        set estatus = 0
        where persona_id = '.$id_persona);

        return $elimina;
    }
    
    public static function valida_usuario($curp,$email,$id_persona){
        $q_curp  = $curp != '' ? 'curp = "'.$curp.'"' : '0';
        $q_email  = $email != '' ? 'email = "'.$email.'"' : '0';
        $q_persona = $id_persona != null ? ' and persona_id != '.$id_persona : '';
        $consulta_curp_email = query('SELECT curp, email from personas where ('.$q_curp.'  or '.$q_email.') '.$q_persona.' and estatus = 1');    

        if(num($consulta_curp_email)){ //si lo encontró
            $arreglo_curp_email = arreglo($consulta_curp_email);

            if($arreglo_curp_email['curp']==$curp && $curp != null){
                $estatus=1; //CURP
            }else if($arreglo_curp_email['email']==$email && $email != null){
                $estatus=2; //EMAIL
            }else{
                $estatus = 0;
            }

        }else{
             $estatus = 0;
        }

        if($GLOBALS['produccion']==0){
            $estatus = 0;
        }
        
        return $estatus;
    }

    public static function crear_usuario_rol($usuario,$password,$color,$id_persona,$id_rol){
        
        $encriptada =new Encriptacion();

        if($password == ""){
            $arreglo_rol = arreglo(query('select rol from cat_rol where rol_id ='.$id_rol));
            $password = $arreglo_rol['rol'].$id_persona;
        }

        $password_encriptado=$encriptada::hash($password);

        $inserta_usuario=inserta_last_id('usuarios',' usuario, password, fecha_creacion, color, estatus','"'.$usuario.'", "'.$password_encriptado.'", now(),"'.$color.'", 1');
        if($inserta_usuario){                  
            $inserta_usuario_rol =inserta('inter_persona_usuario_rol','persona_id, usuario_id, rol_id, fecha_creacion, usuario_crea, estatus',''.$id_persona.','.$inserta_usuario.','.$id_rol.', now(),current_user(), 1');
            if($inserta_usuario_rol){
                return array("status" => 1, "msg"=>"usuario vinculado e insertado exitosamente", "id_usuario"=>$inserta_usuario,"id_persona"=>$id_persona,"password"=>$password);        
            }else{
                return array("status" => 0, "tipo_error"=> 4, "msg"=>"No se logró vincular el usuario con la persona");                
            }
        }else{
            //no se pudo insertar el usuario
            return array("status" => 0, "tipo_error"=> 3, "msg"=>"No se pudo insertar el usuario");        
        }
    }


    



      
} 
