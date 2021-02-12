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

    $query = query('SELECT tm.materia_id, ca.*,  UNIX_TIMESTAMP(iag.fecha_inicio) as fecha_inicio, UNIX_TIMESTAMP(iag.fecha_fin) as fecha_fin,iag.asignatura_grupo_id FROM 
    '.$GLOBALS["db_controlEscolar"].'.inter_asignatura_grupo iag 
    join '.$GLOBALS["db_datosGenerales"].'.inter_orden_asignatura ioa ON ioa.orden_asignatura_id = iag.orden_asignatura_id
    join '.$GLOBALS["db_datosGenerales"].'.cat_asignaturas ca ON ca.asignatura_id = ioa.asignatura_id
    left join (select materia_id,asignatura_grupo_id from tr_materia where alumno_id = 0) tm ON tm.asignatura_grupo_id = iag.asignatura_grupo_id
    WHERE iag.asignatura_grupo_id = '.$id_asignatura_grupo.' ');
    

    $arreglo = arreglo($query);

    if($arreglo['materia_id'] ==  ''){
      $inserta = inserta_last_id('tr_materia','asignatura_grupo_id,alumno_id,estatus_materia_id,usuario_creacion,estatus',$id_asignatura_grupo.',0,1,"'.$usuario->usuario.'",0');

      $arreglo['materia_id'] = $inserta;
    }

    
    $arreglo['alumno_id'] = 0;
    $arreglo['docente'] = null;

       
    
       
       
       //ingreso todas las escuelas que tiene este profesor
       
       if(num($query)){
    		$json = array("status" => 1, "msg" => "Se encontró la materia","materia" => $arreglo);
    	 }else{
    		$json = array("status" => 0, "msg" => "No se encontró materia");
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
