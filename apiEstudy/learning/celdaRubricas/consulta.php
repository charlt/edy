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
      $query_respuesta = query('SELECT tr.rubrica_id, tr.desc_rubrica, te.elemento_id, tc.categoria_id, celda,
      ta.valor, ta.respuesta_id
      FROM tr_rubrica tr
      join tr_rb_categoria tc on tc.rubrica_id = tr.rubrica_id
      join tr_rb_elemento te on te.rubrica_id = tr.rubrica_id
      join tr_rb_respuesta ta on ta.categoria_id = tc.categoria_id and ta.elemento_id = te.elemento_id
       WHERE tr.rubrica_id = '.$id_rubrica.'  and tr.estatus=1');

    
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