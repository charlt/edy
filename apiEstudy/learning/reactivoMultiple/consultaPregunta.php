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


      $query_contenido_pregunta = query('select  tom.pregunta_id,tom.datos_pregunta_id, tom.pregunta, tom.contenido, tom.tipo
      from tr_om_pregunta tom
      WHERE tom.pregunta_id ='.$id_pregunta);

      $arreglo_contenido_pregunta = arreglo($query_contenido_pregunta);
    
      $query_opcion_multiple = query('SELECT tor.reactivo_id, tor.reactivo,tor.contenido as contenido_reactivo,
      tor.retroalimentacion,tor.ponderacion
      FROM tr_om_reactivos tor
      WHERE tor.pregunta_id ='.$id_pregunta);

      $json_opcion_multiple= array();
      while ($arreglo_opcion_multiple = arreglo($query_opcion_multiple)){
          // $imagen = $arreglo_opcion_multiple['url_imagen'];

          if (isset($id_materia_fecha_actividad)) {
            $query_respuesta = query('select respuesta_id from tr_om_respuesta where reactivo_id = '.$arreglo_opcion_multiple['reactivo_id'].' and materia_fecha_actividad_id ='.$id_materia_fecha_actividad);
            $arreglo_respuesta = arreglo($query_respuesta);
            if(num($query_respuesta)){
              $arreglo_opcion_multiple['respuesta'] = $arreglo_respuesta;
              
            }
            
          }

          array_push($json_opcion_multiple,$arreglo_opcion_multiple);

          
       }
       
       //ingreso todas las escuelas que tiene este profesor
       
       if(num($query_opcion_multiple)){
    		$json = array("status" => 1, "msg" => "Se encontraron los reactivos", "reactivos" => $json_opcion_multiple,"tipo" => $arreglo_contenido_pregunta['tipo']);
    	 }else{
    		$json = array("status" => 0, "msg" => "No se encontraron reactivos","tipo" => $arreglo_contenido_pregunta['tipo']);
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