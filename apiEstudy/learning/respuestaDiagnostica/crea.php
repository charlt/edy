<?php
include '../../jwt.php';
include '../../headers.php';

try {

  db ('learning');

  if($_SERVER['REQUEST_METHOD'] == "POST"){
    foreach($_POST as $clave => $valor){
      ${$clave} = escape_cara($valor);
    }
    
      $usuario = Auth::GetData(
            $jwt  
        );

        
    //SERVICIO DE CONSULTA DE SESIÓN
      $inserta = inserta_last_id('tr_sq_respuesta',
      'pregunta_id, materia_fecha_actividad_id, respuesta, visualiza_flg,fecha_creacion,estatus',
       ''.$id_pregunta.','.$id_materia_fecha_actividad.',"'.$respuesta.'",'.$visualiza_flag.', now(),1');

       
      if($inserta){
          $json = array("status" => 1, "msg" => "Se insertó la respuesta correctamente", "idRespuesta" => $inserta);
      }else{
        $json = array("status" => 0, "msg" => "No se logró insertar");
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