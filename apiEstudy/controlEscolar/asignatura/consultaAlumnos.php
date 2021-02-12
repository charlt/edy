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
      $query = query('SELECT nombre, primer_apellido,segundo_apellido, materia_id, tm.alumno_id, asignatura_id, tm.grupo_id, estatus_materia_id, ciclo_id, grupo, nombre_grupo
      from tr_materia tm
      join '.$GLOBALS["db_controlEscolar"].'.tr_grupo tg on tg.grupo_id = tm.grupo_id
      join '.$GLOBALS["db_controlEscolar"].'.tr_alumno ta on ta.alumno_id = tm.alumno_id
      join '.$GLOBALS["db_datosGenerales"].'.personas p on p.persona_id = ta.alumno_id
      where asignatura_id = '.$id_asignatura.' and tm.estatus = 1');

    
       $json_asignaturas= array();
       while ($arreglo_asignaturas = arreglo($query)){
          array_push($json_asignaturas,$arreglo_asignaturas);
       }
       
       //ingreso todas las escuelas que tiene este profesor
       
       if(num($query)){
    		$json = array("status" => 1, "msg" => "Se encontraron Alumnos en Asignatura","Alumnos" => $json_asignaturas);
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