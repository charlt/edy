<?php
include '../../jwt.php';
include '../../headers.php';

try {
  
  db ('seguimiento');

  if($_SERVER['REQUEST_METHOD'] == "POST"){
    
    $jwt=$_POST["jwt"];

    $campo_formulario_id=$_POST["campo_formulario_id"];
    
    $reactivo_desc=$_POST["reactivo_desc"];

      $usuario = Auth::GetData(
            $jwt  
        );

  
    $campo = "INSERT INTO  tr_reactivos_campo(campo_formulario_id, reactivo_desc, fecha_creacion, usuario_crea, estatus) VALUES";
    
       foreach ($reactivo_desc as $reactivo_desc_tmp){
            $campo .='('.$campo_formulario_id.',"'.$reactivo_desc_tmp.'", now(), current_user(),1),';

       }
       $campo = trim($campo, ',');
       $inserta=query($campo);

       if($inserta){
    		$json = array("status" => 1, "msg" => "Se insertaron reactivos correctamente");
    	 }else{
    		$json = array("status" => 0, "msg" => "No se insertaron correctamente");
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