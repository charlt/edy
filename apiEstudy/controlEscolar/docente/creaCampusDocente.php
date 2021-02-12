<?php
include '../../jwt.php';
include '../../headers.php';
 

try {
  db('datosGenerales');
 
  if($_SERVER['REQUEST_METHOD'] == "POST"){
    foreach($_POST as $clave => $valor){
      ${$clave} = escape_cara($valor);
    }
    
    $usuario = Auth::GetData(
          $jwt  
      );       
      
      $inserta_docente = inserta('inter_campus_docente',' campus_id,docente_id, estatus',
      ''.$id_campus.', '.$id_docente.',1');

  if($inserta_docente){

    $json = array("status" => 1, "msg" => "Se insertó el docente al campus correctamente");
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
