<?php
include '../../jwt.php';
include '../../headers.php';

try {

  db ('datosGenerales');

  if($_SERVER['REQUEST_METHOD'] == "GET"){
    foreach($_GET as $clave => $valor){
      ${$clave} = escape_cara($valor);
    }
    
    // if(isset($id_plan_estudios))
    //   $cond_plan_estudios = ' and plan_estudio_id = '.$id_plan_estudios;
    // else
    //   $cond_plan_estudios = '';
    

      $usuario = Auth::GetData(
            $jwt  
        );

    //SERVICIO DE CONSULTA DE SESIÓN
    $query_plan_estudios = query('SELECT ca.*, tpe.carrera_id, tpe.plan_estudio_id, ipo.orden_jerarquico_id FROM cat_asignaturas ca
    left join inter_orden_asignatura ioa on ioa.asignatura_id = ca.asignatura_id 
    left join inter_plan_orden ipo on ipo.plan_orden_id = ioa.plan_orden_id
    left join tr_plan_estudios tpe on tpe.plan_estudio_id = ipo.plan_estudio_id
    WHERE ca.asignatura_id = '.$id_asignatura);

       $json_plan_estudios = array();
       while ($arreglo_plan_estudios = arreglo($query_plan_estudios)){
          array_push($json_plan_estudios,$arreglo_plan_estudios);
       }
       
       //ingreso todas las escuelas que tiene este profesor
       
       if(num($query_plan_estudios)){
    		$json = array("status" => 1, "msg" => "Se encontro la asignatura","Asignatura" => $json_plan_estudios);
    	 }else{
    		$json = array("status" => 0, "msg" => "No se encontraron asignatura");
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
