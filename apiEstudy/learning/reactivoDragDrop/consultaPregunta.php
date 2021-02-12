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
    $query_reactivos = query('SELECT reactivo_id, pregunta_id, reactivo_desc, imagen, ancho, alto, fecha_creacion, fecha_actualiza, estatus,orden
     FROM tr_dd_reactivos WHERE pregunta_id = '.$id_pregunta);

    
       $json_reactivos= array();
       $json_respuesta = array();
       while ($arreglo_reactivos = arreglo($query_reactivos)){

          if (isset($id_materia_fecha_actividad)) {
            $query_respuesta = query('select respuesta_id,orden, reactivo_id from tr_dd_respuesta where reactivo_id = '.$arreglo_reactivos['reactivo_id'].' and materia_fecha_actividad_id = '.$id_materia_fecha_actividad);
            $arreglo_respuesta = arreglo($query_respuesta);
           
          }

          array_push($json_reactivos,$arreglo_reactivos);


       }
       
       if(num($query_reactivos)){
    		$json = array("status" => 1, "msg" => "Se encontraron reactivos","reactivos" => $json_reactivos);
    	 }else{
    		$json = array("status" => 0, "msg" => "No se encontraron reactivos");
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