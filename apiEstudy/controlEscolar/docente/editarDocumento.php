<?php
include '../../jwt.php';
include '../../headers.php';
include '../../extras/archivo/class/archivo.class.php';

db ('controlEscolar');
$archivo = new Archivo();

try {
  if($_SERVER['REQUEST_METHOD'] == "POST"){
    foreach($_POST as $clave => $valor){
      ${$clave} = escape_cara($valor);
    }
    
      $usuario = Auth::GetData(
            $jwt  
        );

        $query = query('
        SELECT url,documento_id from inter_expediente_docente
        where estatus=1 and docente_id= '.$id_persona.' and expediente_id = '.$expediente_id);

        if(num($query)){
          $arreglo=arreglo($query);
          $archivo::elimina_archivo($arreglo['url']); 

          $documento_encriptado = md5($arreglo['documento_id']);

          
          $documento=$archivo::guardar_archivo(
            "expediente_docente", //la ruta a insertar
            $id_persona, //id de la ruta
            $_FILES["documento"],//la variable tipo file donde viene el archivo
            $documento_encriptado,//nombre del archivo
            null, 
            null); //tamaño de la extensiomn    
        }
        
        if($documento['status'] == 1){          
          $edita=update('inter_expediente_docente','url = "'.$documento['url'].'", estado_documento_id=2','expediente_id='.$expediente_id );
          $json = array("status" => 1, "msg" => "Se actualizó el archivo correctamente");
         }else{
          $json = $documento;
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