<?php
include '../../jwt.php';
include '../../headers.php';

try {
  
  db ('controlEscolar');

  if($_SERVER['REQUEST_METHOD'] == "GET"){
    foreach($_GET as $clave => $valor){
      ${$clave} = escape_cara($valor);
    }

      $usuario = Auth::GetData(
            $jwt  
        );

    //SERVICIO DE CONSULTA DE SESIÓN
    $query = query('SELECT p.nombre, p.primer_apellido, p.segundo_apellido, ta.alumno_id, iag.grupo_id 
    from tr_alumno ta
    join '.$GLOBALS["db_datosGenerales"].'.personas p on p.persona_id=ta.alumno_id
    join inter_alumno_grupo iag on iag.alumno_id = ta.alumno_id
    join tr_grupo tg on tg.grupo_id = iag.grupo_id
    join inter_asignatura_grupo iasg on iasg.grupo_id = tg.grupo_id
    where iasg.asignatura_grupo_id ='.$id_asignatura_grupo.'
    union
    select p.nombre, p.primer_apellido, p.segundo_apellido, ta.alumno_id, iag.grupo_id  
    from '.$GLOBALS["db_datosGenerales"].'.personas p
    join tr_alumno ta on ta.alumno_id = p.persona_id
    join inter_alumno_asignatura_grupo ig on ig.alumno_id = ta.alumno_id
    join inter_asignatura_grupo iag on iag.asignatura_grupo_id = ig.asignatura_grupo_id
    join '.$GLOBALS["db_datosGenerales"].'.inter_orden_asignatura ioa on ioa.orden_asignatura_id = iag.orden_asignatura_id
    where iag.asignatura_grupo_id ='.$id_asignatura_grupo);

    
       $json_alumno_asignatura_grupo= array();
       while ($arreglo_alumno_asignatura_grupo = arreglo($query)){
          array_push($json_alumno_asignatura_grupo,$arreglo_alumno_asignatura_grupo);
       }
       
       //ingreso todas las escuelas que tiene este profesor
       
       if(num($query)){
    		$json = array("status" => 1, "msg" => "Se encontraron Alumnos en Asignatura y Grupo","Alumnos" => $json_alumno_asignatura_grupo);
    	 }else{
    		$json = array("status" => 0, "msg" => "No se encontraron Alumnos");
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