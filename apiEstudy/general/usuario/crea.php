<?php
include '../../jwt.php';
include '../../headers.php';
include '../../extras/correo/class/correo.class.php';

try {

  db('datosGenerales');

  $contraseña_tmp = "";

  if ($_SERVER['REQUEST_METHOD'] == "POST") {
    foreach ($_POST as $clave => $valor) {
      ${$clave} = escape_cara($valor);
    }

    $usuario = Auth::GetData(
          $jwt  
      );


    //isset valida si existe la variable.
    if (isset($contraseña)) {
      $contraseña_tmp = $contraseña;
    } else {
      $contraseña_tmp = "";
    }

    if (!isset($nombre_usuario) || $nombre_usuario == "") {
      $nombre_usuario = $email;
    }

    if (!isset($clave_usuario) || $clave_usuario == "") {
      $clave_usuario = "";
    }

    //Se agrega variable $enviar_correo si es igual a 1, sé envía correo de confirmación con su usuario y contraseña 
    if ($id_rol == 1) {
      include '../../controlEscolar/class/administrador.class.php';
      $admin = new Administrador();
      if($tipo_consulta == 1){
        $vista = 1;
        $edicion = 0;
      }else if($tipo_consulta == 2){
        $vista = 1;
        $edicion = 1;
      }
      $json = $admin::crea_administrador($nombre, $primer_apellido, $segundo_apellido, $curp, $email, $celular, $rfc, $fecha_nacimiento, $nombre_usuario, $contraseña_tmp, $color, $clave_usuario, 1, $vista, $edicion,$id_area);
    } else if ($id_rol == 2) {
      include '../../controlEscolar/class/alumno.class.php';
      $alumno = new Alumno();

     
      $json = $alumno::crea_alumno($nombre, $primer_apellido, $segundo_apellido, $curp, $email, $celular, $rfc, $fecha_nacimiento, $nombre_usuario, $contraseña_tmp, $color, $clave_usuario, 0, 1);

      if (isset($json['id_persona']) && $clave_usuario == "") {
        include '../../controlEscolar/class/matricula.class.php';
        $Matricula = new Matricula();
        $clave_alumno = $Matricula::actualiza_matricula($json['id_persona'],$clave_usuario);
      }

      
      if(isset($json['id_persona'])){
        if($id_campus == '') $id_campus = 'null';
        inserta($GLOBALS['db_controlEscolar'].'.inter_alumno_plan','plan_orden_id,alumno_id,campus_id,asignado_grupo,estatus',$plan_orden_id.','.$json['id_persona'].','.$id_campus.',0,1');
      }
      
    } else if ($id_rol == 3) {
      include '../../controlEscolar/class/docente.class.php';
      $docente = new Docente();
      $json = $docente::crea_docente($nombre, $primer_apellido, $segundo_apellido, $curp, $email, $celular, $rfc, $fecha_nacimiento, $nombre_usuario, $contraseña_tmp, $color, $clave_usuario, 1);
    } else if ($id_rol == 4) {
      include '../../seguimiento/class/aspirante.class.php';
      $aspirante = new Aspirante();
      $json = $aspirante::crea_aspirante($nombre, $primer_apellido, $segundo_apellido, $curp, $email, $celular, $rfc, $fecha_nacimiento, $nombre_usuario, $contraseña_tmp, $color, $carrera_id, $clave_usuario);
    } else if ($id_rol == 5) {
      include '../../seguimiento/class/asesor.class.php';
      $asesor = new Asesor();

      $json = $asesor::crea_asesor($nombre, $primer_apellido, $segundo_apellido, $curp, $email, $celular, $rfc, $fecha_nacimiento, $nombre_usuario, $contraseña_tmp, $color,$clave_usuario,1);
    }

    if (isset($json['id_persona']) && $enviar_correo == 1) {
      $correo = new Correo();
      $correo::usuario_password($json['id_persona'], $json['usuario'],$json['password']);
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
