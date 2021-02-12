<?php
include '../../jwt.php';
include '../../headers.php';

try {

  db ('learning');

  if($_SERVER['REQUEST_METHOD'] == "GET"){
    foreach($_GET as $clave => $valor){
      ${$clave} = escape_cara($valor);
    }
    
      $usuario = Auth::GetData(
            $jwt  
        );

        $elimina = query('delete tor from tr_rc_respuesta tor
        join tr_rc_reactivos tr on tr.reactivo_id = tor.reactivo_id 
        where pregunta_id = '.$id_pregunta.' and materia_fecha_actividad_id = '.$id_materia_fecha_actividad);
       
       if($elimina){
    		$json = array("status" => 1, "msg" => "Se eliminó la respuesta correctamente");
    	 }else{
    		$json = array("status" => 0, "msg" => "No se logró eliminar");
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
