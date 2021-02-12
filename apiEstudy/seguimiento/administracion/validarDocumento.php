<?php
include '../../jwt.php';
include '../../headers.php';
include '../../extras/correo/class/correo.class.php';

try {

  db ('seguimiento');

  $correo = new Correo();

  if($_SERVER['REQUEST_METHOD'] == "POST"){
    foreach($_POST as $clave => $valor){
      ${$clave} = escape_cara($valor);
    }
    
      $usuario = Auth::GetData(
            $jwt  
        );


  if(isset($id_expediente)){

    $query_expediente = query('SELECT aspirante_id, nombre, primer_apellido, segundo_apellido, email from inter_expediente ie
    join '.$GLOBALS['db_datosGenerales'].'.personas p on p.persona_id = aspirante_id where expediente_id='.$id_expediente);

    $arreglo = arreglo($query_expediente);
  
    $edita=update('inter_expediente','estado_documento_id='.$id_estado_documento.', expediente_desc="'.$expediente_desc.'"','expediente_id='.$id_expediente);
  
    if($id_estado_documento == 6 && $GLOBALS['produccion'] == 1){
      $envia_correo=$correo::correccion($arreglo['aspirante_id']);
    }
  
    if($edita){
      if($id_estado_documento == 6){
        $json = array("status" => 1, "msg" => "Se editó expediente correctamente");
      }else{
        $json = array("status" => 1, "msg" => "Se editó expediente correctamente");
      }
    }else{
        $json = array("status" => 0, "msg" => "No se editó expediente");
    }

  }else{

    inserta('inter_expediente','expediente_desc,url, aspirante_id, documento_id, estado_documento_id,fecha_creacion, estatus',
    '"","'.$expediente_desc.'",'.$id_persona.','.$id_documento.','.$id_estado_documento.',now(),1');

    $json = array("status" => 1, "msg" => "Se cambió estatus sin documento");

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