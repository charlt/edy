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

    //SERVICIO DE CONSULTA DE SESIÓN

    $query_asignatura = query('select  tm.materia_id, ioa.asignatura_id
    from tr_materia_fecha_actividad tmfa 
    join tr_materia tm on tm.materia_id = tmfa.materia_id
    join '.$GLOBALS["db_controlEscolar"].'.inter_asignatura_grupo iag on iag.asignatura_grupo_id = tm.asignatura_grupo_id
    join '.$GLOBALS["db_datosGenerales"].'.inter_orden_asignatura ioa on ioa.orden_asignatura_id = iag.orden_asignatura_id
    where tmfa.materia_fecha_actividad_id ='.$id_materia_fecha_actividad);

    $arreglo_asignatura = arreglo($query_asignatura);
    
    $query = query(' select ta.actividad_id, ta.actividad_nombre,ta.ponderacion, ta.fecha_inicio, ta.fecha_fin,tmfa.calificacion, tmfa.materia_fecha_actividad_id, tmfa.estatus_actividad_id
    from inter_modulos_asignaturas ima 
    join tr_actividad ta on ta.modulo_id = ima.modulo_id
    join tr_materia_fecha_actividad tmfa on tmfa.actividad_id = ta.actividad_id
    where tmfa.materia_id = '.$arreglo_asignatura['materia_id'].' and asignatura_id = '.$arreglo_asignatura['asignatura_id'].' and tmfa.estatus_actividad_id in (2,4) and tmfa.estatus = 1');

    
       $json_asignaturas= array();
       while ($arreglo_asignaturas = arreglo($query)){          
          $query_retroalimentacion = arreglo(query('SELECT retroalimentacion_id, materia_fecha_actividad_id,
          persona_id, texto, origen, visto, fecha_creacion, fecha_actualiza, estatus
          FROM tr_retroalimentacion 
          where materia_fecha_actividad_id ='.$arreglo_asignaturas['materia_fecha_actividad_id'].' and origen=3'));

         $arreglo_asignaturas['retroalimentacion']=$query_retroalimentacion['texto'];
         array_push($json_asignaturas,$arreglo_asignaturas);
       }
       
       //ingreso todas las escuelas que tiene este profesor
       
       if(num($query)){
    		$json = array("status" => 1, "msg" => "Se encontraron Actividades","Actividades" => $json_asignaturas);
    	 }else{
    		$json = array("status" => 0, "msg" => "No se encontraron Actividades");
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