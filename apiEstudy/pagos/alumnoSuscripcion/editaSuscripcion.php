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


    $edita_suscripcion = update('inter_alumno_suscripcion',
      'suscripcion_id = '.$id_suscripcion.', 
      beca_colegiatura = '.$montoBecaColegiatura.',
      valor_beca_colegiatura = '.$tipoBecaColegiatura.',
      beca_reinscripcion = '.$montoBecaReinscripcion.',
      valor_beca_reinscripcion = '.$tipoBecaReinscripcion
      ,
        'alumno_suscripcion_id = '.$id_suscripcion_alumno.'');

    if($edita_suscripcion){
      $json = array("status" => 1, "msg" => "Se editó la suscripción correctamente");
    }else{
      $json = array("status" => 1, "msg" => "No se editó correctamente");
    }

  }else{
  	$json = array("status" => 0, "msg" => "Método no aceptado");
  }

  echo json_encode($json);

} catch (Exception $e) {
    $json = array("status" => 0, "msg" =>  $e->getMessage());

    echo json_encode($json);
}


