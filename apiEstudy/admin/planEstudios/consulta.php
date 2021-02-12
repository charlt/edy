<?php
include '../../jwt.php';
include '../../headers.php';

try {

  db ('datosGenerales');
  
  if($_SERVER['REQUEST_METHOD'] == "GET"){
    foreach($_GET as $clave => $valor){
      ${$clave} = escape_cara($valor);
    }
    
    if(isset($id_plan_estudios))
      $cond_plan_estudios = ' and plan_estudio_id = '.$id_plan_estudios;
    else
      $cond_plan_estudios = '';
    

      $usuario = Auth::GetData(
            $jwt  
        );
    
    $query_plan_estudios = query('SELECT plan_estudio_clave, plan_estudio, no_rvoe, rvoe, minima_aprobatoria,
    minima_creditos, total_creditos,total_periodos, cpe.tipo_periodo_id, ctp.periodo, tipo_plan_estudio_id, curp_responsable,
    cpe.fecha_creacion, cpe.fecha_actualiza, cpe.usuario_crea, cpe.usuario_actualiza, cpe.estatus,minimo_materias_grado
    FROM tr_plan_estudios  cpe
    JOIN cat_tipo_periodo  ctp ON ctp.tipo_periodo_id = cpe.tipo_periodo_id 
    WHERE cpe.estatus = 1 and plan_estudio_id = '.$id_plan_estudios);  
    
    
  
       $json_plan_estudios = array();
       while ($arreglo_plan_estudios = arreglo($query_plan_estudios)){
          array_push($json_plan_estudios,$arreglo_plan_estudios);
       }
       
       //ingreso todas las escuelas que tiene este profesor
       
       if(num($query_plan_estudios)){
    		$json = array("status" => 1, "msg" => "Se encontraron plan de estudios","planEstudio" => $json_plan_estudios);
    	 }else{
    		$json = array("status" => 0, "msg" => "No se encontraron plan de estudios");
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
