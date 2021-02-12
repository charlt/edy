<?php
include '../../jwt.php';
include '../../headers.php';
include '../../extras/archivo/class/archivo.class.php';

try {

  db ('learning');

  $archivo = new Archivo();


  if($_SERVER['REQUEST_METHOD'] == "POST"){
    foreach($_POST as $clave => $valor){
      ${$clave} = escape_cara($valor);
    }
    
      $usuario = Auth::GetData(
            $jwt  
        );

        if(isset($id_respuesta_padre)){
          
          $edita = update('tr_fr_respuesta',
          'respuesta_padre_id = '.$id_respuesta_padre.',
          pregunta_id = '.$id_pregunta.',
          respuesta = "'.$respuesta.'",
          flg_moderador = '.$flg_moderador.',
          fecha_actualiza = now()',
          'respuesta_id = '.$id_respuesta);
        }else {
          $edita = update('tr_fr_respuesta',
          'pregunta_id = '.$id_pregunta.',
          respuesta = "'.$respuesta.'",
          flg_moderador = '.$flg_moderador.',
          fecha_actualiza = now()',
          'respuesta_id = '.$id_respuesta);
        }


          if($edita){

            if(isset($_FILES["archivo"]) ){ //valido que exista la imagen

              $adjunto=$archivo::guardar_archivo_main(
                  "respuesta_foro", //la ruta a insertar
                  $id_respuesta, //id de la ruta
                  $_FILES["archivo"],//la variable tipo file donde viene el archivo
                  "respuesta",//nombre del archivo
                  0,
                  null,
                  "archivos_alumno",
                  $usuario->id
                  ); //tamaño de la extensiomn    

                if($adjunto['status'] == 1){          
                    $edita=update('tr_fr_respuesta','contenido = "'.$adjunto['url'].'"','respuesta_id='.$id_respuesta );
                    $json = array("status" => 1, "msg" => "Se actualizó respuesta con adjunto correctamente");
                }else{
                    $json = $adjunto;
                }
                          
              }else{ 
              //aunque no se haya guardado la imagen, el registro se guardo correctamente
              $json = array("status" => 1, "msg" => "Se actualizó la respuesta correctamente");
            }
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