<?php
include '../jwt.php';
include '../headers.php';

db ('controlEscolar');

try {

  if($_SERVER['REQUEST_METHOD'] == "POST"){
    
    $jwt=$_POST["jwt"];

    $privilegio_id=$_POST["privilegio_id"];
    
    $area_id=$_POST["area_id"];

      $usuario = Auth::GetData(
            $jwt  
        );


    $privilegio = "INSERT INTO inter_privilegio_area(area_id,privilegio_id, estatus) VALUES";


    foreach ($privilegio_id as $privilegio_id_tmp) {
        $privilegio .='('.$area_id.','.$privilegio_id_tmp.',1),';
      }

       $privilegio = trim($privilegio, ',');
       //ingreso todas las escuelas que tiene este profesor

      // $inserta=inserta('inter_rol_privilegio','area_id,privilegio_id',''.$area_id.','.$privilegio_id_tmp.'');      

      $inserta=query($privilegio);

       if($inserta){
    		$json = array("status" => 1, "msg" => "Se insertó el area privilegio correctamente");
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