<?php
include '../../jwt.php';
include '../../headers.php';

try {
  
  db ('controlEscolar');

  if($_SERVER['REQUEST_METHOD'] == "POST"){
    foreach($_POST as $clave => $valor){
      ${$clave} = escape_cara($valor);
    }

      $usuario = Auth::GetData(
            $jwt  
        );

        delete('inter_docente_asignatura_grupo','asignatura_grupo_id = '.$id_asignatura_grupo);
      
        $inserta=inserta('inter_docente_asignatura_grupo','docente_id,asignatura_grupo_id, fecha_creacion, estatus',
        ''.$id_docente.','.$id_asignatura_grupo.', now(), 1');

       //ingreso todas las escuelas que tiene este profesor
       
       if($inserta){
    		$json = array("status" => 1, "msg" => "Se insertó docente correctamente");
    	 }else{
    		$json = array("status" => 0, "msg" => "No se insertó docente");
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