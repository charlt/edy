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

        if(isset($id_actividad_padre)){
          $actividad_padre_id = 'actividad_padre_id = '.$id_actividad_padre;
          
        }else{
          $actividad_padre_id = 'actividad_padre_id = null';
        }

        $zona_horaria = $zona_horaria*-1;
        $zona_horaria = $zona_horaria > 0 ? '+'.$zona_horaria : $zona_horaria;

        if($id_rubrica == 0) $id_rubrica = 'null';
        if($importancia_actividad_id == 0) $importancia_actividad_id = 'null';

        if($fecha_inicio == '0000-00-00 00:00:00' || $fecha_inicio == '0000-00-00T00:00:00' || $fecha_inicio == '0000-00-00 00:00')
          $fecha_inicio =  'null';
        else
           $fecha_inicio = 'CONVERT_TZ("'.$fecha_inicio.'","'.$zona_horaria.':00","-06:00")';
          
        if($fecha_fin == '0000-00-00 00:00:00' || $fecha_fin == '0000-00-00T00:00:00' || $fecha_fin == '0000-00-00 00:00')
          $fecha_fin =  'null';
        else
          $fecha_fin = 'CONVERT_TZ("'.$fecha_fin.'","'.$zona_horaria.':00","-06:00")';
        
         //if ($instituciones_db != $institucion_clave) {ok
          $edita = update('tr_actividad',
          ''.$actividad_padre_id.',
          actividad_clave = "'.$actividad_clave.'",
          actividad_nombre = "'.$actividad_nombre.'",
          dificultad_id = '.$dificultad_id.',
          tipo_actividad_id = '.$tipo_actividad_id.',
          modulo_id = '.$modulo_id.',
          metodo_resolver_id = '.$metodo_resolver_id.',
          numero_mostrado = '.$numero_mostrado.',
          instruccion = "'.$instruccion.'",
          ponderacion = '.$ponderacion.',
          num_intentos = '.$num_intentos.',
          num_total_preguntas = '.$num_total_preguntas.',
          num_preguntas_mostrar = '.$num_preguntas_mostrar.',
          aleatorio = '.$shuffle.',
          unica = '.$unica.',
          portafolio = '.$portafolio.',
          tipo_calificacion = '.$tipo_calificacion.',
          rubrica_id ='.$id_rubrica.',
          importancia_actividad_id ='.$importancia_actividad_id.',
          fecha_inicio = '.$fecha_inicio.',
          fecha_fin = '.$fecha_fin.',
          fecha_actualiza = now(),
          usuario_actualiza = "'.$usuario->usuario.'"',
          'actividad_id = '.$id_actividad);


       
       //ingreso todas las carreras que tiene
       
       if($edita){
    		$json = array("status" => 1, "msg" => "Se actualizó la actividad correctamente");
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