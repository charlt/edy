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
    $query_materias = query('SELECT tm.materia_id,ca.asignatura, tm.calificacion, url_imagen_previa FROM '.$GLOBALS['db_learning'].'.tr_materia tm
    join '.$GLOBALS['db_learning'].'.cat_estatus_materia cem on cem.estatus_materia_id = tm.estatus_materia_id 
    join '.$GLOBALS['db_controlEscolar'].'.inter_asignatura_grupo iag ON tm.asignatura_grupo_id = iag.asignatura_grupo_id    
    join inter_orden_asignatura ioa ON ioa.orden_asignatura_id = iag.orden_asignatura_id
    join cat_asignaturas ca ON ca.asignatura_id = ioa.asignatura_id
    WHERE tm.estatus_materia_id = 2 and cem.estatus = 1 tm.estatus = 1 and tm.calificacion >= 6 and alumno_id ='.$usuario->id.' and tm.calificacion > 6');

    
       $json_materias= array();
       while ($arreglo_materias = arreglo($query_materias)){
          array_push($json_materias,$arreglo_materias);
       }
       
       //ingreso todas las escuelas que tiene este profesor
       
       if(num($query_materias)){
    		$json = array("status" => 1, "msg" => "Se encontraron materias","materias" => $json_materias);
    	 }else{
    		$json = array("status" => 0, "msg" => "No se encontraron materias");
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