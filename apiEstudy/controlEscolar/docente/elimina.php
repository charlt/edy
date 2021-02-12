<?php
include '../../jwt.php';
include '../../headers.php';
 

try {
  db('controlEscolar');
 
  if($_SERVER['REQUEST_METHOD'] == "POST"){
    foreach($_POST as $clave => $valor){
      ${$clave} = escape_cara($valor);
    }
    
    $usuario = Auth::GetData(
          $jwt  
      );       
      
$edita_docente = update ('tr_docente','estatus=0','docente_id ='.$id_docente);
$edita_inter = update ($GLOBALS['db_datosGenerales'].'.inter_persona_usuario_rol','estatus=0','persona_id ='.$id_docente.' and rol_id=3');
$edita_usuario = update ($GLOBALS['db_datosGenerales'].'.usuarios','estatus=0','usuario_id ='.$id_docente);
$edita_persona = update ($GLOBALS['db_datosGenerales'].'.personas','estatus=0','persona_id ='.$id_docente);
      
  if($edita_persona){
    
    $json = array("status" => 1, "msg" => "Se eliminó el docente correctamente");
    }else{
    $json = array("status" => 0, "msg" => "No se logró eliminar docente");
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
