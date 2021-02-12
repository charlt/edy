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

        $inserta_asistencia = inserta('tr_clase', 'asignatura_grupo_id, nombre_clase, desc_clase, fecha_clase,estatus',
        ''.$id_asignatura_grupo.', "'.$nombre_clase.'","'.$desc_clase.'","'.$fecha_clase.'",1');
        
       
       if($inserta_asistencia){
    		$json = array("status" => 1, "msg" => "Se insertó la clase correctamente");
    	 }else{
    		$json = array("status" => 0, "msg" => "No se logró insertar");
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
