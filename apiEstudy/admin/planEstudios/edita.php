<?php
include '../../jwt.php';
include '../../headers.php';

try {

  db ('datosGenerales');

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
         
        $edita = update ('tr_plan_estudios', 
        'plan_estudio_clave = "'.$plan_estudio_clave.'",
        plan_estudio = "'.$plan_estudio.'",
        no_rvoe = '.$no_rvoe.',
        rvoe = "'.$rvoe.'",
        minima_aprobatoria = '.$minima_aprobatoria.',
        minima_creditos = '.$minima_creditos.',
        total_creditos = '.$total_creditos.',
        total_periodos = '.$total_periodos.',
        tipo_periodo_id = '.$tipo_periodo_id.',
        tipo_plan_estudio_id = '.$tipo_plan_estudio_id.',
        carrera_id = '.$id_carrera.',
        curp_responsable = "'.$curp_responsable.'",
        minimo_materias_grado = '.$minimo_materias_grado.',
        fecha_actualiza = now(),
        usuario_actualiza = current_user()',
        'plan_estudio_id = '.$id_plan_estudios);

       
       //ingreso todas las escuelas que tiene este profesor
       
       if($edita){
    		$json = array("status" => 1, "msg" => "Se actualizó el plan de estudios correctamente");
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
