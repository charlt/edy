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

    //SERVICIO DE CONSULTA DE SESIÓN

    $opcion = '';

    
    
    $query=arreglo(query('SELECT * from tr_respuesta where datos_pregunta_id ='.$id_datos_pregunta.' 
    and materia_fecha_actividad_id ='.$id_materia_fecha_actividad));
    if($tipo_calificacion == 3){//automático
        $ponderacion = 1/ $numero_respuestas * 100;
    }else{  
      $query_ponderacion=arreglo(query('SELECT ponderacion from tr_datos_pregunta where datos_pregunta_id='.$id_datos_pregunta));
      $ponderacion = $query_ponderacion['ponderacion'];
    }
    

    if(isset($query['respuesta_id'])){

        $inserta= update('tr_respuesta','valor='.$valor_respuesta,
        'respuesta_id='.$query['respuesta_id']);

      $calificacion = (($valor_respuesta*$ponderacion)/10);
         
      $calificacion_pregunta=update('tr_respuesta','calificacion='.$calificacion,'respuesta_id='.$query['respuesta_id']);

      $opcion = 'editó';
    }else{

        $calificacion = (($valor_respuesta*$ponderacion)/10);     

        

        $calificacion_pregunta = inserta_last_id('tr_respuesta','datos_pregunta_id, materia_fecha_actividad_id
        ,valor,calificacion,fecha_creacion,estatus',
        ''.$id_datos_pregunta.','.$id_materia_fecha_actividad.','.$valor_respuesta.','.$calificacion.',
        now(), 1');
        
       $opcion = 'insertó';

    
      }
   
       if($calificacion_pregunta){
    		$json = array("status" => 1, "msg" => "Se ".$opcion." calificación correctamente");
    	 }else{ 
    		$json = array("status" => 0, "msg" => "No se ".$opcion);
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
