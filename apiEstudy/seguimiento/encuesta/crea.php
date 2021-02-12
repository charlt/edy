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
         
        $inserta = inserta('tr_encuesta',
        'titulo, instruccion, persona_id, obligatorio, porcentaje, fecha_creacion, usuario_crea, estatus',
        ' "'.$titulo.'","'.$instruccion.'",'.$id_persona.','.$obligatorio.','.$porcentaje.', now(), current_user(),1');

        
       
       //ingreso todas las escuelas que tiene este profesor
       
       if($inserta){
        $json = array("status" => 1, "msg" => "Se insertó encuesta correctamente");
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