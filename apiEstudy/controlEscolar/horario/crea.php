<?php
include '../../jwt.php';
include '../../headers.php';

try {
  
  db('controlEscolar');

  if($_SERVER['REQUEST_METHOD'] == "POST"){
    foreach($_POST as $clave => $valor){
      ${$clave} = escape_cara($valor);
    }

      $usuario = Auth::GetData(
            $jwt  
        );

    $crea = inserta('tr_horario','asignatura_grupo_id,dia,hora_inicio,hora_fin,estatus',
    ''.$id_asignatura_grupo.','.$dia.',"'.$hora_inicio.'","'.$hora_fin.'",1');


    if($crea){
    $json = array("status" => 1, "msg" => "Se insertó horario correctamente");
    }else{
    $json = array("status" => 0, "msg" => "No se insertó correctamnete");
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
