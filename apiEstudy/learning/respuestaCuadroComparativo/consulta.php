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
    
      $query_pregunta = query('SELECT tr.*
       FROM tr_cc_pregunta tp
       join tr_cc_respuesta tr on tr.pregunta_id = tp.pregunta_id
      WHERE tp.pregunta_id = '.$id_pregunta.' and tr.materia_fecha_actividad_id = '.$id_materia_fecha_actividad.' and tp.estatus=1 and tr.estatus = 1');
       
       $arreglo_pregunta = arreglo($query_pregunta);
       $json_pregunta = $arreglo_pregunta;
       
       //ingreso todas las escuelas que tiene este profesor
       
       if(num($query_pregunta)){
    		$json = array("status" => 1, "msg" => "Se encontró la respuesta","respuesta" => $json_pregunta);
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