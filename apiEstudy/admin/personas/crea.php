<?php
include '../../jwt.php';
include '../../headers.php';
include './class/persona.class.php';


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
        

      $inserta_persona = $persona::inserta_persona($nombre,$primer_apellido,$segundo_apellido,$curp,$rfc,$fecha_nacimiento,$email,$celular,$id_sexo);

       
       //ingreso todas las escuelas que tiene este profesor
       
       if($inserta_persona){
    		$json = array("status" => 1, "msg" => "Se insertó la información correctamente", "idPersona" => $inserta_persona);
    	 }else{
    		$json = array("status" => 0, "msg" => "No se logró insertar la persona");
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
