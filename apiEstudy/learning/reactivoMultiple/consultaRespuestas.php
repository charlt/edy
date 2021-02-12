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


    
      $query_opcion_multiple = query('SELECT tor.reactivo_id, tor.reactivo,tor.contenido as contenido_reactivo,
      tom.pregunta_id, tom.datos_pregunta_id, tom.pregunta, tom.contenido,tor.retroalimentacion,tor.ponderacion, tom.tipo
      FROM tr_om_reactivos tor
      join tr_om_pregunta tom on tor.pregunta_id = tom.pregunta_id
      WHERE tom.pregunta_id ='.$id_pregunta);

      

      $seleccion_multiple = 0;

      $json_opcion_multiple= array();
      while ($arreglo_opcion_multiple = arreglo($query_opcion_multiple)){
          // $imagen = $arreglo_opcion_multiple['url_imagen'];

          if (isset($id_materia_fecha_actividad)) {
            $query_respuesta = query('select respuesta_id from tr_om_respuesta where reactivo_id = '.$arreglo_opcion_multiple['reactivo_id'].' and materia_fecha_actividad_id ='.$id_materia_fecha_actividad);
            $arreglo_respuesta = arreglo($query_respuesta);
            if(num($query_respuesta)){
              
              $arreglo_respuesta['ponderacion'] = $arreglo_opcion_multiple['ponderacion'];
              
              $arreglo_opcion_multiple['respuesta'] = $arreglo_respuesta;
            }
            if($arreglo_opcion_multiple['ponderacion'] == '100'){
              $seleccion_multiple++;
            }
            if($intentos_restantes != 0)
              unset($arreglo_opcion_multiple['ponderacion']);
            
          }

          array_push($json_opcion_multiple,$arreglo_opcion_multiple);

          
       }
       if($aleatorio != 0)
        shuffle($json_opcion_multiple);
       
       //ingreso todas las escuelas que tiene este profesor
       
       if(num($query_opcion_multiple)){
    		$json = array("status" => 1, "msg" => "Se encontraron los reactivos", "seleccionMultiple" => $seleccion_multiple, "reactivos" => $json_opcion_multiple);
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