<?php


 use PHPMailer\PHPMailer\PHPMailer;
 use PHPMailer\PHPMailer\Exception;


require '../../vendor/PHPMailer/src/Exception.php';
require '../../vendor/PHPMailer/src/PHPMailer.php';
require '../../vendor/PHPMailer/src/SMTP.php';

class Correo{

  
  public static function enviar_correo($asunto,$cuerpo,$id_persona){

    $arreglo_persona=arreglo(query('SELECT persona_id, nombre, primer_apellido, segundo_apellido,email from '.$GLOBALS["db_datosGenerales"].'.personas where persona_id='.$id_persona));
    

    $logo = $GLOBALS['url_front'].'assets/images/logo.png';
    $cuerpo = str_replace("**url**", $GLOBALS['url_front'], $cuerpo);
    $cuerpo = str_replace("**logo**", $logo, $cuerpo);
    $cuerpo = str_replace("**correo**", $arreglo_persona['email'], $cuerpo);
    $cuerpo = str_replace("**nombre**", $arreglo_persona['nombre'].' '.$arreglo_persona['primer_apellido'].' '.$arreglo_persona['segundo_apellido'], $cuerpo);    
    
  
    // Instantiation and passing `true` enables exceptions
    $mail = new PHPMailer(true);    
    
        //Server settings
        $mail->SMTPDebug = 0;                                       // Enable verbose debug output
        $mail->isSMTP();                                            // Set mailer to use SMTP
        $mail->Host       = 'smtp.gmail.com';  						// Specify main and backup SMTP servers
        $mail->SMTPAuth   = true;                                   // Enable SMTP authentication
        $mail->Username   = $GLOBALS['smtp_user'];             // SMTP username
        $mail->Password   = $GLOBALS['smtp_pass'];                       // SMTP password
        $mail->SMTPSecure = 'tls';                                  // Enable TLS encryption, `ssl` also accepted
        $mail->Port       = 587;      
        $mail->SMTP       = array(                                  // TCP port to connect to
            'ssl' => array(
                'verify_peer' => false,             
                'verify_peer_name' => false,
                'allow_self_signed' => true
            )
        ); 

        //Recipients
        $mail->setFrom($GLOBALS['smtp_user'], $GLOBALS['smtp_username']);
        $mail->addAddress($arreglo_persona['email'], "");
        //$mail->addAddress($correo, $destinatario);                  // Add a recipient    
        // $mail->addAddress('ellen@example.com');                  // Name is optional
        // $mail->addReplyTo('info@example.com', 'Information');
        // $mail->addCC('cc@example.com');
        // $mail->addBCC('bcc@example.com');

        // Attachments
        // $mail->addAttachment('/var/tmp/file.tar.gz');      // Add attachments
        // $archivo = '../../documentos_instituciones/1/manual/Manual_del_alumno.zip';       
        // $mail->addAttachment($archivo, 'Manual_del_alumno.zip');    // Optional name


        // Content
        $mail->isHTML(true);                                  // Set email format to HTML
        $mail->Subject = $asunto;
        $mail->Body    = $cuerpo;
        $mail->AltBody = "No se pudo verificar";     
        $mail->CharSet = 'UTF-8';   
        // $mail->AltBody = 'This is the body in plain text for non-HTML mail clients';
        /*if ($mail->send())
          echo "correo enviado";
          else 
          echo "no se pudo enviar";*/
        $mail->send();
        // echo '<div class="alert alert-success"> <strong>Emails mandados correctamente.</strong></div>';
    // } catch (Exception $e) {
        // echo "Error al enviar el mensaje:' {$mail->ErrorInfo}";
    // }
    return $mail;

  }

  public static function test_body(){

    return self::usuario_password(1, 'richard','richard123');
  }


