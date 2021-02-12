<?php
include '../../jwt.php';
include '../../headers.php';

try {

  db ('datosGenerales');


  if($_SERVER['REQUEST_METHOD'] == "GET"){
    foreach($_GET as $clave => $valor){
      ${$clave} = escape_cara($valor);
    }
    
     

      $usuario = Auth::GetData(
            $jwt  
        );

    //SERVICIO DE CONSULTA DE SESIÓN
    $query_inter_carrera_plan= query('SELECT ica.carrera_id, cc.carrera, ica.plan_estudio_id, plan_estudio, 
     ica.estatus, ica.fecha_creacion, ica.fecha_actualiza 
    FROM inter_carrera_plan as ica
    join cat_carreras as cc on cc.carrera_id = ica.carrera_id
    join cat_plan_estudios as pe on pe.plan_estudio_id = ica.plan_estudio_id
    where ica.carrera_id = '.$id_carrera.' and ica.plan_estudio_id ='.$id_estudioplan);

    
       $json_inter_carrera_plan = array();
       while ($arreglo_inter_carrera_plan = arreglo($query_inter_carrera_plan)){
          array_push($json_inter_carrera_plan,$arreglo_inter_carrera_plan);
       }
       
       //ingreso todas las escuelas que tiene este profesor
       
       if(num($query_inter_carrera_plan)){
    		$json = array("status" => 1, "msg" => "Se encontró una vinculación","inter" => $json_inter_carrera_plan);
    	 }else{
    		$json = array("status" => 0, "msg" => "No se encontró vinculación");
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
