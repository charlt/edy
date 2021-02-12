<?php
include '../../jwt.php';
include '../../headers.php';
include '../datosPregunta/class/pregunta.class.php';
include '../fechaActividad/class/fechaActividad.class.php';


try {

  db ('learning');

  $objPregunta = new Pregunta();
  $fechaActividad = new FechaActividad();

  if($_SERVER['REQUEST_METHOD'] == "POST"){
    foreach($_POST as $clave => $valor){
      ${$clave} = escape_cara($valor);
    }
    
    

      $usuario = Auth::GetData(
            $jwt  
        );

        $con=array();
        $sin=array();
        $multiplicacion=0;
        // $tabla = $objPregunta::obtiene_tabla($id_datos_pregunta, $tipo);
          $query_datos_pregunta = query('SELECT datos_pregunta_id, tipo_pregunta_id,ponderacion, materia_id, intento_num
          from tr_materia_fecha_actividad ta
          join tr_datos_pregunta tp on tp.actividad_id = ta.actividad_id 
          where materia_fecha_actividad_id = '.$id_materia_fecha_actividad.' and tp.estatus=1');

          $calificado_por = 2; // 2 por el sistema, 3 por el docentes
          $calificacion_final=0;
          
          while ($arreglo_datos_pregunta = arreglo($query_datos_pregunta)){

            //Aprovechamos la información que viene en datos pregunta
            $id_tipo_pregunta = $arreglo_datos_pregunta['tipo_pregunta_id'];
            $id_datos_pregunta = $arreglo_datos_pregunta['datos_pregunta_id'];
            if($tipo_calificacion == 3){
              $ponderacion = 1/num($query_datos_pregunta) * 100;
            }else{
              $ponderacion = $arreglo_datos_pregunta['ponderacion'];  
            }
            

            $intento = $arreglo_datos_pregunta['intento_num'];
            $query_respuesta= $objPregunta::obtiene_query_respuesta($id_tipo_pregunta,$id_datos_pregunta,$id_materia_fecha_actividad);
            $arreglo_respuesta = arreglo($query_respuesta);
            // print_r($arreglo_respuesta);

      
            if (num($query_respuesta)){
              

              //AQUI SABEMOS QUE EL QUERY TIENE INFOMACIÓN, PROCEDEMOS A EVALUAR POR TIPO
              //SE DEBE PONER LA CONDICIONAL POR TIPO_PREGUNTA_ID
              //SE PASA PREGUNTA_ID PARA APROVECHA EL SCRIPT DE OBTIENE QUERY_RESPUESTA 
              
              switch($id_tipo_pregunta){
                case '1': 
                  $calificacion = null;
                  $calificado_por = 3;
                break;
                case '2':
                  $calificacion = $fechaActividad::calificacion_om($arreglo_respuesta['pregunta_id'], $id_materia_fecha_actividad);
                  if($calificacion === null){
                    array_push($sin,$id_datos_pregunta);
                  }else{
                    array_push($con, $id_datos_pregunta);
                    //echo '('.$calificacion.' x '.$ponderacion.')';
                    $calificacion_final+=($calificacion*$ponderacion)/10;
                  }
                break;

                case '3': 
                  //La variable calificacion_rc se deja a calificacion, ya que será una variable neutra
                  $calificacion = $fechaActividad::calificacion_rc($arreglo_respuesta['pregunta_id'],$id_materia_fecha_actividad);
                  if($calificacion === null){
                    array_push($sin,$id_datos_pregunta);
                  }else{
                    array_push($con, $id_datos_pregunta);
                    //echo '('.$calificacion.' x '.$ponderacion.')';
                    $calificacion_final+=($calificacion*$ponderacion)/10;
                  }
                  
                break;
                case '4': 
                  //La variable calificacion_zi se deja a calificacion, ya que será una variable neutra
                  $calificacion = $fechaActividad::calificacion_zi($arreglo_respuesta['pregunta_id'],$id_materia_fecha_actividad);  
                  if($calificacion === null){
                    array_push($sin,$id_datos_pregunta);
                  }else{
                    array_push($con, $id_datos_pregunta);
                    //echo '('.$calificacion.' x '.$ponderacion.')';
                    $calificacion_final+=($calificacion*$ponderacion)/10;
                  }
                  
                break;
                
                case '5': 
                  //La variable calificacion_zi se deja a calificacion, ya que será una variable neutra
                  $calificacion = $fechaActividad::calificacion_dd($arreglo_respuesta['pregunta_id'],$id_materia_fecha_actividad);  
                  if($calificacion === null){
                    array_push($sin,$id_datos_pregunta);
                  }else{
                    array_push($con, $id_datos_pregunta);
                    //echo '('.$calificacion.' x '.$ponderacion.')';
                    $calificacion_final+=($calificacion*$ponderacion)/10;
                  }
                  
                break;
                case '6': 
                  $calificacion = null;
                  $calificado_por = 3;
                break;
                case '7': 
                  $calificacion = null;
                  $calificado_por = 3;
                break;
                case '8':
                case '9':
                     
                  $tabla_r = $objPregunta::obtiene_tabla($id_tipo_pregunta, 'respuesta');
                  if($id_tipo_pregunta == 8){
                    $dato = "conclusion";
                  }else{
                    $dato = "aspecto_comun";
                  }
                  $consulta_conclusion =arreglo(query('select '.$dato.' from ' . $tabla_r . ' where materia_fecha_actividad_id = '.$id_materia_fecha_actividad));

                  if(empty($consulta_conclusion["$dato"])){
                    array_push($sin,$id_datos_pregunta);
                  }else{
                    $calificacion = null;
                    $calificado_por = 3;
                  }
                  
                break;
                case '10':
                  $calificacion = null;
                  $calificado_por = 3;
                break; 
                case '11':
                  $calificacion = null;
                  $calificado_por = 3;
                break; 
              }

              
              

              if($calificacion !== null){
                $calificacion_ponderacion = ($calificacion*$ponderacion)/10;
                $query_respuestas_2 =$fechaActividad::consulta_respuestas($id_materia_fecha_actividad, $id_datos_pregunta);
                if(num($query_respuestas_2)){
                  $respuesta=$fechaActividad::edita_calificacion($arreglo_datos_pregunta['datos_pregunta_id'], $id_materia_fecha_actividad, $calificacion,$calificacion_ponderacion);
               }else{
                 $respuesta = $fechaActividad::inserta_calificacion($arreglo_datos_pregunta['datos_pregunta_id'], $id_materia_fecha_actividad, $calificacion,$calificacion_ponderacion);      
               } 
              }
              
            }else{

              array_push($sin,$id_datos_pregunta);
            } 
            
              
          }

          if($calificado_por == 3){
            $calificacion_final = 'null';
          }else{
            $calificacion_final = round($calificacion_final, 2);

            if($calificacion_final >=  9.98) $calificacion_final = 10.00;
          }

          
          //  print_r($con);
          // print_r($sin);
    if(!sizeof($sin) || $forzar_cierre == 1){

      

          $fechaActividad::modifica_actividad($id_materia_fecha_actividad,$calificacion_final,$calificado_por);        

          $query_cat_fecha = query('select * from cat_estatus_actividad where estatus_actividad_id = '.$calificado_por);
    
          $arreglo_cat_fecha = arreglo($query_cat_fecha);
    
          
          
          $json = array("status" => 1, "msg" => "Actividad Completa",
          "materiaFechaActividad" =>  
          array(
            "materia_fecha_actividad_id" => $id_materia_fecha_actividad,
            "intento_num" => $intento,
            "estatus_actividad_id" => $calificado_por,
            "estatus_actividad" => $arreglo_cat_fecha['estatus_actividad'], 
            "calificacion"=> $calificacion_final ));

      $fechaActividad::modifica_actividad($id_materia_fecha_actividad,$calificacion_final,$calificado_por);        

      $query_cat_fecha = query('select * from cat_estatus_actividad where estatus_actividad_id = '.$calificado_por);

      $arreglo_cat_fecha = arreglo($query_cat_fecha);

      
      
      $json = array("status" => 1, "msg" => "Actividad Completa",
      "materiaFechaActividad" =>  
      array(
        "materia_fecha_actividad_id" => $id_materia_fecha_actividad,
        "intento_num" => $intento,
        "estatus_actividad_id" => $calificado_por,
        "estatus_actividad" => $arreglo_cat_fecha['estatus_actividad'], 
        "calificacion"=> $calificacion_final ));
      
    }else{
        $json = array("status" => 0, "msg" => "Actividad con ejercicios Pendientes", "pendientes"=>$sin);
    }

  }else{
  	$json = array("status" => 1, "msg" => "Método no aceptado");
  }

  /* Output header */

  echo json_encode($json);

} catch (Exception $e) {
    $json = array("status" => 0, "msg" =>  $e->getMessage());

    echo json_encode($json);
}