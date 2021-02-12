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
    $query_relacion_columnas = query('SELECT *
     FROM tr_rc_reactivos WHERE pregunta_id = '.$id_pregunta);

    
       $json_relacion_columnas= array();

       $num_reactivos =num($query_relacion_columnas);

       $reactivo_id = array();
       $columna_a_id = array();
       $columna_a_desc = array();
       $columna_b_id = array();
       $columna_b_desc = array();
       $respuesta_alumno = array();
      
       while ($arreglo_relacion_columnas = arreglo($query_relacion_columnas)){
          
          do{
            $col_rand =rand ( 0 , $num_reactivos -1 );
          }while(isset($columna_a_id[$col_rand]));

          $reactivo_id[$col_rand] =  $arreglo_relacion_columnas['reactivo_id'];

          if (isset($id_materia_fecha_actividad)) {
            $query_respuesta = query('select respuesta_id, columna_a_id,columna_b_id from tr_rc_respuesta where reactivo_id = '.$arreglo_relacion_columnas['reactivo_id'].' and materia_fecha_actividad_id ='.$id_materia_fecha_actividad );
            $arreglo_respuesta = arreglo($query_respuesta);
            if(isset($arreglo_respuesta['columna_b_id'])){
              $arreglo_reactivo_b = arreglo(query('select reactivo_id from tr_rc_reactivos where  columna_b_id ='.$arreglo_respuesta['columna_b_id'].' and pregunta_id ='.$id_pregunta));
              $arreglo_respuesta['reactivo_b_id'] = $arreglo_reactivo_b['reactivo_id'];
            }
            
            $arreglo_opcion_multiple['respuesta'] = $arreglo_respuesta;
            $respuesta_alumno[$col_rand] = $arreglo_opcion_multiple['respuesta'];
          }else{
            $respuesta_alumno[$col_rand] = null;
          }

          
          $columna_a_id[$col_rand] = $arreglo_relacion_columnas['columna_a_id'];
          $columna_a_desc[$col_rand] = $arreglo_relacion_columnas['columna_a_desc'];

          do{
            $col_rand =rand ( 0 , $num_reactivos -1 );
          }while(isset($columna_b_id[$col_rand]));

          $columna_b_id[$col_rand] = $arreglo_relacion_columnas['columna_b_id'];
          $columna_b_desc[$col_rand] = $arreglo_relacion_columnas['columna_b_desc'];

          $pregunta_id = $arreglo_relacion_columnas['pregunta_id'];
          $estatus = $arreglo_relacion_columnas['estatus'];
       }



       for($i = 0; $i < $num_reactivos;$i++){
        array_push($json_relacion_columnas,
          array(
          'reactivo_id' => $reactivo_id[$i],
          'columna_a_id' => $columna_a_id[$i],
          'columna_b_id' => $columna_b_id[$i],
          'columna_a_desc' => $columna_a_desc[$i],
          'columna_b_desc' => $columna_b_desc[$i],
          'pregunta_id' => $pregunta_id,
          'respuesta' =>  $respuesta_alumno[$i],
          'estatus' => $estatus)
        );

       }
       
       //ingreso todas las escuelas que tiene este profesor
       
       if(num($query_relacion_columnas)){
    		$json = array("status" => 1, "msg" => "Se encontraron reactivos","reactivos" => $json_relacion_columnas);
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