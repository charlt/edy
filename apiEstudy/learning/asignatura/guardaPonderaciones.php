<?php
include '../../jwt.php';
include '../../headers.php';

db ('learning');

try {

  if($_SERVER['REQUEST_METHOD'] == "POST"){
    
    $jwt=$_POST["jwt"];

        
    $id_actividades=$_POST["id_actividad"];
    $ponderacion=$_POST["ponderacion"];


      $usuario = Auth::GetData(
            $jwt  
        );

    $i=0;
    foreach ($id_actividades as $id_actividad) {
        update('tr_actividad','ponderacion ='.$ponderacion[$i],'actividad_id ='.$id_actividad);
        $i++;
    }

    	$json = array("status" => 1, "msg" => "Se actualizaron las ponderaciones del grupo");
    	 

  }else{
  	$json = array("status" => 0, "msg" => "Método no aceptado");
  }

  /* Output header */

  echo json_encode($json);

} catch (Exception $e) {
    $json = array("status" => 0, "msg" =>  $e->getMessage());

    echo json_encode($json);
}