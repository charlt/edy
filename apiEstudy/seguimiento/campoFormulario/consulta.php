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
         
        $query=arreglo(query('SELECT * from tr_campo_formulario where campo_formulario_id='.$id_campo_formulario));
        
       if(isset($query)){
    		$json = array("status" => 1, "msg" => "Se encontraron campos formularios","formulario"=>$query);
    	 }else{
    		$json = array("status" => 0, "msg" => "No se encontraron los formularios");
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