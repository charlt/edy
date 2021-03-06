<?php
include '../../jwt.php';
include '../../headers.php';

try {
  if($_SERVER['REQUEST_METHOD'] == "GET"){
    foreach($_GET as $clave => $valor){
      ${$clave} = escape_cara($valor);
    }
    
    $usuario = Auth::GetData(
            $jwt 
    );
         
        $elimina = query('update tr_bitacora_sesion 
        set estatus = 0
        where bitacora_sesion_id = '.$id_bitacora_sesion);
       
       //ingreso todas las escuelas que tiene este profesor
       
       if($elimina){
    		$json = array("status" => 1, "msg" => "Se eliminó la sesion correctamente");
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