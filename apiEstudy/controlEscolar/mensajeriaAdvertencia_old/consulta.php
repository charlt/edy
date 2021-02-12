<?php
include '../../jwt.php';
include '../../headers.php';

try {
  
  db ('controlEscolar');

  if($_SERVER['REQUEST_METHOD'] == "GET"){
    foreach($_GET as $clave => $valor){
      ${$clave} = escape_cara($valor);
    }

      $usuario = Auth::GetData(
            $jwt  
        );

    //SERVICIO DE CONSULTA DE SESIÓN
    $query_mensajes = query('SELECT tm.mensajeria_id, texto, advertencia, origen
     FROM tr_mensajeria tm
     join cat_advertencia ca on ca.advertencia_id = tm.advertencia_id
     WHERE persona_id = '.$usuario->id.' limit '.$limit_inicio.','.$limit_final);

        // $num_mensajes=num($query_mensajes);

        $json_mensajes= array();

        $i=0;    
        $entro=0;
       while ($arreglo_mensajes = arreglo($query_mensajes)){
          array_push($json_mensajes,$arreglo_mensajes);
            if($usuario->id != $arreglo_mensajes['origen']){
              update('tr_mensajeria','visto=1',
             'mensajeria_id='.$arreglo_mensajes['mensajeria_id']);
            }
          $i++;
       }
       
       //ingreso todas las escuelas que tiene este profesor
       
       if(num($query_mensajes)){
    		$json = array("status" => 1, "msg" => "Se encontraron mensajes","mensajes" => $json_mensajes);
    	 }else{
    		$json = array("status" => 0, "msg" => "No se encontraron mensajes");
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