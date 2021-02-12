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

    delete('inter_expediente_docente','docente_id = '.$usuario->id.' and documento_id = 7'); 

    $documento=$archivo::guardar_archivo(
      "expediente_docente", // la ruta del archivo
      $usuario->id, //el id de la ruta
      $_FILES["documento"],//la variable tipo file donde viene el archivo
      7, //el nombre que va a llevar el archivo a guardar
      null, //extensiones (imagen, documentos,*)
      null //tamaño de la extension
    );

    if($documento['status'] == 1 ){
      $inserta_expediente=inserta_last_id('inter_expediente_docente','expediente_desc,url, docente_id, documento_id, estado_documento_id,fecha_creacion, estatus',
      '"Curriculum Docente","'.$documento['url'].'",'.$usuario->id.',7,3,now(),1'); 
      
        $json = array("status" => 1, "msg" => "Expediente guardado correctamente");


    }else{
      //error en el documento
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