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
    $query = query('SELECT p.nombre, p.primer_apellido, p.segundo_apellido, ta.alumno_id, iag.grupo_id , ta.clave_alumno, p.curp,ta.situacion_alumno_id
    from tr_alumno ta
    join '.$GLOBALS["db_datosGenerales"].'.personas p on p.persona_id=ta.alumno_id
    join inter_alumno_grupo iag on iag.alumno_id = ta.alumno_id
    join tr_grupo tg on tg.grupo_id = iag.grupo_id
    where tg.grupo_id ='.$id_grupo.' and ta.estatus = 1 and iag.estatus=1 and p.estatus = 1
    order by p.primer_apellido asc ');

    
       $json_alumno_asignatura_grupo= array();
       while ($arreglo_alumno_asignatura_grupo = arreglo($query)){
          array_push($json_alumno_asignatura_grupo,$arreglo_alumno_asignatura_grupo);
       }
       
       //ingreso todas las escuelas que tiene este profesor
       
       if(num($query)){
    		$json = array("status" => 1, "msg" => "Se encontraron Alumnos en Asignatura y Grupo","alumnos" => $json_alumno_asignatura_grupo);
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