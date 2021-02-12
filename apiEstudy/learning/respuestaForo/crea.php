<?php
include '../../jwt.php';
include '../../headers.php';
include '../../extras/archivo/class/archivo.class.php';
try {
 db ('learning');

 $archivo = new Archivo();


  if($_SERVER['REQUEST_METHOD'] == "POST"){
    foreach($_POST as $clave => $valor){
      ${$clave} = escape_cara($valor);
    }
    
      $usuario = Auth::GetData(
           $jwt  
        );

        $query_tmfa = query('select asignatura_grupo_id,actividad_id
        from tr_materia tm
        join tr_materia_fecha_actividad tmfa on tmfa.materia_id = tm.materia_id where materia_fecha_actividad_id='.$id_materia_fecha_actividad);

        
    
        $arreglo_tmfa = arreglo($query_tmfa);

        if($solicita_revision == 1){
            $query_datos_pregunta = query('select datos_pregunta_id from tr_datos_pregunta where estatus = 1 and actividad_id='.$arreglo_tmfa['actividad_id']);

            if(num($query_datos_pregunta) == 1){
                query('update tr_materia_fecha_actividad set estatus_actividad_id = 3 where materia_fecha_actividad_id= '.$id_materia_fecha_actividad);
            }
        }

        if(isset($id_respuesta_padre)){
        $inserta = inserta_last_id('tr_fr_respuesta', 
        'respuesta_padre_id, pregunta_id,persona_id,asignatura_grupo_id,materia_fecha_actividad_id,respuesta,flg_moderador,fecha_creacion, estatus',
        ''.$id_respuesta_padre.','.$id_pregunta.','.$usuario->id.','.$arreglo_tmfa['asignatura_grupo_id'].','.$id_materia_fecha_actividad.',"'.$respuesta.'",'.$flg_moderador.', now(),1');
        }else {
            
        $inserta = inserta_last_id('tr_fr_respuesta', 
        'pregunta_id,persona_id,asignatura_grupo_id,materia_fecha_actividad_id,respuesta,flg_moderador,fecha_creacion, estatus',
        ''.$id_pregunta.','.$usuario->id.','.$arreglo_tmfa['asignatura_grupo_id'].','.$id_materia_fecha_actividad.',"'.$respuesta.'",'.$flg_moderador.', now(),1');
        }
        

        if($inserta){
            if(isset($_FILES["archivo"]) ){ //valido que exista la imagen

            $adjunto=$archivo::guardar_archivo_main(
                "respuesta_foro", //la ruta a insertar
                $inserta, //id de la ruta
                $_FILES["archivo"],//la variable tipo file donde viene el archivo
                "respuesta",//nombre del archivo
                0,
                null,
                "archivos_alumno",
                $usuario->id
                ); //tamaño de la extensiomn    

                if($adjunto['status'] == 1){          
                    $edita=update('tr_fr_respuesta','contenido = "'.$adjunto['url'].'"','respuesta_id='.$inserta );
                    $json = array("status" => 1, "msg" => "Se insertó respuesta con adjunto correctamente");
                }else{
                    $json = $adjunto;
                }
                        
            }else{ 
                //aunque no se haya guardado la imagen, el registro se guardo correctamente
                $json = array("status" => 1, "msg" => "Se insertó la respuesta correctamente");
            }
    	 }else{
    		$json = array("status" => 0, "msg" => "No se logró insertar");
         }

/* Output header */
}else{
    $json = array("status" => 0, "msg" => "Método no aceptado");
}

echo json_encode($json);

} catch (Exception $e) {
    $json = array("status" => 0, "msg" =>  $e->getMessage());

    echo json_encode($json);
}


 
?>

