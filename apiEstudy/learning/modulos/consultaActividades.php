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

        if($tipo == '2') 
          $script_tipo = ' and cc.tipo_actividad_id = 2';
        else
          $script_tipo = '';

    $query_modulo = query('SELECT cc.actividad_id, cc.actividad_nombre,ctd.tipo_actividad_id, ctd.tipo_actividad_nombre, importancia_actividad_id, cc.visible FROM tr_actividad cc
      join cat_dificultad cd ON cd.dificultad_id = cc.dificultad_id
      join cat_tipos_actividad ctd ON ctd.tipo_actividad_id = cc.tipo_actividad_id
      WHERE cc.estatus = 1 and modulo_id = '.$id_modulo.' '.$script_tipo.'
      order by orden');

    
       $json_modulo= array();
       while ($arreglo_modulo = arreglo($query_modulo)){
          

          if(isset($preguntas)){//para consultar numero de preguntas en el Bloque de actividades
              $query = query('select datos_pregunta_id from tr_datos_pregunta where actividad_id = '.$arreglo_modulo['actividad_id']);

              $arreglo_modulo['total_preguntas'] = num($query);
          }

          array_push($json_modulo,$arreglo_modulo);
       }
       
       
       if(num($query_modulo)){
        $json = array("status" => 1, "msg" => "Se encontraron las Actividades del Bloque","Actividades" => $json_modulo);
       }else{
        $json = array("status" => 0, "msg" => "No se encontraron actividades");
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