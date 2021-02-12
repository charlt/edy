<?php
include '../../jwt.php';
include '../../headers.php';

try {

  db('datosGenerales');

  if($_SERVER['REQUEST_METHOD'] == "POST"){
    foreach($_POST as $clave => $valor){
      ${$clave} = escape_cara($valor);
    }
    
      $usuario = Auth::GetData(
            $jwt  
        );
        if(isset($id_asignatura_padre) && $id_asignatura_padre != ""){
          $inserta = inserta_last_id('cat_asignaturas', 'asignatura_padre_id, asignatura_clave, asignatura,
          creditos,calif_min,calif_max, tipo_asignatura_id, fecha_creacion,usuario_crea,estatus',
         ''.$id_asignatura_padre.',"'.$asignatura_clave.'","'.$asignatura.'",'.$creditos.','.$calif_min.','.$calif_max.','.$tipo_asignatura_id.', 
         now(),current_user(),1');
        }else{
          $inserta = inserta_last_id('cat_asignaturas', 'asignatura_clave, asignatura,
          creditos,calif_min,calif_max, tipo_asignatura_id, fecha_creacion,usuario_crea,estatus',
         '"'.$asignatura_clave.'","'.$asignatura.'",'.$creditos.','.$calif_min.','.$calif_max.','.$tipo_asignatura_id.', 
         now(),current_user(),1');
        }

       if($inserta){
    		$json = array("status" => 1, "msg" => "Se insertó la asignatura correctamente", "idAsignatura" => $inserta);
    	 }else{
    		$json = array("status" => 0, "msg" => "No se logró insertar", "idAsignatura" => 0);
    	 }

  }else{
  	$json = array("status" => 0, "msg" => "Método no aceptado");
  }

  echo json_encode($json);

} catch (Exception $e) {
    $json = array("status" => 0, "msg" =>  $e->getMessage());

    echo json_encode($json);
}
