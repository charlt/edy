<?php
include '../../jwt.php';
include '../../headers.php';
include '../../extras/archivo/class/archivo.php';

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


          $edita = update('tr_sq_pregunta',
          'datos_pregunta_id = '.$id_datos_pregunta.',
          pregunta = "'.$pregunta.'",
          visualiza_flg = '.$visualiza_flg.',
          contenido = "'.$contenido.'",
          fecha_actualiza = now(),
          momento = "'.$momento.'",
          tipo = '.$tipo,
          'pregunta_id = '.$id_pregunta);

          if($edita){
            $json = array("status" => 1, "msg" => "Se actualizó la pregunta correctamente");
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