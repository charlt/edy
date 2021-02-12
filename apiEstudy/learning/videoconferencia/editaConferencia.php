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

        $zona_horaria = $zona_horaria*-1;
        $zona_horaria = $zona_horaria > 0 ? '+'.$zona_horaria : $zona_horaria;

        $fecha_inicio = 'CONVERT_TZ("'.$fecha_inicio.'","'.$zona_horaria.':00","-06:00")';
        $fecha_fin = 'CONVERT_TZ("'.$fecha_fin.'","'.$zona_horaria.':00","-06:00")';
             
        $edita = update('tr_videoconferencia',
        'nombre = "'.$nombre.'",
        descripcion = "'.$descripcion.'",
        url_meet = "'.$url_meet.'",
        fecha_inicio = '.$fecha_inicio.',
        fecha_fin = '.$fecha_fin.'',
        'videoconferencia_id = '.$id_videoconferencia);
       
       //ingreso todas las escuelas que tiene este profesor
       
       if($edita){
    		$json = array("status" => 1, "msg" => "Videoconferencia actualizada exitosamente");
    	 }else{
    		$json = array("status" => 0, "msg" => "No se logró actualizar la videoconferencia");
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
