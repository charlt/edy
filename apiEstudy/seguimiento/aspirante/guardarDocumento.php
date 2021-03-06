<?php
include '../../jwt.php';
include '../../headers.php';
include '../../extras/archivo/class/archivo.class.php';

db ('seguimiento');
$archivo = new Archivo();

try {
  if($_SERVER['REQUEST_METHOD'] == "POST"){
    foreach($_POST as $clave => $valor){
      ${$clave} = escape_cara($valor);
    }
    
    $usuario = Auth::GetData(
        $jwt  
    );

    $documento_encriptado = md5($id_documento);

    $documento=$archivo::guardar_archivo(
      "expediente", //la ruta a insertar
      $id_persona, //id de la ruta
      $_FILES["documento"],//la variable tipo file donde viene el archivo
      $documento_encriptado,//nombre del archivo
      null, 
      null
    );



    if($documento['status'] == 1 ){
      $inserta_expediente=inserta_last_id('inter_expediente','expediente_desc,url, aspirante_id, documento_id, estado_documento_id,fecha_creacion, estatus',
      '"","'.$documento['url'].'",'.$id_persona.','.$id_documento.',2,now(),1'); 
      
      
      $query_obligatorio = query('SELECT cd.documento_id, obligatorio, expediente_id, ie.aspirante_id
      from cat_documento cd
      left join (select expediente_id,aspirante_id, documento_id from inter_expediente where aspirante_id = '.$id_persona.') as ie on ie.documento_id = cd.documento_id
      where obligatorio = 1 and cd.estatus =1');

      $totales=num($query_obligatorio);
        $contestados=0;
        while($arreglo_obligatorio = arreglo($query_obligatorio)){
          if($arreglo_obligatorio['expediente_id'] != ''){
            $contestados++;
          }
        }
        $arreglo_aspirante = arreglo(query('select paso from tr_aspirante where aspirante_id ='.$id_persona));

        if($arreglo_aspirante['paso'] == 2  && $totales == $contestados){
         update('tr_aspirante','paso=3','aspirante_id='.$id_persona);
        }

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