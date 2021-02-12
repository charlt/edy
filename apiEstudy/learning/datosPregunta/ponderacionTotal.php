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
    $query_ponderacion = query('SELECT SUM(cc.ponderacion) as sumaponderacion FROM tr_datos_pregunta cc
     join tr_actividad cd ON cd.actividad_id = cc.actividad_id
     WHERE cc.estatus = 1 and cc.actividad_id = '.$id_actividad 
     ,'GROUP BY (actividad_id)');

       $arreglo_ponderacion = arreglo($query_ponderacion);

       $ponderacion;

          $ponderacion=$arreglo_ponderacion['sumaponderacion'];
          
     
       if(num($query_ponderacion) && ($ponderacion)!=NULL){
    		$json = array("status" => 1, "msg" => "La suma de las ponderaciones es","ponderacionTotal" => $ponderacion);
    	 }else{
        $json = array("status" => 0, "msg" => "No hay ponderacion");
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