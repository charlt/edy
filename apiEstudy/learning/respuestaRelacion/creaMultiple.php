<?php
include '../../jwt.php';
include '../../headers.php';

try {

  db('learning');

  if($_SERVER['REQUEST_METHOD'] == "POST"){
    
    $jwt = $_POST["jwt"];
    $id_a_columna = $_POST["id_a_columna"];
    $id_b_columna = $_POST["id_b_columna"];
    $id_reactivo = $_POST["id_reactivo"];
    $id_estatus_respuesta = $_POST["id_estatus_respuesta"];

    $usuario = Auth::GetData(
      $jwt  
      );
            
                        
      $num_registros = sizeof($id_reactivo);
      for ($i=0; $i <$num_registros ; $i++){
        $elimina = query('delete from tr_rc_respuesta where reactivo_id = '.$id_reactivo[$i]);
        
          $inserta = inserta('tr_rc_respuesta','reactivo_id, materia_fecha_actividad_id,columna_a_id, columna_b_id,
           fecha_creacion, estatus',
          ''.$id_reactivo[$i].','.$id_materia_fecha_actividad.','.$id_a_columna[$i].','.$id_b_columna[$i].',
           now(), 1');           
        }
                    
            
              
       if($inserta){
    		$json = array("status" => 1, "msg" => "Se insertó la respuesta correctamente");
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