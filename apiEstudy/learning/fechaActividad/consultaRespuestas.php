<?php
include '../../jwt.php';
include '../../headers.php';

try {
  
  db('learning');


  if($_SERVER['REQUEST_METHOD'] == "GET"){
    foreach($_GET as $clave => $valor){
      ${$clave} = escape_cara($valor);
    }

      $usuario = Auth::GetData(
            $jwt  
        );

    //SERVICIO DE CONSULTA DE SESIÓN
        
    $query=query('SELECT * from tr_respuesta where materia_fecha_actividad_id ='.$id_materia_fecha_actividad);

    $json_respuestas=array();
      while($arreglo=arreglo($query)){
          array_push($json_respuestas, $arreglo);
      }
              
       if(num($query)){
    		$json = array("status" => 1, "msg" => "Se encontraron respuestas","respuestas"=>$json_respuestas);
    	 }else{ 
    		$json = array("status" => 0, "msg" => "No se encontraron respuestas");
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
