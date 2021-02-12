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

        $inserta_asistencia = inserta('asistencia', 'alumno_id,asignatura_grupo_id,asistencia,fecha, estatus',
        ''.$id_alumno.','.$id_asignatura_grupo.',1, now(), 1');
  
      
       
       //ingreso todas las escuelas que tiene este profesor
       
       if($inserta_asistencia){
    		$json = array("status" => 1, "msg" => "Se insertó la asistencia correctamente", "asistencia" => $inserta_asistencia);
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
