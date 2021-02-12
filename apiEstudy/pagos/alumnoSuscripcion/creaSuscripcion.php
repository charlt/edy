<?php
include '../../jwt.php';
include '../../headers.php';

try {

  db('pagos');

  if($_SERVER['REQUEST_METHOD'] == "POST"){
    foreach($_POST as $clave => $valor){
      ${$clave} = escape_cara($valor);
    }
    
    $usuario = Auth::GetData(
      $jwt  
    );       

    $inserta_suscripcion = inserta('inter_alumno_suscripcion','alumno_id,suscripcion_id,beca_colegiatura,valor_beca_colegiatura,beca_reinscripcion,valor_beca_reinscripcion,estatus',
      ''.$id_alumno.','.$id_suscripcion.','.$montoBecaColegiatura.','.$tipoBecaColegiatura.','.$montoBecaReinscripcion.','.$tipoBecaReinscripcion.',1');

    if($inserta_suscripcion){
      $json = array("status" => 1, "msg" => "Se insertó la suscripción correctamente");
    }else{
      $json = array("status" => 1, "msg" => "No se insertó correctamente");
    }

  }else{
  	$json = array("status" => 0, "msg" => "Método no aceptado");
  }

  echo json_encode($json);

} catch (Exception $e) {
    $json = array("status" => 0, "msg" =>  $e->getMessage());

    echo json_encode($json);
}


