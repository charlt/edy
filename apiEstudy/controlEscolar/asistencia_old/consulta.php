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
    $query_asistencia = query('SELECT a.clave_alumno, p.nombre, p.primer_apellido, p.segundo_apellido, a.alumno_id , a1.*
    FROM tr_alumno a
    join '.$GLOBALS['db_datosGenerales'].'.personas p on p.persona_id = a.alumno_id
    join asistencia a1 on a.alumno_id = a1.alumno_id
    where asignatura_grupo_id = '.$id_asignatura_grupo);

    $json_asistencia = array();
       while ($arreglo_asistencia = arreglo($query_asistencia)){
          array_push($json_asistencia,$arreglo_asistencia);
       }
    
    //ingreso todas las escuelas que tiene este profesor
    
    if(num($query_asistencia)){
     $json = array("status" => 1, "msg" => "Se encontraron alumnos","alumnos" => $json_asistencia);
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
