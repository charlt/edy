<?php
include '../../jwt.php';
include '../../headers.php';

try {

  db('pagos');

  if($_SERVER['REQUEST_METHOD'] == "POST"){
    foreach($_POST as $clave => $valor){
      ${$clave} = escape_cara($valor);
    }
    
    $usuario = Auth::GetData(
      $jwt  
    );       

    $inserta = inserta('cat_porcentaje_fecha_pago','suscripcion_id,tipo_porcentaje,descripcion,porcentaje,dia_inicio,dia_fin,estatus,valor',
      ''.$id_suscripcion.','.$tipo.',null,'.$porcentaje.','.$inicio.','.$fin.',1,'.$id_valor.'');
      
    if($inserta){
      $json = array("status" => 1, "msg" => "Se insertó el registro correctamente");
    }else{
      $json = array("status" => 1, "msg" => "No se insertó");
    }

  }else{
  	$json = array("status" => 0, "msg" => "Método no aceptado");
  }

  echo json_encode($json);

} catch (Exception $e) {
    $json = array("status" => 0, "msg" =>  $e->getMessage());

    echo json_encode($json);
}


