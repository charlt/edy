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
         
        $inserta = inserta('tr_campo_formulario',
        'pregunta, descripcion, formulario_id, tipo_campo_id, obligatorio, mensaje_error, fecha_creacion, usuario_crea, estatus',
        ' "'.$pregunta.'","'.$descripcion.'",'.$id_formulario.','.$id_tipo_campo.','.$obligatorio.',"'.$mensaje_error.'", now(), current_user(),1');

               
       if($inserta){
        $json = array("status" => 1, "msg" => "Se insertó el campo formulario correctamente");
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