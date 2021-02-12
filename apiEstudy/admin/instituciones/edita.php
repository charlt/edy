<?php
include '../../jwt.php';
include '../../headers.php';
include './class/institucion.class.php';


try {

  db ('datosGenerales');

  $institucion = new Institucion();

  if($_SERVER['REQUEST_METHOD'] == "POST"){
    foreach($_POST as $clave => $valor){
      ${$clave} = escape_cara($valor);
    }
    
      $usuario = Auth::GetData(
            $jwt  
        );

        // if ($instituciones_db != $institucion_clave) {ok
          
          $update = $institucion::update($clave_institucion,$institucion_nombre,$id_institucion_tipo,$origen,$id_institucion);

       
       //ingreso todas las carreras que tiene
       
       if($update){
    		$json = array("status" => 1, "msg" => "Se actualizó la institucion correctamente");
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
