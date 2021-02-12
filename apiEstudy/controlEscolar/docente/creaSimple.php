<?php
include '../../jwt.php';
include '../../headers.php';
 

try {
  db('controlEscolar');
 
  if($_SERVER['REQUEST_METHOD'] == "POST"){
    foreach($_POST as $clave => $valor){
      ${$clave} = escape_cara($valor);
    }
    
    $usuario = Auth::GetData(
          $jwt  
      );       
      
      $inserta_alumno = inserta('tr_docente','docente_id, clave_profesor, cedula_profesional, situacion_docente_id, fecha_creacion,
      usuario_crea, estatus',
      '"'.$id_persona.'","'.$clave_profesor.'","'.$cedula_profesional.'",1,now(),current_user(),1');

      
  if($inserta_alumno){
    
    $json = array("status" => 1, "msg" => "Se insertó el docente correctamente");
    }else{
    $json = array("status" => 0, "msg" => "No se logró insertar docente");
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
