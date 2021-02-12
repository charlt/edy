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

        
         //if ($instituciones_db != $institucion_clave) {ok
          $edita = update('tr_pregunta_opcion_multiple',
          'respuesta  = "'.$respuesta.'",
           pregunta_id='.$id_pregunta.',
           pregunta ="'.$pregunta.'", 
           ponderacion ='.$ponderacion.',
           tipo_pregunta_id ='.$id_tipo_pregunta.',
           dificultad_id ='.$id_dificultad.',
           orden ='.$orden.',
           aleatorio ='.$aleatorio.',
           calificacion = '.$calificacion.',
           retroalimentacion="'.$retroalimentacion.'", 
           retroalimentacion_docente="'.$retroalimentacion_docente.'",
           fecha_actualiza=now(),
           usuario_actualiza=current_user()',
          'respuesta_id = '.$id_respuesta);


       
       //ingreso todas las carreras que tiene
       
       if($edita){
    		$json = array("status" => 1, "msg" => "Se actualizó la pregunta correctamente");
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