<?php
include '../../jwt.php';
include '../../headers.php';

db('seguimiento');

try {
  if($_SERVER['REQUEST_METHOD'] == "POST"){
    foreach($_POST as $clave => $valor){
      ${$clave} = escape_cara($valor);
    }
    
      $usuario = Auth::GetData(
            $jwt  
        );
         
        $inserta = inserta('tr_campo_aspirante',
        'campo_formulario_id, aspirante_id, respuesta, fecha_creacion, estatus',
        ''.$id_campo_formulario.','.$id_aspirante.',"'.$respuesta.'",now(), 1');

               
       if($inserta){
        $json = array("status" => 1, "msg" => "Se insertó el campo aspirante correctamente");
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