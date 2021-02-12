<?php
include '../../jwt.php';
include '../../headers.php';

db ('learning');

try {



  if($_SERVER['REQUEST_METHOD'] == "POST"){
    
    $jwt=$_POST["jwt"];

    $asignatura_id=$_POST["asignatura_id"];
    
    $modulo_id=$_POST["modulo_id"];

    $fecha_inicio=$_POST["fecha_inicio"];

    $fecha_fin=$_POST["fecha_fin"];

      $usuario = Auth::GetData(
            $jwt  
        );


    $asignatura = "INSERT INTO inter_modulos_asignaturas(modulo_id,asignatura_id,fecha_inicio,fecha_fin, estatus) VALUES";


    foreach ($asignatura_id as $asignatura_id_tmp) {
    
    
    $asignatura .='('.$modulo_id.','.$asignatura_id_tmp.',"'.$fecha_inicio.'","'.$fecha_fin.'",1),';


      }

       $asignatura = trim($asignatura, ',');
       //ingreso todas las escuelas que tiene este profesor

      // $inserta=inserta('inter_rol_privilegio','rol_id,privilegio_id',''.$rol_id.','.$privilegio_id_tmp.'');      

      $inserta=query($asignatura);

       if($inserta){
    		$json = array("status" => 1, "msg" => "Se insertó el Bloque de la asignatura correctamente");
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