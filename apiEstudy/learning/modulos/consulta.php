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
    $query_modulos = query('SELECT *
     FROM cat_modulos WHERE modulo_id = '.$id_modulo);

    
       $json_modulos= array();
       while ($arreglo_modulos = arreglo($query_modulos)){
          array_push($json_modulos,$arreglo_modulos);
       }
       
       //ingreso todas las escuelas que tiene este profesor
       
       if(num($query_modulos)){
    		$json = array("status" => 1, "msg" => "Se encontro el Bloque","modulo" => $json_modulos);
    	 }else{
    		$json = array("status" => 0, "msg" => "No se encontro el Bloque");
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