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

      $imagen = $archivo::guardar_archivo(
          "asignaturas/carga_imagen_previa", // la ruta del archivo
          $id_asignatura, //el id de la ruta
          $_FILES["imagen"],//la variable tipo file donde viene el archivo
          "img_asignatura_previa", //el nombre que va a llevar el archivo a guardar
          1, //tipo de archivos 
          null //tamaño de archivo
        );

                    
        //la función guarda archivo devuelve un estatus, que para mostrar un mensaje
        //en el formato requerido lo enviamos a mensaje status
        //si status es diferente de uno el archivo no se guardo correctamente
        if($imagen['status'] == 1){
          update('cat_asignaturas','url_imagen_previa = "'.$imagen['url'].'"','asignatura_id = '.$id_asignatura);
          $json = array("status" => 1, "msg" => "Se actualizó la imagen correctamente");
         }else{
          $json = $imagen;
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

