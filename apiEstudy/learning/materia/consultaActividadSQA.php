<?php
include '../../jwt.php';
include '../../headers.php';

try {

  db ('learning');

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

    $query = query('SELECT sq.respuesta_id, sqp.pregunta,momento, sq.respuesta, tmfa.materia_id, tmfa.materia_fecha_actividad_id,sqp.momento,tmfa.calificacion,tmfa.estatus_actividad_id
     FROM tr_materia_fecha_actividad tmfa
    join tr_actividad ta on ta.actividad_id = tmfa.actividad_id
    join tr_sq_respuesta sq on sq.materia_fecha_actividad_id = tmfa.materia_fecha_actividad_id
    join tr_sq_pregunta  sqp on sqp.pregunta_id = sq.pregunta_id
    where tmfa.materia_id = '.$id_materia.' and ta.tipo_actividad_id = 4');

      //  $arreglo = arreglo($query);
       
      $json_sqa_m1= array();
      $json_sqa_m2= array();
      $json_sqa_m3= array();
      while ($arreglo = arreglo($query)){
        if($arreglo['momento'] == 1)
          array_push($json_sqa_m1,$arreglo);
        if($arreglo['momento'] == 2)
          array_push($json_sqa_m2,$arreglo);
        if($arreglo['momento'] == 3)
          array_push($json_sqa_m3,$arreglo);
      }

       //ingreso todas las escuelas que tiene este profesor
       
       if(num($query)){
    		$json = array("status" => 1, "msg" => "Se encontraron las actividades SQA del alumno","actividadSQAm1" => $json_sqa_m1,"actividadSQAm2" => $json_sqa_m2,"actividadSQAm3" => $json_sqa_m3);
    	 }else{
    		$json = array("status" => 0, "msg" => "No se encontraron actividades");
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
