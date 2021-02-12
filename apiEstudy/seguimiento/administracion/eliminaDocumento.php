<?php
include '../../jwt.php';
include '../../headers.php';
include '../../extras/archivo/class/archivo.class.php';
try {
 
  db ('seguimiento');

 $archivo = new Archivo();

  if($_SERVER['REQUEST_METHOD'] == "POST"){
    foreach($_POST as $clave => $valor){
      ${$clave} = escape_cara($valor);
    }
    
    $usuario = Auth::GetData(
        $jwt  
    );

    $estatus_documento = $archivo::elimina_archivo(
        $url_documento
    );

    if($estatus_documento){
        delete('inter_expediente', 'expediente_id = '.$id_expediente);
        // update('inter_expediente','url = NULL, estado_documento_id = 1','expediente_id = '.$id_expediente);
        $json = array("status" => 1, "msg" => "Se eliminó el documento correctamente");
    }else{
        $json = array("status" => 0, "msg" => "No se pudo eliminar el documento");
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

