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

    $query_portafolio_evidencias = query('SELECT  portafolio_id, tpe.actividad_id, actividad_nombre, materia_fecha_actividad_id, paso,
    descripcion, adjunto
    from tr_portafolio_evidencias tpe  
    join tr_actividad ta on ta.actividad_id = tpe.actividad_id
    where tpe.actividad_id='.$id_actividad.' and materia_fecha_actividad_id ='.$id_materia_fecha_actividad);
      
    $arreglo = arreglo($query_portafolio_evidencias);

      $query_portafolio_respuestas = query('SELECT respuesta_id, tpr.actividad_id, portafolio_id, validado, respuesta,ta.actividad_nombre, tpr.estatus from tr_portafolio_respuesta tpr
      join tr_actividad ta on ta.actividad_id = tpr.actividad_id
      where portafolio_id = '.$arreglo['portafolio_id']);

        $json = array();

        while ($arreglo1 = arreglo($query_portafolio_respuestas)){
          array_push($json,$arreglo1);

        }

        $arreglo['respuesta_ponderacion']=$json;
    
       
       //ingreso todas las escuelas que tiene este profesor
       
       if(num($query_portafolio_evidencias)){
    		$json = array("status" => 1, "msg" => "Se encontraron respuestas","respuestas" => $arreglo);
    	 }else{
    		$json = array("status" => 0, "msg" => "No se encontraron Respuestas");
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