<?php
include '../../jwt.php';
include '../../headers.php';
include '../datosPregunta/class/pregunta.class.php';

try {

  db ('learning');

  if($_SERVER['REQUEST_METHOD'] == "POST"){
    
    $jwt=$_POST["jwt"];

    $reactivo_desc=$_POST["reactivo_desc"];

    $orden = $_POST["orden"];

    $id_pregunta = $_POST["pregunta_id"];


    $pregunta = new Pregunta();

      $usuario = Auth::GetData(
            $jwt  
        );


    

    $reactivos = update( 'tr_dd_reactivos','pregunta_id, reactivo_desc, fecha_creacion');
    

    foreach ($reactivo_desc as $reactivo_desc_tmp) {
        $reactivos .='('.$id_pregunta.',"'.$reactivo_desc_tmp.'", now()),';
      }
    
      $reactivos = trim($reactivos, ',');


       $edita=query($reactivos);
       
       //ingreso todas las carreras que tiene
       
       if($edita){
    		$json = array("status" => 1, "msg" => "Se actualizó el reactivo correctamente");
    	 }else{
    		$json = array("status" => 0, "msg" => "No se logró actualizar");
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