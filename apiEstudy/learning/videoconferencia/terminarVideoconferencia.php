<?php
include '../../jwt.php';
include '../../headers.php';

try {

  db('learning');

  if($_SERVER['REQUEST_METHOD'] == "POST"){
    foreach($_POST as $clave => $valor){
      ${$clave} = escape_cara($valor);
    }
    
    //   $usuario = Auth::GetData(
    //         $jwt  
    //     );
             
        $edita = update('tr_videoconferencia','estatus = 2','videoconferencia_id = '.$id_videoconferencia);

        delete('inter_videoconferencia_zoom','videoconferencia_id = '.$id_videoconferencia);
       
       //ingreso todas las escuelas que tiene este profesor
       
       if($edita){
    		$json = array("status" => 1, "msg" => "Termino videoconferencia correctamente");
    	 }else{
    		$json = array("status" => 0, "msg" => "No se logró terminar videoconferencia");
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
