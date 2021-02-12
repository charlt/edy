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

    

    $query_diagnostica = query('SELECT *
          FROM tr_sq_respuesta WHERE pregunta_id = '.$id_pregunta.' and materia_fecha_actividad_id = '.$id_materia_fecha_actividad);

    $num_otras_respuestas = 0;
    $json_respuestas_anteriores = array();

    $query_otras_respuestas = query('SELECT tr.*,tp.momento,tp.pregunta
    from tr_sq_pregunta tp  
   join tr_sq_respuesta tr on tr.pregunta_id = tp.pregunta_id
   where tr.visualiza_flg = '.$visualiza_flag.'
   order by momento
   ');

    $num_otras_respuestas = num($query_otras_respuestas);

    $momento_completado = 0;

    while($arreglo_otras_respuestas = arreglo($query_otras_respuestas)){
      array_push($json_respuestas_anteriores,$arreglo_otras_respuestas);
      
      //siempre asignará el mayor momento
      $momento_completado = $arreglo_otras_respuestas['momento'];
    }

    
  
        
       $arreglo_diagnostica = arreglo($query_diagnostica);
       
       //ingreso todas las escuelas que tiene este profesor
       
       if(num($query_diagnostica)) {
    		$json = array("status" => 1, "msg" => "Se encontraron respuestas","diagnostica" => $arreglo_diagnostica,"momentoCompletado"=>$momento_completado,"otrasRespuestas" => $json_respuestas_anteriores);
    	 }else{
    		$json = array("status" => 0, "msg" => "No se encontraron respuestas","momentoCompletado"=>$momento_completado,"otrasRespuestas" => $json_respuestas_anteriores);
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
