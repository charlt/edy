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
    $query_categoria = query('SELECT *
     FROM tr_rb_categoria WHERE rubrica_id = '.$id_rubrica.' and estatus=1');

    
       $json_categoria = array();
       while ($arreglo_categoria = arreglo($query_categoria)){
          array_push($json_categoria, $arreglo_categoria);
       }
       
       //ingreso todas las escuelas que tiene este profesor
       
       if(num($query_categoria)){
    		$json = array("status" => 1, "msg" => "Se encontraron las categorias","categorias" => $json_categoria);
    	 }else{
    		$json = array("status" => 0, "msg" => "No se encontraron categorias");
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