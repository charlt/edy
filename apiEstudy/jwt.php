<?php

require_once 'config/db.php';
require_once 'vendor/autoload.php';

use Firebase\JWT\JWT;

class Auth
{
    private static $secret_key = 'R1ch4rdOnE';
    private static $encrypt = ['HS256'];
    private static $aud = null;

    public static function SignIn($usuario)
    {
        
            if(
                $usuario['persona_id'] == '' ||
                $usuario['usuario_id'] == '' ||
                $usuario['nombre'] == '' ||
                $usuario['primer_apellido'] == '' ||
                $usuario['rol_id'] == '' ||
                $usuario['rol'] == '' ||
                $usuario['usuario'] == '' ||
                $usuario['tiempo_sesion'] == '' 
                )
                throw new Exception("incorrect params.");

            $time = time();

                

        
            $token = array(
                'exp' => $time + (60*60) * $usuario['tiempo_sesion'],
                'aud' => self::Aud(),
                'data' => [ // información del usuario
                    'id' => $usuario['persona_id'],
                    'id_usuario' => $usuario['usuario_id'],
                    'aNombre' => $usuario['nombre'],
                    'aPaterno' => $usuario['primer_apellido'],
                    'aMaterno' => $usuario['segundo_apellido'],
                    'id_rol' => $usuario['rol_id'],
                    'id_institucion' => 1,
                    'email' => $usuario['email'],
                    'usuario' => $usuario['usuario'],
                    'tiempo_sesion' => $usuario['tiempo_sesion']
                ]
            );

        return JWT::encode($token, self::$secret_key);
    }

    
    public static function SignInZoom($api_key,$api_secret,$tiempo_sesion)
    {
        
            if(
                !$api_key || !$api_secret
                )
                throw new Exception("incorrect params.");

            $time = time();

                

        
            $token = array(
                'iss' => $api_key,
                'exp' => $time + (60*60) * $tiempo_sesion,
                'aud' => self::Aud()

            );

        return JWT::encode($token ,$api_secret);
    }
    
    
    public static function Check($token)
    {
        if(empty($token))
        {
            throw new Exception("Invalid token supplied.");
        }

        $decode = JWT::decode(
            $token,
            self::$secret_key,
            self::$encrypt
        );


        if($decode->aud !== self::Aud())
        {
            throw new Exception("Invalid user logged in.");
        }
    }

    public static function GetData($token)
    {
        return JWT::decode(
            $token,
            self::$secret_key,
            self::$encrypt
        )->data;
    }



    private static function Aud()
    {
        $aud = '';

        if (!empty($_SERVER['HTTP_CLIENT_IP'])) {
            $aud = $_SERVER['HTTP_CLIENT_IP'];
        } elseif (!empty($_SERVER['HTTP_X_FORWARDED_FOR'])) {
            $aud = $_SERVER['HTTP_X_FORWARDED_FOR'];
        } else {
            $aud = $_SERVER['REMOTE_ADDR'];
        }

        $aud .= @$_SERVER['HTTP_USER_AGENT'];
        $aud .= gethostname();

        return sha1($aud);
    }
        
    
    

}

 
