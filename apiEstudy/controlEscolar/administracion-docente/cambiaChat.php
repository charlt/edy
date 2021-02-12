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
         
        

        $edita_estatus = update('tr_docente','activa_chat='.$estatus,'estatus = 1');

        

      if($edita_estatus){
        if($estatus == 1){
          $msg = "El docente es visible para los alumnos";
        }else{
          $msg = "El docente está oculto para los alumnos";
        }
    		$json = array("status" => 1, "msg" => $msg);
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