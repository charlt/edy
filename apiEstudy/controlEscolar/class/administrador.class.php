<?php
include '../../admin/class/persona.class.php';


class Administrador extends Persona
{


    public static function crea_administrador($nombre, $primer_apellido, $segundo_apellido, $curp, $email, $celular, $rfc, $fecha_nacimiento, $usuario, $password, $color, $clave_administrador, $situacion_administrador_id,$vista,$edicion,$id_area)
    {

        $existe_usuario = self::valida_usuario($curp, $email,null);

        if (!$existe_usuario) {
            $inserta_persona = self::inserta_persona($nombre, $primer_apellido, $segundo_apellido, $curp, $rfc, $fecha_nacimiento, $email, $celular, 1);

            if ($inserta_persona) {

                $res_usuario_rol = self::crear_usuario_rol($usuario, $password, $color, $inserta_persona, 1);

                if ($res_usuario_rol['status']) {
                    if($clave_administrador==""){
                        $clave_administrador = '1'.$inserta_persona;
                      }
                    $inserta_administrador = inserta(
                        $GLOBALS["db_controlEscolar"] . '.tr_administrador',
                        'administrador_id,situacion_administrador_id,clave_administrador,vista,edicion,area_id, fecha_creacion,
                            usuario_crea, estatus',
                        '"' . $inserta_persona . '",' . $situacion_administrador_id . ',"' . $clave_administrador . '",'.$vista.','.$edicion.','.$id_area.',now(),current_user(),1'
                    );

                    if ($inserta_administrador) {

                        return array("status" => 1, "msg" => "Se logró crear el administrador", "id_persona" => $inserta_persona,"email"=>$email, "usuario"=> $usuario, "password"=> $res_usuario_rol['password']);
                        
                    } else {
                        return array("status" => 0, "msg" => "No se logró insertar el administrador");
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


    public static function eliminaAdministrador($id_administrador)
    {

        $elimina = query('update tr_administrador ta 
        join ' . $GLOBALS['db_datosGenerales'] . '.inter_persona_usuario_rol ipur on ta.administrador_id = ipur.persona_id 
         set ta.estatus = 0, ipur.estatus = 0  where administrador_id = ' . $id_administrador);
        return $elimina;
    }
}
