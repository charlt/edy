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

    $query = query('SELECT count(tag.asignatura_grupo_id) as num_avisos FROM tr_materia tm
    join '.$GLOBALS["db_controlEscolar"].'.inter_asignatura_grupo iag ON tm.asignatura_grupo_id = iag.asignatura_grupo_id
    join '.$GLOBALS["db_controlEscolar"].'.tr_avisos_grupo tag ON tag.asignatura_grupo_id = iag.asignatura_grupo_id
    left join '.$GLOBALS["db_controlEscolar"].'.inter_aviso_grupo_persona iagp on iagp.avisos_grupo_id = tag.avisos_grupo_id
    WHERE materia_id = '.$id_materia.' and date(now()) between date(tag.fecha_inicio) and date(tag.fecha_fin) and persona_id is null
    order by tag.fecha_inicio
    ');

       $json_materia = array();
       while ($arreglo = arreglo($query)){
          array_push($json_materia,$arreglo);
       }
       
       //ingreso todas las escuelas que tiene este profesor
       
       if(num($query)){
    		$json = array("status" => 1, "msg" => "Se encontro el numero de avisos","numAviso" => $json_materia);
    	 }else{
    		$json = array("status" => 0, "msg" => "No se encontraro el numero de avisos");
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
