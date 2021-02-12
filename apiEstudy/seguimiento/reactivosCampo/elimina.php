<?php
include '../../jwt.php';
include '../../headers.php';

db ('seguimiento');

try {
  if($_SERVER['REQUEST_METHOD'] == "GET"){
    foreach($_GET as $clave => $valor){
      ${$clave} = escape_cara($valor);
    }
    
      $usuario = Auth::GetData(
            $jwt  
        );
         
          $elimina = delete('tr_reactivos_campo',  
          'campo_formulario_id = '.$id_campo_formulario);
       
       if($elimina){
    		$json = array("status" => 1, "msg" => "Se eliminó el formulario correctamente");
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