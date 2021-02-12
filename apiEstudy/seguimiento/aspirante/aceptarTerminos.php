<?php
include '../../jwt.php';
include '../../headers.php';

try {
  
  db('seguimiento');

  if($_SERVER['REQUEST_METHOD'] == "GET"){
    foreach($_GET as $clave => $valor){
      ${$clave} = escape_cara($valor);
    }
    
    $usuario = Auth::GetData(
        $jwt  
    );

    $modifica_terminos = update('tr_aspirante','paso=2, aceptacion_terminos=1, carrera_id='.$id_carrera,'aspirante_id='.$usuario->id);
    if($modifica_terminos){
      $inserta_accion_terminos = inserta($GLOBALS['db_datosGenerales'].'.tr_bitacora_accion','accion_id,usuario_id','3,'.$usuario->id);
    }
    if($inserta_accion_terminos){
      $json = array("status" => 1, "msg" => "Se actualizó el termino correctamente");
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
