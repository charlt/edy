<?php
include '../../jwt.php';
include '../../headers.php';

try {

  db('learning');

  if($_SERVER['REQUEST_METHOD'] == "POST"){
    
    $jwt = $_POST["jwt"];
    $id_reactivo =$_POST["id_reactivo"];
    $id_materia_fecha_actividad=$_POST["id_materia_fecha_actividad"];


    $usuario = Auth::GetData(
      $jwt  
      );
            
                        
      $num_registros = sizeof($id_reactivo);
      for ($i=0; $i <$num_registros ; $i++) {
        $orden = $i+1;
        $elimina = query('delete from tr_dd_respuesta where reactivo_id = '.$id_reactivo[$i]);

          $inserta = inserta('tr_dd_respuesta','reactivo_id, materia_fecha_actividad_id,orden,fecha_creacion, estatus',
          ''.$id_reactivo[$i].','.$id_materia_fecha_actividad.','.$orden.', now(), 1');           
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