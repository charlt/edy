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
         
        $imagen = $archivo::guardar_archivo_main(
        'imagen_perfil',
        $usuario->id_usuario,
        $_FILES["imagen"],//la variable tipo file donde viene el archivo
        "perfil", //el nombre de la tabla
        1,
        null,//tamaño de la extension
        'archivos_alumno',//carpeta propietario
        $usuario->id //archivo propietario
      ); 

        
          if($imagen['status'] == 1 ){
            update('usuarios','url_perfil ="'.$imagen['url'].'"','usuario_id ='.$usuario->id_usuario);

          $json = array("status" => 1, "msg" => "Se inserto la imagen correctamente", "url" => $imagen['url']);
         }else{
          $json = array("status" => 0, "msg" => "No se logró insertar la imagen");
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

