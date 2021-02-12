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

    $update = update('asistencia','estatus = 1', 'asignatura_grupo_id ='.$id_asignatura_grupo.' and fecha = "'.$fecha.'"');
    
    //ingreso todas las escuelas que tiene este profesor
    
    if($update){
     $json = array("status" => 1, "msg" => "Asistencias guardadas correctamente");
    }else{
     $json = array("status" => 0, "msg" => "No se pudieron guardar las asistencias");
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
