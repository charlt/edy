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

        $query=query('SELECT  tdp.datos_pregunta_id, respuesta_id from tr_materia_fecha_actividad tmfa
        join tr_datos_pregunta tdp on tdp.actividad_id = tmfa.actividad_id
        left join (select datos_pregunta_id,respuesta_id from tr_respuesta 
        where materia_fecha_actividad_id='.$id_materia_fecha_actividad.') tr on tr.datos_pregunta_id = tdp.datos_pregunta_id
        where tmfa.materia_fecha_actividad_id = '.$id_materia_fecha_actividad. ' and tdp.estatus = 1 and ponderacion != 0');
        
        $json=array();
        while($arreglo=arreglo($query)){

            if($arreglo['respuesta_id']==''){
                array_push($json, $arreglo['datos_pregunta_id']);
            }

        }

      if(sizeof($json) > 0){
    		$json = array("status" => 0, "msg" => "Se encontraron actividades pendientes.","actividades"=>$json);
    	 }else{
    		$json = array("status" => 1, "msg" => "No se encontraron actividades pendientes");
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