   public static function  registro_exitoso($id_persona, $usuario,$password, $carrera){
    
    $asunto ='Estás a unos pasos de completar tu registro a la Universidad.'; 
    $cuerpo= file_get_contents('../../extras/correo/bodies/registroExitoso.html');

    $cuerpo = str_replace("**usuario**", $usuario, $cuerpo);
    $cuerpo = str_replace("**password**", $password, $cuerpo);
    $cuerpo = str_replace("**carrera**", $carrera, $cuerpo);

    $status_correo = self::enviar_correo($asunto,$cuerpo,$id_persona);

    return $status_correo;

  }

  public static function  usuario_password($id_persona,$usuario,$password){
    
    $asunto ='Accesos a la plataforma'; 
    $cuerpo= file_get_contents('../../extras/correo/bodies/usuarioPassword.html');

    $cuerpo = str_replace("**usuario**", $usuario, $cuerpo);
    $cuerpo = str_replace("**password**", $password, $cuerpo);

    $status_correo = self::enviar_correo($asunto,$cuerpo,$id_persona);

    return $status_correo;

  }

  
  public static function matriculacion_exitosa($id_persona,$clave_alumno,$carrera){
    
    $asunto ='Bienvenido a tu Universidad '; 
    $cuerpo= file_get_contents('../../extras/correo/bodies/matriculacionExitosa.html');
    
    $cuerpo = str_replace("**matricula**", $clave_alumno, $cuerpo);
    $cuerpo = str_replace("**carrera**", $carrera, $cuerpo);
    

    $status_correo = self::enviar_correo($asunto,$cuerpo,$id_persona);

    return $status_correo;



  }
  
  
  public static function pago_exitoso($id_persona){

    $asunto='Tu pago ha sido confirmado.';
    $cuerpo= file_get_contents('../../extras/correo/bodies/pagoExitoso.html');
    
    $status_correo = self::enviar_correo($asunto,$cuerpo,$id_persona);

    return $status_correo;

  }


  public static function reestablecePass($id_persona, $codigo){
      
    $asunto ='Código de seguridad de tu cuenta.';
    $cuerpo= file_get_contents('../../extras/correo/bodies/reestablecerPass.html');

    $cuerpo = str_replace("**codigo**", $codigo, $cuerpo);    
    
    $status_correo = self::enviar_correo($asunto,$cuerpo,$id_persona);

    return $status_correo;


  }

  public static function correccion($id_persona){

    $asunto='Observaciones en su expediente.';
    $cuerpo= file_get_contents('../../extras/correo/bodies/correccion.html');

    $status_correo = self::enviar_correo($asunto,$cuerpo,$id_persona);

    return $status_correo;

  }

  public static function pendientesDocente($id_persona, $retroalimentacion, $mensajesPendientes, $actividades_pendientes){

    $asunto='Tiene pendientes por revisar.';
    $cuerpo= file_get_contents('../../extras/correo/bodies/pendientesDocente.html');

    $cuerpo = str_replace("**retroalimentacion**", $retroalimentacion, $cuerpo);    
    $cuerpo = str_replace("**mensajes_pendientes**", $mensajesPendientes, $cuerpo);    
    $cuerpo = str_replace("**actividades_pendintes**", $actividades_pendientes, $cuerpo);    


    $status_correo = self::enviar_correo($asunto,$cuerpo,$id_persona);

    return $status_correo;

  }

  public static function documentacionCompleta($id_persona){

    $asunto='Documentación validada.';
    $cuerpo= file_get_contents('../../extras/correo/bodies/documentacionCompleta.html');

    // $cuerpo = str_replace("**retroalimentacion**", $retroalimentacion, $cuerpo);    
    // $cuerpo = str_replace("**mensajes_pendientes**", $mensajesPendientes, $cuerpo);    
    // $cuerpo = str_replace("**actividades_pendintes**", $actividades_pendientes, $cuerpo);    


    $status_correo = self::enviar_correo($asunto,$cuerpo,$id_persona);

    return $status_correo;

  }

}


$cabeceras = 'From: ricardo.ruiz@estudy.mx \r\n' .
'Reply-To: ricardo.ruiz@estudy.mx \r\n'.
'MIME-Version: 1.0 \r\n'.
'Content-type: text/html; charset=iso-8859-1 \r\n';
?>

