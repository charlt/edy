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

      if (isset($id_materia_fecha_actividad)) {
        $query_reactivos = query('SELECT tr.reactivo_id, tr.pregunta_id, tr.columna_a_id, tr.columna_b_id, tr.columna_a_desc,
        tr.columna_b_desc, tr.retroalimentacion, 
        trp.datos_pregunta_id, trp.pregunta, trp.contenido,
        trr.respuesta_id, trr.columna_a_id, trr.columna_b_id, trr.estatus_respuesta_id, trr.intento_num,
        FROM tr_rc_reactivos tr
        join tr_rc_pregunta trp on trp.pregunta_id = tr.pregunta_id
        left join tr_rc_respuesta trr on trr.reactivo_id = tr.reactivo_id
        WHERE  trp.pregunta_id = '.$id_pregunta.' and (  materia_fecha_actividad_id = '.$id_materia_fecha_actividad.' or  materia_fecha_actividad_id is null)');  

      }else {
        $query_reactivos = query('SELECT tr.reactivo_id, tr.pregunta_id, tr.columna_a_id, tr.columna_b_id, tr.columna_a_desc,
	      tr.columna_b_desc, tr.retroalimentacion,
	            trp.pregunta_id, trp.datos_pregunta_id, trp.pregunta, trp.contenido
	      FROM tr_rc_reactivos tr
	      join tr_rc_pregunta trp on trp.pregunta_id = tr.pregunta_id
	      WHERE trp.pregunta_id = '.$id_pregunta);
      } 
      

       $json_reactivos= array();
       while ($arreglo_reactivos = arreglo($query_reactivos)){
          array_push($json_reactivos,$arreglo_reactivos);
       }
       
       //ingreso todas las escuelas que tiene este profesor
       
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