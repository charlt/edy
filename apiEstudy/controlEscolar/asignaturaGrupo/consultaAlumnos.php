<?php
include '../../jwt.php';
include '../../headers.php';

try {
  
  db('controlEscolar');

  if($_SERVER['REQUEST_METHOD'] == "GET"){
    foreach($_GET as $clave => $valor){
      ${$clave} = escape_cara($valor);
    }

      $usuario = Auth::GetData(
            $jwt  
        );

    //SERVICIO DE CONSULTA DE SESIÓN
    //faltó nombre alumno
        
    $consulta_alumno = query('SELECT ta.alumno_id, ta.situacion_alumno_id, nombre, primer_apellido, segundo_apellido,iag.asignatura_grupo_id, orden_asignatura_id, grupo_id, iag.estatus,curp,ta.clave_alumno,ctm.descripcion_tipo_materia
    FROM inter_asignatura_grupo iag
    join inter_alumno_asignatura_grupo ida on ida.asignatura_grupo_id = iag.asignatura_grupo_id
    join tr_alumno ta on ta.alumno_id = ida.alumno_id
    join '.$GLOBALS["db_datosGenerales"].'.personas p on p.persona_id = ta.alumno_id
    join '.$GLOBALS["db_learning"].'.tr_materia tm on tm.asignatura_grupo_id = ida.asignatura_grupo_id and ta.alumno_id = tm.alumno_id
    join '.$GLOBALS["db_learning"].'.cat_tipo_materia ctm on ctm.tipo_materia_id = tm.tipo_materia_id
    where iag.asignatura_grupo_id = '.$id_asignatura_grupo.' and ta.estatus=1 and iag.estatus=1 and ida.estatus =1 and tm.estatus=1');      
       
       $json_alumno = array();
       while ($arreglo_alumno = arreglo($consulta_alumno)){
          array_push($json_alumno,$arreglo_alumno);
       }

       if(num($consulta_alumno)){
    		$json = array("status" => 1, "msg" => "Se encontraron alumnos","alumnos" => $json_alumno);
    	 }else{
    		$json = array("status" => 0, "msg" => "No se encontraron alumnos");
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
