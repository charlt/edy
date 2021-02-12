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

        $elimina = query('delete from tr_om_respuesta   
        where reactivo_id = '.$id_reactivo.' and materia_fecha_actividad_id = '.$id_materia_fecha_actividad);
       
       //ingreso todas las carreras que tiene
       
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
