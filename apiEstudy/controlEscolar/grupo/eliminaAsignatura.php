<?php
include '../../jwt.php';
include '../../headers.php';

try {
  
  db ('controlEscolar');

  if($_SERVER['REQUEST_METHOD'] == "GET"){
    foreach($_GET as $clave => $valor){
      ${$clave} = escape_cara($valor);
    }

      $usuario = Auth::GetData(
            $jwt  
        );

        $elimina=update('inter_asignatura_grupo','estatus=0,usuario_actualiza="'.$usuario->usuario.'"',
        'asignatura_grupo_id='.$id_asignatura_grupo);
        if($elimina){
          $elimina_materia=update($GLOBALS["db_learning"].'.tr_materia','estatus=0,usuario_actualiza="'.$usuario->usuario.'"',
        'asignatura_grupo_id='.$id_asignatura_grupo);         
        }
        
    
        //ingreso todas las escuelas que tiene este profesor
       
       if($elimina_materia){
    		$json = array("status" => 1, "msg" => "Se eliminó grupo correctamente");
    	 }else{
    		$json = array("status" => 0, "msg" => "No se eliminó el grupo");
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