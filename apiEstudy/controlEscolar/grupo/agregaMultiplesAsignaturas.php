<?php
include '../../jwt.php';
include '../../headers.php';

try {
  
  db ('controlEscolar');

  if($_SERVER['REQUEST_METHOD'] == "POST"){
    
    $jwt=$_POST["jwt"];

    $orden_asignatura_id=$_POST["orden_asignatura_id"];
    
    $grupo_id=$_POST["grupo_id"];

    $fecha_inicio=$_POST["fecha_inicio"];

    $fecha_fin=$_POST["fecha_fin"];

      $usuario = Auth::GetData(
            $jwt  
        );

  
    $asignatura = "INSERT INTO inter_asignatura_grupo(orden_asignatura_id, grupo_id,situacion_asignatura_grupo_id,fecha_inicio, fecha_fin, fecha_creacion, estatus) VALUES";
    
       foreach ($orden_asignatura_id as $orden_asignatura_id_tmp){
            $asignatura .='('.$orden_asignatura_id_tmp.','.$grupo_id.',1,"'.$fecha_inicio.'","'.$fecha_fin.'", now(),1),';

       }
       $asignatura = trim($asignatura, ',');
       $inserta=query($asignatura);

       if($inserta){
    		$json = array("status" => 1, "msg" => "Se insertaron asignaturas en grupo correctamente");
    	 }else{
    		$json = array("status" => 0, "msg" => "No se pudo insertar asignatura");
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