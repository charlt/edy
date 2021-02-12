<?php
include '../../jwt.php';
include '../../headers.php';
include '../class/usuario.class.php';
try {

  db('datosGenerales');
  
  $usuario = new Usuario();

  if($_SERVER['REQUEST_METHOD'] == "POST"){
    foreach($_POST as $clave => $valor){
      ${$clave} = escape_cara($valor);
    }         

    $update_persona = $usuario::update_persona($nombre,$primer_apellido,$segundo_apellido,$curp,$rfc,$fecha_nacimiento,$email,$celular,$id_sexo,$id_persona);

    $arreglo_usuario = $usuario::consulta_usuario($id_persona,$id_rol);

    if ($update_persona) {
        if($id_rol == 2){
          $query = query('select clave_alumno from '.$GLOBALS['db_controlEscolar'].'.tr_alumno where alumno_id = '.$id_persona);
          $arreglo = arreglo($query);
          $clave = $arreglo['clave_alumno'];
        }else if($id_rol == 3){
          $query = query('select clave_profesor from '.$GLOBALS['db_controlEscolar'].'.tr_docente where docente_id = '.$id_persona);
          $arreglo = arreglo($query);
          $clave = $arreglo['clave_profesor'];
        }else if($id_rol == 1){
          $query = query('select clave_administrador from '.$GLOBALS['db_controlEscolar'].'.tr_administrador where administrador_id = '.$id_persona);
          $arreglo = arreglo($query);
          $clave = $arreglo['clave_administrador'];
        }


        $password=$clave;
        $usuario::edita_usuario($email,$password,$color,$arreglo_usuario['usuario_id']);
        $json = array("status" => 1, "msg" => "información actualizada correctamente",'usuario'=>$email,'password'=>$clave); 
    }else{
        $json = array("status" => 0, "msg" => "No se logró actualizar usuario");
    }


  }else{
  	$json = array("status" => 0, "msg" => "Método no aceptado");
  }

  /* Output header */

  echo json_encode($json);

} catch (Exception $e) {
    $json = array("status" => 0, "msg" =>  $e->getMessage());

    echo json_encode($json);
}