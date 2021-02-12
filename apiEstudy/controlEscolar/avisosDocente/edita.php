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


        $script_adjunto = '';

        if(isset($_FILES["contenido"])){ //valido que exista la imagen

              $adjunto = $archivo::guardar_archivo(
                "grupo/avisos", // la ruta del archivo
                $id_aviso, //el id de la ruta
                $_FILES["contenido"],//la variable tipo file donde viene el archivo
                "adjunto", //el nombre que va a llevar el archivo a guardar
                null, //tipo de archivo
                20 //tamaño máximo del archivo
              );

            if($adjunto['status'] == 1)
              $script_adjunto = 'adjunto = "'.$adjunto['url'].'",';
        }


        $edita = update('tr_avisos_grupo', 
            'titulo = "'.$titulo.'",
            mensaje = "'.$mensaje.'",
            '.$script_adjunto.'
            docente_id = '.$id_docente.',
            importancia_aviso_id = '.$id_importancia_aviso.',
            asignatura_grupo_id = '.$id_asignatura_grupo.',
            fecha_inicio="'.$fecha_inicio.'",
            fecha_fin = "'.$fecha_fin.' 23:59:59",
            fecha_actualiza = now(),
            usuario_actualiza = current_user()',
            'avisos_grupo_id = '.$id_aviso);                  
       
       if($edita){
    		$json = array("status" => 1, "msg" => "Se actualizó el aviso correctamente");
    	 }else{
    		$json = array("status" => 0, "msg" => "No se logró actualizar");
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
