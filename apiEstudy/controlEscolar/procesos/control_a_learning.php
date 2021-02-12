<?php

db('controlEscolar');
include '../../jwt.php';
include '../../headers.php';

try {
    
  db('controlEscolar');

  if($_SERVER['REQUEST_METHOD'] == "GET"){
    foreach($_GET as $clave => $valor){
      ${$clave} = escape_cara($valor);
    }

    $query_alumnos_grupo = query('insert into '.$GLOBALS['db_learning'].'.tr_materia(asignatura_grupo_id,estatus_materia_id,alumno_id,estatus)
    select iag.asignatura_grupo_id, 1 as estatus_materia_id, ialg.alumno_id, 1 as estatus from inter_alumno_grupo ialg
    join inter_asignatura_grupo iag on iag.grupo_id = ialg.grupo_id
    where iag.estatus = 1 and ialg.estatus = 1');
    

}else{
    $json = array("status" => 0, "msg" => "Método no aceptado");
}

/* Output header */

echo json_encode($json);

} catch (Exception $e) {
  $json = array("status" => 0, "msg" =>  $e->getMessage());

  echo json_encode($json);
}
