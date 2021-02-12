<?php
include '../../jwt.php';
include '../../headers.php';
include '../actividad/class/respuesta.class.php';

try {
  
  db ('learning');

  $class_foro = new Respuesta();
  if($_SERVER['REQUEST_METHOD'] == "GET"){
    foreach($_GET as $clave => $valor){
      ${$clave} = escape_cara($valor);
    }

      $usuario = Auth::GetData(
            $jwt  
        );


      $tmp_json = $class_foro::foro($id_pregunta, $id_materia_fecha_actividad);

    // $query_tmfa = query('select asignatura_grupo_id 
    // from tr_materia tm
    // join tr_materia_fecha_actividad tmfa on tmfa.materia_id = tm.materia_id where materia_fecha_actividad_id='.$id_materia_fecha_actividad);

    // $arreglo_tmfa = arreglo($query_tmfa);

    // //SERVICIO DE CONSULTA DE SESIÓN
    // $query_respuesta = query('SELECT distinct respuesta_id,respuesta_padre_id,pregunta_id,tr.persona_id, nombre,primer_apellido,segundo_apellido,respuesta,
    // flg_moderador,contenido, color, tr.fecha_creacion
    // FROM tr_fr_respuesta  tr
    // join '.$GLOBALS["db_datosGenerales"].'.personas p on p.persona_id = tr.persona_id
    // join '.$GLOBALS["db_datosGenerales"].'.inter_persona_usuario_rol ipur on p.persona_id = ipur.persona_id
    // join '.$GLOBALS["db_datosGenerales"].'.usuarios u on u.usuario_id = ipur.usuario_id
    // WHERE pregunta_id = '.$id_pregunta.' and asignatura_grupo_id='.$arreglo_tmfa['asignatura_grupo_id'].' and tr.estatus = 1 and respuesta_padre_id is null');

    
    //    $tmp_json= array();
    //    while ($arreglo = arreglo($query_respuesta)){


    //     $query1 = query('SELECT distinct respuesta_id,respuesta_padre_id,pregunta_id,tr.persona_id, nombre,primer_apellido,segundo_apellido,respuesta,
    //     flg_moderador,contenido,color, tr.fecha_creacion
    //     FROM tr_fr_respuesta  tr
    //     join '.$GLOBALS["db_datosGenerales"].'.personas p on p.persona_id = tr.persona_id 
    //     join '.$GLOBALS["db_datosGenerales"].'.inter_persona_usuario_rol ipur on p.persona_id = ipur.persona_id
    //     join '.$GLOBALS["db_datosGenerales"].'.usuarios u on u.usuario_id = ipur.usuario_id
    //     WHERE pregunta_id = '.$id_pregunta.' and tr.estatus = 1 and respuesta_padre_id ='.$arreglo['respuesta_id']);
    //      $tmp_json1 = array();

    //     while ($arreglo1 = arreglo($query1)){
    //     array_push($tmp_json1,$arreglo1);
    //    }  
    //    $arreglo['sub_respuesta'] = $tmp_json1;

    //   array_push($tmp_json,$arreglo);
    //   }
       
       //ingreso todas las escuelas que tiene este profesor
       
       if(!empty($tmp_json)){

        //se hace este ajuste en base a la consulta de alumnos
        $respuesta_foro = $tmp_json['respuesta'];

    		$json = array("status" => 1, "msg" => "Se encontró la respuesta", "respuesta" => $respuesta_foro );
    	 }else{
    		$json = array("status" => 0, "msg" => "No se encontraron respuestas");
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