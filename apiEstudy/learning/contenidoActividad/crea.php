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

      $nuevo = 0;

      if(!isset($id_actividad)){

        $arreglo_modulo = arreglo(query('select count(*) as orden from tr_actividad ta where modulo_id = '.$id_modulo.' and estatus = 1'));
        $orden = $arreglo_modulo['orden']+1;

        $inserta_actividad = inserta_last_id('tr_actividad','modulo_id,tipo_actividad_id,dificultad_id,orden,visible,usuario_crea,estatus'
        ,$id_modulo.',1,1,'.$orden.',1,"'.$usuario->usuario.'",1');   
        $id_actividad = $inserta_actividad;
        $nuevo = 1;
      }

      $query_contenido_actividad = query('select max(contenido_actividad_id) as contenido_actividad_id from tr_contenido_actividad');

      if(num($query_contenido_actividad)){
        $arreglo_contenido_actividad = arreglo($query_contenido_actividad);
        $id_contenido_actividad = $arreglo_contenido_actividad['contenido_actividad_id']+1;
      }else{
        $id_contenido_actividad = 1;
      }

        
                
               
                $contenido = $archivo::guardar_archivo(
                  "asignaturas/contenido_actividad", // la ruta del archivo
                  $id_contenido_actividad, //el id de la ruta
                  $_FILES["archivo"],//la variable tipo file donde viene el archivo
                  "contenido_actividad", //el nombre que va a llevar el archivo a guardar
                  null, //tipo de archivo
                  50 //tamaño máximo del archivo
                );
      
                if($contenido['status'] == 1){
                  $url = $contenido['url'];
                    
                  $nombre_archivo = explode(".", $_FILES["archivo"]["name"]);
                  $longitud = sizeof($nombre_archivo);
                  $nombre_final = "";
                  for ($i=0; $i < $longitud-1; $i++) { 
                    if ($i == 0) {
                      $nombre_final = $nombre_final . $nombre_archivo[$i]; 
                    }else{
                      $nombre_final = $nombre_final .'.'. $nombre_archivo[$i]; 
                    }
                    
                  }
                  $inserta = inserta_last_id('tr_contenido_actividad', 
                'actividad_id,nombre,visto,url_contenido,fecha_creacion,usuario_crea,estatus',
                $id_actividad.',"'.$nombre_final.'",1,"'.$url.'",now(),current_user(),1');

                    $json = array("status" => 1, "msg" => "Contenido guardado correctamente","id_actividad" =>$id_actividad);
                }else{

                  if($nuevo){
                    delete('tr_actividad','actividad_id = '.$id_actividad);
                  }
                    $json = $contenido;
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

