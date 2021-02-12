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

    if (isset($evento_id)) {
      $msg = 'editó';
      $inserta = update('cat_eventos_calendario', 'persona_id = '.$usuario->id.', ciclo_id = "'.$ciclo_id.'", 
      evento_nombre = "'.$nombre.'", evento_desc = "'.$descripcion.'", color = "'.$color.'",
      fecha_inicio = "'.$fecha.'", fecha_fin = "'.$fecha_fin.'"', 'evento_id = '.$evento_id);
    }else {
      $msg = 'insertó';
      $inserta = inserta('cat_eventos_calendario', 'persona_id, ciclo_id, evento_nombre, evento_desc, color,
      fecha_inicio, fecha_fin, fecha_creacion, estatus ',
      ''.$usuario->id.',"'.$ciclo_id.'","'.$nombre.'","'.$descripcion.'",
      "'.$color.'","'.$fecha.'", "'.$fecha_fin.'", now(), 1');                    
    }
   
    if($inserta){
        $json = array("status" => 1, "msg" => "Se $msg el evento correctamente");
    }else{
        $json = array("status" => 0, "msg" => "No se logró insertar");
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
