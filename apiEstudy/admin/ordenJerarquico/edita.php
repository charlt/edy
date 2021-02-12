<?php
include '../../jwt.php';
include '../../headers.php';

try {

  db('datosGenerales');

  if($_SERVER['REQUEST_METHOD'] == "POST"){
    foreach($_POST as $clave => $valor){
      ${$clave} = escape_cara($valor);
    }
    
      $usuario = Auth::GetData(
            $jwt  
        );
         
          
        $edita_cat_orden_jerarquico = update('cat_orden_jerarquico',
        'orden_jerarquico = "'.$orden_jerarquico.'",
        orden_jerarquico_descripcion = "'.$descripcion_orden_jerarquico.'",
        fecha_actualiza = now(), 
        usuario_actualiza = current_user(),
        estatus = 1',
        'orden_jerarquico_id = '.$id_orden_jerarquico);
       
       if($edita_cat_orden_jerarquico){
          $json = array("status" => 1, "msg" => "Se actualizó el plan jerarquico correctamente");

    	 }else{
    		$json = array("status" => 0, "msg" => "No se logró actualizar el usuario");
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
