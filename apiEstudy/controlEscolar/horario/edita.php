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

    $edita = update('tr_horario',
    'asignatura_grupo_id = '.$id_asignatura_grupo.',
    dia = '.$dia.',
    hora_inicio = "'.$hora_inicio.'",
    hora_fin = "'.$hora_fin.'"',
    'horario_id = '.$id_horario);
    
    if($edita){
    $json = array("status" => 1, "msg" => "Se editó correctamnete");
    }else{
    $json = array("status" => 0, "msg" => "No se editó correctamente");
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
