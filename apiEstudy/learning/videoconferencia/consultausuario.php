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
      
    
      $query = query('SELECT usuario_zoom_id,apikey,apisecret,idmeeting,usuario,password FROM tr_usuario_zoom 
      WHERE persona_id = '.$id_persona.' and estatus=1');
       
       $arreglo = arreglo($query);
       
       //ingreso todas las escuelas que tiene este profesor
       
       if(num($query)){
    		$json = array("status" => 1, "msg" => "Se encontró usuario de videconferencia","usuario" => $arreglo);
    	 }else{
    		$json = array("status" => 0, "msg" => "No se encontró usuario");
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