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
    
      $usuario = Auth::GetData(
            $jwt  
        );
         
        $update_persona = $persona::update_persona($nombre,$primer_apellido,$segundo_apellido,$curp,$rfc,$fecha_nacimiento,$email,$celular,$id_sexo,$id_persona);
       //ingreso todas las escuelas que tiene este profesor      
      
       
       
      if($update_persona){
        $json = array("status" => 1, "msg" => "Se actualizó la información correctamente");
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
