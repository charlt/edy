<?php
include '../../jwt.php';
include '../../headers.php';

try {

  db('controlEscolar');

  if($_SERVER['REQUEST_METHOD'] == "GET"){
    foreach($_GET as $clave => $valor){
      ${$clave} = escape_cara($valor);
    }
    
    $usuario = Auth::GetData(
            $jwt 
    );
         
    $elimina_alumno = delete('tr_alumno','alumno_id='.$persona_id);    
    $elimina_docente = delete('tr_docente','docente_id='.$persona_id);
    $elimina_inter = delete($GLOBALS['db_datosGenerales'].'.inter_persona_usuario_rol','persona_id='.$persona_id);
    $elimina_inter = delete($GLOBALS['db_datosGenerales'].'.usuarios','usuario_id='.$persona_id);
    $elimina_aspirante = delete($GLOBALS['db_seguimiento'].'.tr_aspirante','aspirante_id='.$persona_id);
    $elimina_persona = delete($GLOBALS['db_datosGenerales'].'.personas','persona_id='.$persona_id);

  
       
       //ingreso todas las escuelas que tiene este profesor
       
       if($elimina_persona){
    		$json = array("status" => 1, "msg" => "Se eliminó el usuario correctamente");
    	 }else{
    		$json = array("status" => 0, "msg" => "No se logró eliminar");
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
