<?php
include '../../jwt.php';
include '../../headers.php';

try {

  db('datosGenerales');

  if($_SERVER['REQUEST_METHOD'] == "POST"){
    foreach($_POST as $clave => $valor){
      ${$clave} = escape_cara($valor);
    }
    
      $usuario = Auth::GetData(
            $jwt  
        );
         
        if(empty($minimo_materias_grado) || $minimo_materias_grado == null){
          $minimo_materias_grado = 'null';
        }
        // if ($plan_estudio_db != $plan_estudio_clave) {
        $inserta_plan = inserta_last_id('tr_plan_estudios','plan_estudio_clave, plan_estudio,no_rvoe,rvoe,
        minima_aprobatoria, minima_creditos, total_creditos,total_periodos, tipo_periodo_id, tipo_plan_estudio_id,carrera_id,
         curp_responsable, minimo_materias_grado, fecha_creacion, usuario_crea, estatus',
        '"'.$plan_estudio_clave.'","'.$plan_estudio.'", '.$no_rvoe.',"'.$rvoe.'",
        '.$minima_aprobatoria.', '.$minima_creditos.', '.$total_creditos.','.$total_periodos.', '.$tipo_periodo_id.', '.$tipo_plan_estudio_id.','.$id_carrera.',
         "'.$curp_responsable.'",'.$minimo_materias_grado.', now(), current_user(), 1');


       
       //ingreso todas las escuelas que tiene este profesor
       
       if($inserta_plan){

          $json = array("status" => 1, "msg" => "Se insertó el plan de estudios correctamente");
        
    	 }else{
    		$json = array("status" => 0, "msg" => "No se logró insertar plan estudios");
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
