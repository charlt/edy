<?php
include '../../jwt.php';
include '../../headers.php';
include '../../admin/class/persona.class.php';

try {

  db('datosGenerales');
  
  $persona = new Persona();

  if($_SERVER['REQUEST_METHOD'] == "POST"){
    foreach($_POST as $clave => $valor){
      ${$clave} = escape_cara($valor);
    }         

       $update_persona = $persona::update_persona($nombre,$primer_apellido,$segundo_apellido,$curp,$rfc,$fecha_nacimiento,$email,$celular,$id_sexo,$id_persona);
        // echo $fecha_nacimiento; 
        if ($update_persona) {
          db('controlEscolar');
          $update_administrador = update('tr_administrador','cedula_profesional='.$cedula_profesional.', fecha_actualiza=now(), usuario_actualiza=current_user()',
        'administrador_id = '.$id_persona.'');
        }else{
          $json = array("status" => 0, "msg" => "No se logró actualizar administrador");
        }
       //ingreso todas las escuelas que tiene este profesor
       
       if($update_administrador){
    		$json = array("status" => 1, "msg" => "Se actualizó el administrador correctamente");
    	 }else{
    		$json = array("status" => 0, "msg" => "No se logró actualizar");
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