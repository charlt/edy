<?php
include '../../jwt.php';
include '../../headers.php';

try {

  db('learning');

  if($_SERVER['REQUEST_METHOD'] == "POST"){
    foreach($_POST as $clave => $valor){
      ${$clave} = escape_cara($valor);
    }
    
        $usuario = Auth::GetData(
            $jwt  
        );
        
        $arreglo_modulo = arreglo(query('select count(*) as orden from tr_actividad ta where modulo_id = '.$modulo_id.' and estatus = 1'));
        $orden = $arreglo_modulo['orden']+1;

        $zona_horaria = $zona_horaria*-1;
        $zona_horaria = $zona_horaria > 0 ? '+'.$zona_horaria : $zona_horaria;

        if($id_rubrica == 0) $id_rubrica = 'null';

        if($fecha_inicio == '0000-00-00 00:00:00' || $fecha_inicio == '0000-00-00T00:00:00' || $fecha_inicio == '0000-00-00 00:00')
          $fecha_inicio =  'null';
        else
           $fecha_inicio = 'CONVERT_TZ("'.$fecha_inicio.'","'.$zona_horaria.':00","-06:00")';
          
        if($fecha_fin == '0000-00-00 00:00:00' || $fecha_fin == '0000-00-00T00:00:00' || $fecha_fin == '0000-00-00 00:00')
          $fecha_fin =  'null';
        else
          $fecha_fin = 'CONVERT_TZ("'.$fecha_fin.'","'.$zona_horaria.':00","-06:00")';

        
        if($importancia_actividad_id == "" ||  $importancia_actividad_id == 0){
          $importancia_actividad_id = 1;
        }
        
        if(isset($id_actividad_padre)){
          $inserta = inserta_last_id('tr_actividad', 'actividad_padre_id,actividad_clave, actividad_nombre, dificultad_id, 
        tipo_actividad_id, modulo_id, metodo_resolver_id, numero_mostrado, instruccion, ponderacion, num_intentos,
         num_total_preguntas, num_preguntas_mostrar, aleatorio, orden, visible,tipo_calificacion, rubrica_id,importancia_actividad_id, fecha_inicio, fecha_fin, unica,portafolio, usuario_crea, estatus',
        ''.$id_actividad_padre.',"'.$actividad_clave.'","'.$actividad_nombre.'",'.$dificultad_id.','.$tipo_actividad_id.','.$modulo_id.','.$metodo_resolver_id.','.$numero_mostrado.',
        "'.$instruccion.'",'.$ponderacion.','.$num_intentos.','.$num_total_preguntas.',
        '.$num_preguntas_mostrar.','.$shuffle.','.$orden.',1,'.$tipo_calificacion.','.$id_rubrica.','.$importancia_actividad_id.','.$fecha_inicio.','.$fecha_fin.','.$unica.','.$portafolio.',"'.$usuario->usuario.'",1');
        }else{
          $inserta = inserta_last_id('tr_actividad', 'actividad_clave, actividad_nombre, dificultad_id, 
        tipo_actividad_id, modulo_id, metodo_resolver_id, numero_mostrado, instruccion, ponderacion, num_intentos,
         num_total_preguntas, num_preguntas_mostrar, aleatorio, orden,visible,tipo_calificacion, rubrica_id,importancia_actividad_id,  fecha_inicio, fecha_fin, unica,portafolio, usuario_crea, estatus',
        '"'.$actividad_clave.'","'.$actividad_nombre.'",'.$dificultad_id.','.$tipo_actividad_id.','.$modulo_id.','.$metodo_resolver_id.','.$numero_mostrado.',
        "'.$instruccion.'",'.$ponderacion.','.$num_intentos.','.$num_total_preguntas.',
        '.$num_preguntas_mostrar.','.$shuffle.','.$orden.',1,'.$tipo_calificacion.','.$id_rubrica.','.$importancia_actividad_id.','.$fecha_inicio.','.$fecha_fin.','.$unica.','.$portafolio.',"'.$usuario->usuario.'",1');
        }
        

       
       //ingreso todas las escuelas que tiene este profesor
       
       if($inserta){
    		$json = array("status" => 1, "msg" => "Se insertó la actividad correctamente","idActividad"=> $inserta);
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