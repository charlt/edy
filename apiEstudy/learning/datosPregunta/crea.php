<?php
include '../../jwt.php';
include '../../headers.php';

try {

  db('learning');

  if($_SERVER['REQUEST_METHOD'] == "POST"){
    foreach($_POST as $clave => $valor){
      ${$clave} = escape_cara($valor);
    }
    
      $usuario = Auth::GetData(
            $jwt  
        );
         

        
        $arreglo_actividad = arreglo(query('select count(*) as orden from tr_datos_pregunta where actividad_id = '.$id_actividad.' and estatus = 1'));
        $orden = $arreglo_actividad['orden']+1;
        
            $inserta = inserta_last_id('tr_datos_pregunta', 'tipo_pregunta_id, actividad_id, 
            dificultad_id, orden, ponderacion, aleatorio, retroalimentacion, retroalimentacion_docente,
            fecha_creacion, usuario_crea, estatus',
            ''.$id_tipo_pregunta.','.$id_actividad.','.$id_dificultad.','.$orden.'
            ,'.$ponderacion.','.$aleatorio.',"'.$retroalimentacion.'",
            "'.$retroalimentacion_docente.'",now(),current_user(),1');


  if($inserta){
      $json = array("status" => 1, "msg" => "Se insertó la pregunta correctamente", "idDatosPregunta" => $inserta);
    }else{
      $json = array("status" => 0, "msg" => "No se pudo insertar la pregunta");
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