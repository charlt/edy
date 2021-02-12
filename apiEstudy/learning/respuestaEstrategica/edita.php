<?php
include '../../jwt.php';
include '../../headers.php';

try {

  db('learning');

  if($_SERVER['REQUEST_METHOD'] == "POST"){
    foreach($_POST as $clave => $valor){
      ${$clave} = escape_cara($valor);
    }
    
      $usuario = Auth::GetData(
            $jwt  
        );
         

        $edita = update('tr_qq_respuesta',
         'respuesta1 = "'.$respuesta1.'",
          respuesta2 = "'.$respuesta2.'",
          respuesta3 = "'.$respuesta3.'",
         fecha_actualiza = now()',
        'respuesta_id = '.$id_respuesta);


       
       //ingreso todas las escuelas que tiene este profesor
       
       if($edita){
    		$json = array("status" => 1, "msg" => "Se actualizo la respuesta correctamente");
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
