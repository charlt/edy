<?php
include '../../jwt.php';
include '../../headers.php';
include '../formulario/class/formulario.class.php';
try {
  
  db('seguimiento');

  $form = new Formulario();
  

  if($_SERVER['REQUEST_METHOD'] == "POST"){
    foreach($_POST as $clave => $valor){
      ${$clave} = escape_cara($valor);
    }
    
    $usuario = Auth::GetData(
        $jwt  
    );

    $completo = update('tr_aspirante','cleaver_completo=1','aspirante_id='.$usuario->id);

    // $form::validar_solicitud($usuario->id);
    
    if($completo){
      $json = array("status" => 1, "msg" => "Se editó cleaver correctamente");
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
