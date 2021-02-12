<?php
include '../../jwt.php';
include '../../headers.php';
include '../encuesta/class/encuesta.class.php';

try {
  
  db ('seguimiento');
  $form = new Encuesta();

  if($_SERVER['REQUEST_METHOD'] == "POST"){
    
    $jwt=$_POST["jwt"];

    $switch_encuesta_id=$_POST["switch_encuesta_id"];
    $campo_encuesta_id=$_POST["campo_encuesta_id"];
    $respuesta=$_POST["respuesta"];

      
      $usuario = Auth::GetData(
            $jwt  
        );
        

      $query_persona= query('SELECT encuesta_persona_id  from inter_encuesta_persona
       where persona_id='.$usuario->id.' and switch_encuesta_id ='.$switch_encuesta_id);  

      if(num($query_persona) ){
        $inserta_encuesta_persona=1;
      }else{
        $inserta_encuesta_persona=inserta('inter_encuesta_persona','switch_encuesta_id, persona_id, fecha_creacion, estatus',
        ''.$switch_encuesta_id.','.$usuario->id.',now(), 1');
      }
    
  if($inserta_encuesta_persona){
    
    $encuesta = "INSERT INTO  inter_campo_persona(campo_encuesta_id, persona_id,switch_encuesta_id, respuesta, fecha_creacion, estatus) VALUES";
    
    $num_encuesta=count($campo_encuesta_id);
    for ($i=0; $i<$num_encuesta; $i++){ 
      $encuesta .='('.$campo_encuesta_id[$i].','.$usuario->id.','.$switch_encuesta_id.', "'.$respuesta[$i].'", now(),1),';
    }
       $encuesta = trim($encuesta, ',');
       $inserta=query($encuesta);
    }

    //  $form::validar_solicitud($usuario->id);
    
    

       if($inserta){
    		$json = array("status" => 1, "msg" => "La información se guardo correctamente");
    	 }else{
    		$json = array("status" => 0, "msg" => "No se insertó correctamente");
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