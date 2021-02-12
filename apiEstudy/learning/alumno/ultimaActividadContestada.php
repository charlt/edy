<?php
include '../../jwt.php';
include '../../headers.php';

try {
  
  db ('learning');

  if($_SERVER['REQUEST_METHOD'] == "GET"){
    foreach($_GET as $clave => $valor){
      ${$clave} = escape_cara($valor);
    }

      $usuario = Auth::GetData(
            $jwt  
        );
    
        
    $arreglo_actividad = arreglo(query('SELECT materia_fecha_actividad_id,ta.actividad_nombre, tmfa.actividad_id, tmfa.materia_id, asignatura, url_imagen_previa
    from tr_materia_fecha_actividad tmfa
    join tr_actividad ta on ta.actividad_id = tmfa.actividad_id
    join tr_materia tm on tm.materia_id = tmfa.materia_id
    join '.$GLOBALS['db_controlEscolar'].'.inter_asignatura_grupo iag on iag.asignatura_grupo_id = tm.asignatura_grupo_id 
    join '.$GLOBALS['db_datosGenerales'].'.inter_orden_asignatura ioa on ioa.orden_asignatura_id = iag.orden_asignatura_id
    join '.$GLOBALS['db_datosGenerales'].'.cat_asignaturas ca on ca.asignatura_id = ioa.asignatura_id
    where tmfa.estatus=1 and ta.estatus=1 and tm.estatus=1 and ioa.estatus=1 and
    iag.estatus=1 and alumno_id='.$usuario->id.' and estatus_actividad_id in (1,5) order by tmfa.materia_fecha_actividad_id DESC limit 1'));
       
       if(isset($arreglo_actividad['materia_fecha_actividad_id'])){
    		$json = array("status" => 1, "msg" => "Ultima actividad","actividad" => $arreglo_actividad);
    	 }else{
    		$json = array("status" => 0, "msg" => "No se encontro actividad");
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