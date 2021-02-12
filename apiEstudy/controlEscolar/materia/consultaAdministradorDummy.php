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
    // se agrega grupo o estatico referenciado al grupo_dummy.
    $query_materia = query('select asignatura_grupo_id,
    orden_asignatura_id,grupo_id, situacion_asignatura_grupo_id from '.$GLOBALS["db_controlEscolar"].'.inter_asignatura_grupo where orden_asignatura_id='.$id_orden_asignatura.' and grupo_id = 0');
    if(!num($query_materia)){
        if(!isset($fecha_inicio)){
            $fecha_inicio = null;
        }
        if(!isset($fecha_fin)){
            $fecha_fin = null;
        }
        $id_asignatura_grupo= inserta_last_id($GLOBALS["db_controlEscolar"].'.inter_asignatura_grupo',
        'orden_asignatura_id, grupo_id, situacion_asignatura_grupo_id,estatus ',
        ''.$id_orden_asignatura.',0,1,1');
    }else{
        $arreglo_asignatura_grupo = arreglo($query_materia);
        $id_asignatura_grupo= $arreglo_asignatura_grupo['asignatura_grupo_id'];
    }

    $query = query('SELECT tm.materia_id, ca.*,  UNIX_TIMESTAMP(iag.fecha_inicio) as fecha_inicio, UNIX_TIMESTAMP(iag.fecha_fin) as fecha_fin,iag.asignatura_grupo_id FROM 
    '.$GLOBALS["db_controlEscolar"].'.inter_asignatura_grupo iag 
    join '.$GLOBALS["db_datosGenerales"].'.inter_orden_asignatura ioa ON ioa.orden_asignatura_id = iag.orden_asignatura_id
    join '.$GLOBALS["db_datosGenerales"].'.cat_asignaturas ca ON ca.asignatura_id = ioa.asignatura_id
    left join (select materia_id,asignatura_grupo_id from tr_materia where alumno_id = '.$usuario->id_usuario.') tm ON tm.asignatura_grupo_id = iag.asignatura_grupo_id
    WHERE iag.asignatura_grupo_id = '.$id_asignatura_grupo.' ');
    

    $arreglo = arreglo($query);
    if($arreglo['materia_id'] == ''){

      $inserta = inserta_last_id('tr_materia','asignatura_grupo_id,alumno_id,estatus_materia_id,usuario_creacion,estatus'
      ,$id_asignatura_grupo.','.$usuario->id_usuario.',1,"'.$usuario->usuario.'",1');
      $arreglo['materia_id'] = $inserta;
    }
    
    $arreglo['alumno_id'] = 0;
    $arreglo['docente'] = null;

       
       if(!empty($arreglo)){
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
