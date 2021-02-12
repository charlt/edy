<?php
include '../../jwt.php';
include '../../headers.php';
include '../../extras/archivo/class/archivo.class.php';

try {

  db('controlEscolar');

  $archivo = new Archivo();

  if($_SERVER['REQUEST_METHOD'] == "POST"){
    foreach($_POST as $clave => $valor){
      ${$clave} = escape_cara($valor);
    }
    
      $usuario = Auth::GetData(
            $jwt  
        );

         
        //grupo es una cadena no un número
        $inserta = inserta_last_id('tr_avisos_grupo', 'titulo, mensaje, docente_id, asignatura_grupo_id,
        fecha_inicio, fecha_fin, fecha_crea, usuario_crea, estatus, importancia_aviso_id ',
        '"'.$titulo.'","'.$mensaje.'",'.$id_docente.','.$id_asignatura_grupo.'
        ,"'.$fecha_inicio.'", "'.$fecha_fin.' 23:59:59", now(), current_user(),1,'.$id_importancia_aviso);        

          

       
       if($inserta){

        if(isset($_FILES["contenido"])){ //valido que exista la imagen
               
          $adjunto = $archivo::guardar_archivo(
            "grupo/avisos", // la ruta del archivo
            $inserta, //el id de la ruta
            $_FILES["contenido"],//la variable tipo file donde viene el archivo
            "adjunto", //el nombre que va a llevar el archivo a guardar
            null, //tipo de archivo
            20 //tamaño máximo del archivo
          );

          
          if($adjunto['status'] == 1){
            update('tr_avisos_grupo','adjunto="'.$adjunto['url'].'"','avisos_grupo_id='.$inserta);
            $json = array("status" => 1, "msg" => "Se insertó el aviso con adjunto correctamente");
          }else{
            $json = $adjunto;
          }

        }else{
          $json = array("status" => 1, "msg" => "Se insertó el aviso correctamente");
        }
      }else{
    		$json = array("status" => 0, "msg" => "No se logró insertar");
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
