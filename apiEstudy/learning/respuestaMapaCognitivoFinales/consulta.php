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
      $query_respuesta = query('SELECT trf.respuesta_final_id, tr.respuesta_id, pregunta_id, te.elemento_id, tc.categoria_id, respuesta
      FROM tr_mc_respuesta tr
      join tr_mc_categorias tc on tc.respuesta_id = tr.respuesta_id
      join tr_mc_elementos te on te.respuesta_id = tr.respuesta_id
      join tr_mc_respuestas_finales trf on tc.categoria_id = trf.categoria_id and te.elemento_id = trf.elemento_id
       WHERE materia_fecha_actividad_id = '.$id_materia_fecha_actividad.' and tc.respuesta_id = '.$id_respuesta.'  and tr.estatus=1');

    
       $json_respuesta= array();
       while ($arreglo_respuesta = arreglo($query_respuesta)){
          array_push($json_respuesta,$arreglo_respuesta);
       }
       
       //ingreso todas las escuelas que tiene este profesor
       
       if(num($query_respuesta)){
    		$json = array("status" => 1, "msg" => "Se encontraron respuestas","respuesta" => $json_respuesta);
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