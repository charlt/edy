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

    $query = query('SELECT tm.materia_id,tm.estatus_materia_id,cem.descripcion_estatus_materia,tm.calificacion,tm.alumno_id, ca.*,  UNIX_TIMESTAMP(iag.fecha_inicio) as fecha_inicio, UNIX_TIMESTAMP(iag.fecha_fin) as fecha_fin,iag.asignatura_grupo_id,validacion FROM tr_materia tm
    join '.$GLOBALS["db_controlEscolar"].'.inter_asignatura_grupo iag ON tm.asignatura_grupo_id = iag.asignatura_grupo_id    
    join '.$GLOBALS["db_datosGenerales"].'.inter_orden_asignatura ioa ON ioa.orden_asignatura_id = iag.orden_asignatura_id
    join '.$GLOBALS["db_datosGenerales"].'.cat_asignaturas ca ON ca.asignatura_id = ioa.asignatura_id
    join cat_estatus_materia cem on cem.estatus_materia_id = tm.estatus_materia_id
    WHERE materia_id = '.$id_materia.'
    and  iag.estatus = 1
    ');

    $json_materia = array();
    while ($arreglo = arreglo($query)){
      
      $query_docente = query('SELECT u.usuario_id, p.persona_id, nombre, primer_apellido, segundo_apellido, color, url_perfil,u.color,u.url_perfil, url as url_curriculum
      FROM  '.$GLOBALS["db_controlEscolar"].'.inter_docente_asignatura_grupo idag
      join '.$GLOBALS["db_datosGenerales"].'.personas p ON p.persona_id = idag.docente_id
      join '.$GLOBALS["db_datosGenerales"].'.inter_persona_usuario_rol ipu ON ipu.persona_id = p.persona_id
      join '.$GLOBALS["db_datosGenerales"].'.usuarios u ON ipu.usuario_id = u.usuario_id
      left join '.$GLOBALS["db_controlEscolar"].'.inter_expediente_docente ied on ied.docente_id = idag.docente_id and ied.documento_id = 7
      WHERE asignatura_grupo_id = '.$arreglo['asignatura_grupo_id'].'
      and idag.estatus = 1 ');

      if(num($query_docente)){
        $arreglo_docente = arreglo($query_docente);
      
      }else{
        $arreglo_docente = null;
      }


      

      $arreglo['docente'] = $arreglo_docente;
      array_push($json_materia,$arreglo);
    }
       
       //greso todas las escuelas que tiene este profesor
       
       if(num($query)){
    		$json = array("status" => 1, "msg" => "Se encontró la materia","materia" => $json_materia);
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
