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
    $query_elemento = query('SELECT *
     FROM tr_mc_elementos WHERE respuesta_id = '.$id_respuesta.' and estatus=1');

    
       $json_elemento = array();
       while ($arreglo_elemento = arreglo($query_elemento)){
          array_push($json_elemento, $arreglo_elemento);
       }
       
       //ingreso todas las escuelas que tiene este profesor
       
       if(num($query_elemento)){
    		$json = array("status" => 1, "msg" => "Se encontraron  elementos","elementos" => $json_elemento);
    	 }else{
    		$json = array("status" => 0, "msg" => "No se encontraron elementos");
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