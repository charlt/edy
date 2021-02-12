<?php
include '../../jwt.php';
include '../../headers.php';
include '../datosPregunta/class/pregunta.class.php';
include '../fechaActividad/class/fechaActividad.class.php';
include '../datosPregunta/class/respuesta.class.php';

try {

  db ('learning');
  $pregunta = new Pregunta();
  $fecha_actividad = new FechaActividad();
  $respuesta = new Respuesta();

  if($_SERVER['REQUEST_METHOD'] == "POST"){
    foreach($_POST as $clave => $valor){
      ${$clave} = escape_cara($valor);
    }
    
      $usuario = Auth::GetData(
            $jwt  
        );
        


        $query= arreglo(query('SELECT * from tr_materia_fecha_actividad where materia_fecha_actividad_id='.$id_materia_fecha_actividad));     
       
        $inserta =inserta_last_id('tr_materia_fecha_actividad', 'actividad_id,
        materia_id, intento_num, estatus, estatus_actividad_id', 
        ''.$query['actividad_id'].','.$query['materia_id'].','.$query['intento_num'].',1,5');
       
        $estatus_materia_fecha_actividad=update('tr_materia_fecha_actividad','estatus=0, estatus_actividad_id=3','materia_fecha_actividad_id ='.$id_materia_fecha_actividad);


        $query_materia_fecha_actividad = query('SELECT * from tr_materia_fecha_actividad tmfa
        join tr_datos_pregunta tdp on tdp.actividad_id = tmfa.actividad_id
        where materia_fecha_actividad_id ='.$id_materia_fecha_actividad);
        while($duplica=arreglo($query_materia_fecha_actividad)){
             $tabla = $pregunta::obtiene_tabla($duplica['tipo_pregunta_id'], 'respuesta');
            // echo $tabla;
             $duplica_respuesta=arreglo(query('SELECT * from '.$tabla.' where materia_fecha_actividad_id='.$id_materia_fecha_actividad));
            //  print_r($duplica_respuesta);

             switch($duplica['tipo_pregunta_id']){
              case 1:
                $duplica_respuesta_pa=$respuesta::inserta_edita_pa($inserta, $duplica_respuesta['pregunta_id'],$duplica_respuesta['respuesta'], $id_materia_fecha_actividad);
              break;
             
              case 6:
                $duplica_respuesta_qq=$respuesta::inserta_edita_qq($duplica_respuesta['pregunta_id'],$inserta,$duplica_respuesta['respuesta1'],$duplica_respuesta['respuesta2'], $duplica_respuesta['respuesta3'], $id_materia_fecha_actividad);     
              break;
              
              case 8:
                $duplica_respuesta_cc=$respuesta::inserta_edita_cc($duplica_respuesta['pregunta_id'],$inserta,$duplica_respuesta['cuadro_comparativo_desc'],$duplica_respuesta['numero_elementos'], $duplica_respuesta['numero_categorias'],$duplica_respuesta['conclusion'], $id_materia_fecha_actividad, $duplica_respuesta['respuesta_id']);     
              break;

              case 9:
                $duplica_respuesta_mc=$respuesta::inserta_edita_mc($duplica_respuesta['pregunta_id'],$inserta,$duplica_respuesta['mapa_cognitivo_desc'],$duplica_respuesta['numero_elementos'], $duplica_respuesta['numero_categorias'],$duplica_respuesta['aspecto_comun'], $id_materia_fecha_actividad, $duplica_respuesta['respuesta_id']);     
              break;

              case 11:
                $duplica_respuesta_ad=$respuesta::inserta_edita_ad($inserta, $duplica_respuesta['pregunta_id'],$duplica_respuesta['url_archivo'], $id_materia_fecha_actividad, $duplica_respuesta['url_archivo'], "1234");
                if($duplica_respuesta_ad){
                  // echo $duplica_respuesta_ad;
                  $ruta='../../../assets/archivos_alumno/'.$usuario->id.'/respuesta_adjuntable/';
                  $destino =mkdir($ruta.$duplica_respuesta_ad.'/');
                  if(is_dir($ruta.$duplica_respuesta_ad)){
                    copy('../../../'.$duplica_respuesta['url_archivo'], $ruta.$duplica_respuesta_ad.'/respuesta.docx' );
                  }
                }
                
              break;
                     
            }
            
        }
       
       if(1){
    		$json = array("status" => 1, "msg" => "Se duplicó actividad correctamente");
    	 }else{
    		$json = array("status" => 0, "msg" => "No se logró duplicar");
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
