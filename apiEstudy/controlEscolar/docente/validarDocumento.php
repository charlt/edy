<?php
include '../../jwt.php';
include '../../headers.php';
include '../../extras/correo/class/correo.class.php';

try {

  db ('controlEscolar');

  $correo = new Correo();

  if($_SERVER['REQUEST_METHOD'] == "POST"){
    foreach($_POST as $clave => $valor){
      ${$clave} = escape_cara($valor);
    }
    
      $usuario = Auth::GetData(
            $jwt  
        );
  
  $arreglo = arreglo(query('SELECT * from inter_expediente_docente ie
  JOIN '.$GLOBALS['db_datosGenerales'].'.personas p ON p.persona_id = docente_id WHERE expediente_id='.$id_expediente));
  
  $edita = update('inter_expediente_docente','estado_documento_id='.$id_estado_documento.', expediente_desc="'.$expediente_desc.'"','expediente_id='.$id_expediente);

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
  	$json = array("status" => 1, "msg" => "Método no aceptado");
  }

  /* Output header */

  echo json_encode($json);

} catch (Exception $e) {
    $json = array("status" => 0, "msg" =>  $e->getMessage());

    echo json_encode($json);
}