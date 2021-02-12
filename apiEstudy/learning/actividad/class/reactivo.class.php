<?php

class Reactivo { 

    public static function opcionMultiple($id_pregunta, $aleatorio, $intentos_restantes, $id_materia_fecha_actividad) {

      $query_opcion_multiple = query('SELECT tor.reactivo_id, tor.reactivo,tor.contenido as contenido_reactivo,
      tom.pregunta_id, tom.datos_pregunta_id, tom.pregunta, tom.contenido,tor.retroalimentacion,tor.ponderacion, tom.tipo 
      FROM tr_om_reactivos tor 
      JOIN tr_om_pregunta tom ON tor.pregunta_id = tom.pregunta_id 
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

          array_push($json_opcion_multiple, $arreglo_opcion_multiple);
            
        }
        if($aleatorio != 0)
        shuffle($json_opcion_multiple);
        
        //ingreso todas las escuelas que tiene este profesor
        
        if(num($query_opcion_multiple)){
            $json = array("seleccionMultiple" => $seleccion_multiple, "reactivos" => $json_opcion_multiple);
        }else{
            $json = array();
        }
        
        return $json;
    }

    public static function relacionColumnas($id_pregunta, $id_materia_fecha_actividad) {

      $query_relacion_columnas = query('SELECT reactivo_id, pregunta_id, estatus, columna_a_id, 
      columna_a_desc, columna_b_id, columna_b_desc 
      FROM tr_rc_reactivos WHERE pregunta_id = '.$id_pregunta);
  
      $json_relacion_columnas = array();

      $num_reactivos = num($query_relacion_columnas);

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
            $query_respuesta = query('SELECT respuesta_id, columna_a_id, columna_b_id FROM tr_rc_respuesta WHERE reactivo_id = '.$arreglo_relacion_columnas['reactivo_id'].' AND materia_fecha_actividad_id = '.$id_materia_fecha_actividad );
            $arreglo_respuesta = arreglo($query_respuesta);
            if(isset($arreglo_respuesta['columna_b_id'])){
              $arreglo_reactivo_b = arreglo(query('SELECT reactivo_id FROM tr_rc_reactivos WHERE columna_b_id ='.$arreglo_respuesta['columna_b_id'].' AND pregunta_id = '.$id_pregunta));
              $arreglo_respuesta['reactivo_b_id'] = $arreglo_reactivo_b['reactivo_id'];
            }
            
            $arreglo_opcion_multiple['respuesta'] = $arreglo_respuesta;
            $respuesta_alumno[$col_rand] = $arreglo_opcion_multiple['respuesta'];
          }else{
            $respuesta_alumno[$col_rand] = null;
          }

          $columna_a_id[$col_rand] = $arreglo_relacion_columnas['columna_a_id'];
          $columna_a_desc[$col_rand] = $arreglo_relacion_columnas['columna_a_desc'];

          do {
            $col_rand = rand( 0, $num_reactivos -1 );
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
                
      if(num($query_relacion_columnas)){
        $json = array("reactivos" => $json_relacion_columnas);
      }else{
        $json = array();
      }
    
      return $json;

    }

    public static function zonaImagenes($id_pregunta, $id_materia_fecha_actividad) {
      
      $query_contenido  = query('SELECT imagen, imagen_alto, imagen_ancho 
      FROM tr_zi_pregunta WHERE pregunta_id ='.$id_pregunta);
      $arreglo_pregunta = arreglo($query_contenido);

      $contenidoPregunta['imagen'] = $arreglo_pregunta['imagen'];
      $contenidoPregunta['imagen_ancho'] = $arreglo_pregunta['imagen_ancho'];
      $contenidoPregunta['imagen_alto'] = $arreglo_pregunta['imagen_alto'];

      $query_reactivos = query('SELECT reactivo_id, pregunta_id, reactivo_desc, imagen, alto, ancho, posicion_x, posicion_y, color, estatus
      FROM tr_zi_reactivos WHERE pregunta_id = '.$id_pregunta);

      $json_reactivos = array();
      while ($arreglo_reactivos = arreglo($query_reactivos)){
        if (isset($id_materia_fecha_actividad)) {
          $query_respuesta = query('SELECT respuesta_id, reactivo_id, materia_fecha_actividad_id, posicion_x, posicion_y 
          FROM tr_zi_respuesta WHERE reactivo_id = '.$arreglo_reactivos['reactivo_id'].' AND materia_fecha_actividad_id = '.$id_materia_fecha_actividad);
          $arreglo_respuesta = arreglo($query_respuesta);
          $arreglo_reactivos['respuesta'] = $arreglo_respuesta;
        }
        array_push($json_reactivos, $arreglo_reactivos);
      }
              
      if(num($query_reactivos)){
        $json = array("contenidoPregunta"=> $contenidoPregunta, "reactivos" => $json_reactivos);
      }else{
        $json = array();
      }

      return $json;
       
    }

    public static function dragDrop($id_pregunta, $id_materia_fecha_actividad) {

      $consulta_correcta = 0;

      $query_respuestas = query('SELECT dr2.respuesta_id, dr1.reactivo_id,dr1.reactivo_desc, dr2.orden, IF(dr1.orden = dr2.orden,true,false) AS correcta 
      FROM tr_dd_reactivos dr1 
      JOIN tr_dd_respuesta dr2 ON dr1.reactivo_id = dr2.reactivo_id 
      WHERE materia_fecha_actividad_id = '.$id_materia_fecha_actividad.' AND pregunta_id = '.$id_pregunta.' AND dr1.estatus = 1 ORDER BY orden');

      if(!num($query_respuestas)){

        $query_reactivos = query('SELECT reactivo_id,orden,reactivo_desc
        FROM tr_dd_reactivos       
        WHERE pregunta_id = '.$id_pregunta.' AND estatus = 1');

        if (num($query_reactivos) > 0) {
          
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
            $query_respuestas = query('SELECT dr2.respuesta_id, dr1.reactivo_id,dr1.reactivo_desc,dr2.orden, IF(dr1.orden = dr2.orden,"true","false");
            FROM tr_dd_reactivos dr1
            JOIN  tr_dd_respuesta dr2  on dr1.reactivo_id = dr2.reactivo_id
            where materia_fecha_actividad_id = '.$id_materia_fecha_actividad.' and pregunta_id = '.$id_pregunta.' and dr1.estatus = 1 order by orden_respuesta');

            $json_respuestas = array();

            while ($arreglo_respuesta = arreglo($query_respuestas)){          
              array_push($json_respuestas,$arreglo_respuesta);  
            }

          }else{
            $consulta_correcta = 0;
          }
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
        $json = array("respuestas" => $json_respuestas);
      }else{
        $json = array();
      }

      return $json;

    }

}

?>