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

    $consulta_correcta = 0;

    //SERVICIO DE CONSULTA DE SESIÓN
    $query_respuestas = query('SELECT dr2.respuesta_id, dr1.reactivo_id,dr1.reactivo_desc, dr2.orden,IF(dr1.orden = dr2.orden,true,false) as correcta
     FROM tr_dd_reactivos dr1
     JOIN  tr_dd_respuesta dr2  on dr1.reactivo_id = dr2.reactivo_id
     where materia_fecha_actividad_id = '.$id_materia_fecha_actividad.' and pregunta_id = '.$id_pregunta.' and dr1.estatus = 1 order by orden');

     if(!num($query_respuestas)){

      $query_reactivos = query('SELECT reactivo_id,orden,reactivo_desc
      FROM tr_dd_reactivos       
      where pregunta_id = '.$id_pregunta.' and estatus = 1');

      $json_reactivos = array();      
      $json_orden = array();      

      while ($arreglo_reactivos = arreglo($query_reactivos)){          
        array_push($json_reactivos,$arreglo_reactivos['reactivo_id']);  
        array_push($json_orden,$arreglo_reactivos['orden']);  
      }

      shuffle($json_orden);
      



      $script_respuesta = 'insert into tr_dd_respuesta (reactivo_id,materia_fecha_actividad_id,orden) values';

      $size_reactivos = sizeof($json_reactivos);
      for ($i = 0 ; $i < $size_reactivos; $i++){ 
        $script_respuesta .= '('.$json_reactivos[$i].','.$id_materia_fecha_actividad.','.$json_orden[$i].'),';
      }


      $script_respuesta = trim($script_respuesta, ',');

      
      $insert = query($script_respuesta);



      if($insert){
        $consulta_correcta = 1;  
        $query_respuestas = query('SELECT dr2.respuesta_id, dr1.reactivo_id,dr1.reactivo_desc,dr2.orden, IF(dr1.orden = dr2.orden,"true","false")
        FROM tr_dd_reactivos dr1
        JOIN  tr_dd_respuesta dr2  on dr1.reactivo_id = dr2.reactivo_id
        where materia_fecha_actividad_id = '.$id_materia_fecha_actividad.' and pregunta_id = '.$id_pregunta.' and dr1.estatus = 1 order by orden');

        $json_respuestas = array();

        while ($arreglo_respuesta = arreglo($query_respuestas)){          
          array_push($json_respuestas,$arreglo_respuesta);  
        }


      }else{
        $consulta_correcta = 0;
      }



     }else{
      $consulta_correcta = 1;

      $json_respuestas = array();      

      while ($arreglo_respuestas = arreglo($query_respuestas)){          
        array_push($json_respuestas,$arreglo_respuestas);  
      }

     }

    
 /*      $json_reactivos= array();
       $json_respuesta = array();

       $ejecuta_query = 0;

       while ($arreglo_reactivos = arreglo($query_reactivos)){          
          array_push($json_reactivos,$arreglo_reactivos);  
       }

       $query_respuesta = 'insert into tr_dd_respuesta (reactivo_id,materia_fecha_actividad,orden)'

         

      shuffle($json_reactivos);


       //muestra las respuestas correctas
       $ordenamiento = array_column($json_respuesta, 'orden');
       array_multisort($ordenamiento, SORT_ASC, $json_respuesta);
       
       //ingreso todas las escuelas que tiene este profesor*/
       
       if($consulta_correcta){
    		$json = array("status" => 1, "msg" => "Se encontraron las respuestas","respuestas"=>$json_respuestas);
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