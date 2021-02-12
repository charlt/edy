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

      $contenido = $archivo::guardar_archivo(
          "asignaturas/carga_contenido", // la ruta del archivo
          $id_asignatura, //el id de la ruta
          $_FILES["archivo"],//la variable tipo file donde viene el archivo
          "archivo_asignatura", //el nombre que va a llevar el archivo a guardar
          2, //tipo de archivos 
          null //tamaño de archivo
        );

        if($contenido['status'] == 1){
          update('cat_asignaturas','url_contenido = "'.$contenido['url'].'"','asignatura_id = '.$id_asignatura);
          $json = array("status" => 1, "msg" => "Se actualizó archivo correctamente");
         }else{
          $json = $contenido;
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

