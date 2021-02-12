<?php
include '../../jwt.php';
include '../../headers.php';
include '../formulario/class/formulario.class.php';

try {
  
  db('seguimiento');
  $form = new Formulario();

  if($_SERVER['REQUEST_METHOD'] == "GET"){
    foreach($_GET as $clave => $valor){
      ${$clave} = escape_cara($valor);
    }
    
    $usuario = Auth::GetData(
        $jwt  
    );

    $modifica_terminos = update('tr_aspirante','info_personal_completa=1','aspirante_id='.$id_persona);

    $form::validar_solicitud($id_persona);

    if($modifica_terminos){
      $json = array("status" => 1, "msg" => "Se actualizó la información personal correctamente");
     }else{
      $json = array("status" => 0, "msg" => "No se actualizó correctamente");
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
