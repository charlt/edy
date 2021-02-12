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


    $query = query('select dia,hora_inicio, hora_fin from tr_horario where asignatura_grupo_id = '.$id_asignatura_grupo.' and horario_id = '.$id_horario.' and estatus = 1');
    $json = array();
    while($arreglo_horario = arreglo($query)){
        array_push($json, $arreglo_horario);
    }
        
    if(num($query)){
    $json = array("status" => 1, "msg" => "Se encontró horario","horario" => $json);
    }else{
    $json = array("status" => 0, "msg" => "No se encontró información historial");
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
