<?php
include '../../jwt.php';
include '../../headers.php';

try {
  
db('learning');

  if($_SERVER['REQUEST_METHOD'] == "GET"){
    foreach($_GET as $clave => $valor){
      ${$clave} = escape_cara($valor);
    }

      $usuario = Auth::GetData(
            $jwt  
        );

    $query_notas = query('select tn.texto, unix_timestamp(tn.fecha_creacion) as fecha_creacion,p.nombre, p.primer_apellido, p.segundo_apellido, ca.asignatura from tr_nota tn 
    join '.$GLOBALS["db_datosGenerales"].'.personas p on p.persona_id = tn.docente_id 
    join tr_materia tm on tm.materia_id  = tn.materia_id 
    join '.$GLOBALS["db_controlEscolar"].'.inter_asignatura_grupo iag on iag.asignatura_grupo_id = tm.asignatura_grupo_id 
    join '.$GLOBALS["db_datosGenerales"].'.inter_orden_asignatura ioa on ioa.orden_asignatura_id = iag.orden_asignatura_id
    join '.$GLOBALS["db_datosGenerales"].'.cat_asignaturas ca on ca.asignatura_id = ioa.asignatura_id
    where tm.alumno_id = '.$alumno_id.' and tn.estatus =1;');

      $json_notas = array();

       while ($arreglo_notas = arreglo($query_notas)){
          array_push($json_notas,$arreglo_notas);
       }
       
       if(num($query_notas)){
    		$json = array("status" => 1, "msg" => "Se encontraron notas","notas" => $json_notas);
    	 }else{
    		$json = array("status" => 0, "msg" => "No se encontraron notas");
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
