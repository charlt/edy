<?php
include '../../jwt.php';
include '../../headers.php';

try {

  db ('pagos');


  if($_SERVER['REQUEST_METHOD'] == "GET"){
    foreach($_GET as $clave => $valor){
      ${$clave} = escape_cara($valor);
    }
     

      $usuario = Auth::GetData(
            $jwt  
        );

    $query_descuento = query('SELECT * FROM cat_descuento WHERE descuento_id = '.$id_descuento.' and estatus =1 ');
    
       $json_descuento = array();
       while ($arreglo_descuento = arreglo($query_descuento)){
          array_push($json_descuento,$arreglo_descuento);
       }
       
       if(num($query_descuento)){
    		$json = array("status" => 1, "msg" => "Se encontró descuento","descuento" => $json_descuento);
    	 }else{
    		$json = array("status" => 0, "msg" => "No se encontró descuento");
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
