<?php
include '../../jwt.php';
include '../../headers.php';
include './class/pregunta.class.php';

try {
  
  db ('learning');

  $Pregunta = new Pregunta();

  if($_SERVER['REQUEST_METHOD'] == "GET"){
    foreach($_GET as $clave => $valor){
      ${$clave} = escape_cara($valor);
    }

      $usuario = Auth::GetData(
            $jwt  
        );

    //SERVICIO DE CONSULTA DE SESIÓN
    $arreglo_pregunta = $Pregunta::consulta($id_datos_pregunta);
       
       //ingreso todas las escuelas que tiene este profesor
       
       if($arreglo_pregunta){
    		$json = array("status" => 1, "msg" => "Se encontro la pregunta","pregunta" => $arreglo_pregunta);
    	 }else{
    		$json = array("status" => 0, "msg" => "No se encontro la pregunta");
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