<?php
include '../../jwt.php';
include '../../headers.php';
include '../../extras/archivo/class/archivo.class.php';
try {
 
  db ('datosGenerales');

 $archivo = new Archivo();


  if($_SERVER['REQUEST_METHOD'] == "POST"){
    foreach($_POST as $clave => $valor){
      ${$clave} = escape_cara($valor);
    }
    
    $usuario = Auth::GetData(
        $jwt  
    );

    $estatus_contenido = $archivo::elimina_archivo(
        $url_contenido
    );

    if($estatus_contenido){
        update('cat_asignaturas','url_contenido = NULL','asignatura_id = '.$id_asignatura);
        $json = array("status" => 1, "msg" => "Se eliminó el contenido correctamente");
    }else{
        $json = array("status" => 0, "msg" => "No se pudo eliminar el contenido");
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

