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

        if($activas == 1){
          $join_estatus_materias = 'join cat_estatus_materia cem on cem.estatus_materia_id = tm.estatus_materia_id';
          $script_activa = ' and cem.estatus = 1 and validacion = 1';
        }else if($activas == 2){
          $join_estatus_materias = 'join cat_estatus_materia cem on cem.estatus_materia_id = tm.estatus_materia_id';
          $script_activa = ' and cem.estatus = 1 and validacion = 0';
        }else if($activas == 3){
          $join_estatus_materias = '';
          $script_activa = '';
        }


    //SERVICIO DE CONSULTA DE SESIÓN
    $query_materias = query('SELECT tm.materia_id,tg.grupo,tg.nombre_grupo, tm.calificacion, ca.asignatura_id, ca.asignatura, tm.estatus_materia_id, 
    UNIX_TIMESTAMP(iag.fecha_inicio) as fecha_inicio, UNIX_TIMESTAMP(iag.fecha_fin) as fecha_fin, ca.url_imagen_previa,tm.asignatura_grupo_id,
     tm.tipo_materia_id,validacion
    FROM tr_materia tm
    join '.$GLOBALS["db_controlEscolar"].'.inter_asignatura_grupo iag ON tm.asignatura_grupo_id = iag.asignatura_grupo_id
    join '.$GLOBALS["db_datosGenerales"].'.inter_orden_asignatura ioa ON ioa.orden_asignatura_id = iag.orden_asignatura_id
    join '.$GLOBALS["db_datosGenerales"].'.cat_asignaturas ca ON ca.asignatura_id = ioa.asignatura_id
    join '.$GLOBALS["db_controlEscolar"].'.tr_grupo tg on tg.grupo_id = iag.grupo_id
    '.$join_estatus_materias.'
    WHERE tm.estatus = 1 and iag.estatus=1 and alumno_id = '.$id_alumno.$script_activa);

    
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