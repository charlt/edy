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

      $query_contenido  = query('select * from tr_zi_pregunta where pregunta_id ='.$id_pregunta);
      $arreglo_pregunta = arreglo($query_contenido);

      

      $contenidoPregunta['imagen'] = $arreglo_pregunta['imagen'];
      $contenidoPregunta['imagen_ancho'] = $arreglo_pregunta['imagen_ancho'];
      $contenidoPregunta['imagen_alto'] = $arreglo_pregunta['imagen_alto'];

    //SERVICIO DE CONSULTA DE SESIÓN
      $query_reactivos = query('SELECT reactivo_id, pregunta_id, reactivo_desc, imagen, alto, ancho, posicion_x, posicion_y, color, estatus
      FROM tr_zi_reactivos WHERE pregunta_id = '.$id_pregunta);

    
       $json_reactivos = array();
       while ($arreglo_reactivos = arreglo($query_reactivos)){

          if (isset($id_materia_fecha_actividad)) {
            $query_respuesta = query('select * from tr_zi_respuesta where reactivo_id = '.$arreglo_reactivos['reactivo_id'].' and materia_fecha_actividad_id = '.$id_materia_fecha_actividad);
            $arreglo_respuesta = arreglo($query_respuesta);
            $arreglo_reactivos['respuesta'] = $arreglo_respuesta;
          }

          array_push($json_reactivos,$arreglo_reactivos);
       }
       
       //ingreso todas las escuelas que tiene este profesor
       
       if(num($query_reactivos)){
    		$json = array("status" => 1, "msg" => "Se encontraron reactivos","contenidoPregunta"=> $contenidoPregunta,"reactivos" => $json_reactivos);
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