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
        

        
    //SERVICIO DE CONSULTA DE SESIÓN
    
      $query_pregunta = query('SELECT * FROM tr_rubrica 
      WHERE rubrica_id = '.$id_rubrica.' and estatus=1');
       
       $arreglo_pregunta = arreglo($query_pregunta);
       $json_pregunta = $arreglo_pregunta;
       
       //ingreso todas las escuelas que tiene este profesor
       
       if(num($query_pregunta)){
    		$json = array("status" => 1, "msg" => "Se encontró rubrica","rubrica" => $json_pregunta);
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