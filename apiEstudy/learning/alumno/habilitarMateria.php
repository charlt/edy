<?php
include '../../jwt.php';
include '../../headers.php';

db ('learning');

try {

  if($_SERVER['REQUEST_METHOD'] == "POST"){
    
    foreach ($_POST as $clave => $valor) {
        ${$clave} = escape_cara($valor);
    }

    $usuario = Auth::GetData(
        $jwt  
    );

    $inserta_materia = inserta_last_id('tr_materia',
    'alumno_id,asignatura_grupo_id,tipo_materia_id,estatus_materia_id,estatus',
    $usuario->id.','.$id_asignatura_grupo.',1,1,1');

    if($inserta_materia){
    	$json = array("status" => 1, "msg" => "Se Habilitó la materia exitosamente ","idMateria" => $inserta_materia);
    }else{
    	$json = array("status" => 0, "msg" => "No se logró habilitar la materia");

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