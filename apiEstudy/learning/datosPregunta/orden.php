<?php
include '../../jwt.php';
include '../../headers.php';
include './class/pregunta.class.php';

$pregunta = new Pregunta();
try {
  
   db ('learning');

  if($_SERVER['REQUEST_METHOD'] == "GET"){
    foreach($_GET as $clave => $valor){
      ${$clave} = escape_cara($valor);
    }
      $usuario = Auth::GetData(
            $jwt  
        );
        

        $pregunta::orden($orden_nuevo,$id_actividad,$id_dato_pregunta);
       
        
       if($pregunta){
    		$json = array("status" => 1, "msg" => "Se ordenó correctamente");
    	 }else{
    		$json = array("status" => 0, "msg" => "No se logró ordenar");
       }

  }else{
  	$json = array("status" => 0, "msg" => "Método no aceptado");
  }

  //  Output header 

  echo json_encode($json);

} catch (Exception $e) {
    $json = array("status" => 0, "msg" =>  $e->getMessage());

    echo json_encode($json);
}
