<?php
include '../../jwt.php';
include '../../headers.php';

try {
  
  db('datosGenerales');

  if($_SERVER['REQUEST_METHOD'] == "GET"){
    foreach($_GET as $clave => $valor){
      ${$clave} = escape_cara($valor);
    }

      $usuario = Auth::GetData(
            $jwt  
        );

    //SERVICIO DE CONSULTA DE SESIÓN
    $query_orden_jearquico = query('SELECT  coj.orden_jerarquico_id, coj.orden_jerarquico, coj.orden_jerarquico_descripcion
    FROM cat_orden_jerarquico coj
    WHERE orden_jerarquico_id = '.$id_orden_jerarquico.' and coj.estatus=1');

    
       $json_orden_jearquico = array();
       while ($arreglo_orden_jearquico = arreglo($query_orden_jearquico)){
          array_push($json_orden_jearquico,$arreglo_orden_jearquico);
       }
       
       //ingreso todas las escuelas que tiene este profesor
       
       if(num($query_orden_jearquico)){
    		$json = array("status" => 1, "msg" => "Se encontraron ordenes Jerarquicos","orden" => $json_orden_jearquico);
    	 }else{
    		$json = array("status" => 0, "msg" => "No se encontraron ordenes jerarquicos");
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
