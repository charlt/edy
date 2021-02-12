<?php
include '../../jwt.php';
include '../../headers.php';
include '../../extras/archivo/class/archivo.class.php';
try {
 
//   db ('pagos');

 $adjunto = new Archivo();


  if($_SERVER['REQUEST_METHOD'] == "POST"){
    foreach($_POST as $clave => $valor){
      ${$clave} = escape_cara($valor);
    }
    
      $usuario = Auth::GetData(
           $jwt  
        );
         
        $archivo = $adjunto::guardar_archivo_main(
        'comprobante_transferencia',
        $usuario->id_usuario,
        $_FILES["archivo"],//la variable tipo file donde viene el archivo
        "comprobante", //el nombre de la tabla
        0,
        null,//tamaño de la extension
        'archivos_alumno',//carpeta propietario
        $usuario->id //archivo propietario
      ); 
          if($archivo['status'] == 1 ){
             $inserta = inserta(''.$GLOBALS["db_pagos"].'.tr_pago_externo','comprobante, solicitud_pago_id, estatus','"'.$archivo['url'].'",'.$solicitud_pago_id.',1');
             $actualiza = query('UPDATE '.$GLOBALS["db_pagos"].'.tr_solicitud_pago set estatus_solicitud_pago_id = 2,forma_pago_id = 5 where solicitud_pago_id ='.$solicitud_pago_id.'');
            if ($inserta && $actualiza) {
                $json = array("status" => 1, "msg" => "Se guardó el archivo correctamente");
            }else{
                $json = array("status" => 0, "msg" => "No se logró guardar el archivo");
            }
         }else{
          $json = array("status" => 0, "msg" => "No se logró guardar el archivo");
         }

        /* Output header */
}else{
    $json = array("status" => 0, "msg" => "Método no aceptado");
}

echo json_encode($json);

} catch (Exception $e) {
    $json = array("status" => 0, "msg" =>  $e->getMessage());

    echo json_encode($json);
}


 
?>

