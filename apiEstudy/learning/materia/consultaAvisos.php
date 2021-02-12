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
        
    $query = query('SELECT tag.avisos_grupo_id,titulo,mensaje,adjunto,UNIX_TIMESTAMP(tag.fecha_inicio) as fecha_inicio, UNIX_TIMESTAMP(tag.fecha_fin) as fecha_fin, tag.importancia_aviso_id  FROM tr_materia tm
    join '.$GLOBALS["db_controlEscolar"].'.inter_asignatura_grupo iag ON tm.asignatura_grupo_id = iag.asignatura_grupo_id
    join '.$GLOBALS["db_controlEscolar"].'.tr_avisos_grupo tag ON tag.asignatura_grupo_id = iag.asignatura_grupo_id
    left join '.$GLOBALS["db_controlEscolar"].'.inter_aviso_grupo_persona iagp on iagp.avisos_grupo_id = tag.avisos_grupo_id
    WHERE tag.estatus = 1 and materia_id = '.$id_materia.' and now() between tag.fecha_inicio and tag.fecha_fin  and iagp.persona_id is null
    order by tag.avisos_grupo_id desc
    ');

       $json_materia = array();
       while ($arreglo = arreglo($query)){
          array_push($json_materia,$arreglo);
       }
       
       //ingreso todas las escuelas que tiene este profesor
       
       if(num($query)){
    		$json = array("status" => 1, "msg" => "Se encontraron avisos","aviso" => $json_materia);
    	 }else{
    		$json = array("status" => 0, "msg" => "No se encontraron avisos");
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
