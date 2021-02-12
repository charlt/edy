<?php
include '../../jwt.php';
include '../../headers.php';
include '../datosPregunta/class/pregunta.class.php';

try {
  
  db ('learning');
  $pregunta_obj = new Pregunta();

  if($_SERVER['REQUEST_METHOD'] == "GET"){
    foreach($_GET as $clave => $valor){
      ${$clave} = escape_cara($valor);
    }

      $usuario = Auth::GetData(
            $jwt  
        );

    $tabla = $pregunta_obj::obtiene_tabla($id_tipo_pregunta,'pregunta');

        
    //SERVICIO DE CONSULTA DE SESIÓN
    $query_contenido = query('SELECT *
     FROM '.$tabla.' WHERE datos_pregunta_id = '.$id_datos_pregunta);

    
       $json_contenido= array();
       while ($arreglo_contenido = arreglo($query_contenido)){
          array_push($json_contenido,$arreglo_contenido);
       }
       
       //ingreso todas las escuelas que tiene este profesor
       
       if(num($query_contenido)){
    		$json = array("status" => 1, "msg" => "Se encontró la pregunta","pregunta" => $json_contenido);
    	 }else{
    		$json = array("status" => 0, "msg" => "No se encontraron preguntas");
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