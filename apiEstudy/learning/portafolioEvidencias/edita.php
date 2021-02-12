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
        
        $edita = update('tr_portafolio_evidencias', 
        'descripcion = "'.$descripcion.'",
         fecha_actualiza = now()',
        'portafolio_id = '.$id_portafolio);


          if($edita){

            if(isset($_FILES["archivo"])){ //valido que exista la imagen

                        
              $portafolio=$archivo::guardar_archivo_main(
                "portafolio", //la ruta a insertar
                $id_portafolio, //id de la ruta
                $_FILES["archivo"],//la variable tipo file donde viene el archivo
                "portafolio",//nombre del archivo
                2,
                null,
                "archivos_alumno",
                $usuario->id
                ); //tamaño de la extensiomn    

                if($portafolio['status'] == 1){          
                  $edita=update('tr_portafolio_evidencias','adjunto = "'.$portafolio['url'].'"','portafolio_id='.$id_portafolio );
                  $json = array("status" => 1, "msg" => "Se actualizó el portafolio correctamente");
                 }else{
                  $json = $portafolio;
                 }

            }
    	 }else{
    		$json = array("status" => 0, "msg" => "No se logró actualizar");
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

