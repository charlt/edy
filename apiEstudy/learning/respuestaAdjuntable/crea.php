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

        $inserta = inserta_last_id('tr_ad_respuesta', 
        'materia_fecha_actividad_id, pregunta_id, fecha_creacion, estatus',
        ''.$id_materia_fecha_actividad.', '.$id_pregunta.', now(),1');

        if($inserta){

            $adjunto=$archivo::guardar_archivo_main(
                "respuesta_adjuntable", //la ruta a insertar
                $inserta, //id de la ruta
                $_FILES["archivo"],//la variable tipo file donde viene el archivo
                "respuesta",//nombre del archivo
                $id_cat_formato,
                null,
                "archivos_alumno",
                $usuario->id
                ); //tamaño de la extensiomn    

                if($adjunto['status'] == 1){          
                    $edita=update('tr_ad_respuesta','url_archivo = "'.$adjunto['url'].'"','respuesta_id='.$inserta );
                    $json = array("status" => 1, "msg" => "Se inserto respuesta con adjunto correctamente");
                }else{
                    query('delete from tr_ad_respuesta where respuesta_id ='.$inserta);
                    $json = $adjunto;
                }
                        
        }else{
            $json = array("status" => 0, "msg" => "No se insertó correctamente");
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

