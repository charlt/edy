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

        if($orden != 'null')
          $script_orden = 'orden ="'.$orden.'",';
        else
          $script_orden = '';
        
         //if ($instituciones_db != $institucion_clave) {ok
          $edita = update('tr_datos_pregunta',
          'tipo_pregunta_id = '.$id_tipo_pregunta.',
           actividad_id='.$id_actividad.', 
           dificultad_id ='.$id_dificultad.',
           '.$script_orden.'
           ponderacion="'.$ponderacion.'",
           aleatorio="'.$aleatorio.'",
           retroalimentacion="'.$retroalimentacion.'", 
           retroalimentacion_docente="'.$retroalimentacion_docente.'",
           fecha_actualiza=now(),
           usuario_actualiza=current_user()',
          'datos_pregunta_id = '.$id_dato_pregunta);


       
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