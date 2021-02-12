<?php
include '../../jwt.php';
include '../../headers.php';
try {

  db('controlEscolar');

  if($_SERVER['REQUEST_METHOD'] == "POST"){
    foreach($_POST as $clave => $valor){
      ${$clave} = escape_cara($valor);
    }
    
      $usuario = Auth::GetData(
            $jwt  
        );
         
      
      $edita_estatus = update('tr_docente','edicion_contenido='.$estatus,'docente_id ='.$id_docente);

        

      if($edita_estatus){
    		$json = array("status" => 1, "msg" => "Carga de contenido para docente actualizada");
    	 }else{
    		$json = array("status" => 0, "msg" => "No se logro actualizar");
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