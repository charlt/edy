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

        if ($tipo_fecha == 0) {
          $msg = 'Videoconferencia programada exitosamente';
          $fecha_inicio = 'CONVERT_TZ("'.$fecha_inicio.'","'.$zona_horaria.':00","-06:00")';
          $fecha_fin = 'CONVERT_TZ("'.$fecha_fin.'","'.$zona_horaria.':00","-06:00")';

          $inserta = inserta('tr_videoconferencia', 
          'nombre,descripcion,url_meet,fecha_inicio,fecha_fin,asignatura_grupo_id,estatus',
          '"'.$nombre.'","'.$descripcion.'","'.$url_meet.'",'.$fecha_inicio.','.$fecha_fin.','.$asignatura_grupo_id.',1');        
        } else if ($tipo_fecha == 1) {
          $msg = 'Videoconferencias programadas exitosamente';
          $arreglo = json_decode(stripslashes($arreglo_fechas));

          $num_arreglo = sizeof($arreglo);
          for ($i=0; $i <$num_arreglo ; $i++) {   
            $fecha_inicio = 'CONVERT_TZ("'.$arreglo[$i]->inicio.'","'.$zona_horaria.':00","-06:00")';
            $fecha_fin = 'CONVERT_TZ("'.$arreglo[$i]->fin.'","'.$zona_horaria.':00","-06:00")';  

            $inserta = inserta('tr_videoconferencia', 
            'nombre,descripcion,url_meet,fecha_inicio,fecha_fin,asignatura_grupo_id,estatus',
            '"'.$nombre.'","'.$descripcion.'","'.$url_meet.'",'.$fecha_inicio.','.$fecha_fin.','.$asignatura_grupo_id.',1');       
          }
        }
       
       //ingreso todas las escuelas que tiene este profesor
       
       if($inserta){
    		$json = array("status" => 1, "msg" => $msg);
    	 }else{
    		$json = array("status" => 0, "msg" => "No se logró crear la videoconferencia");
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
