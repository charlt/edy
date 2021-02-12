<?php
include '../../jwt.php';
include '../../headers.php';
include '../formulario/class/formulario.class.php';

try {
  
  db ('seguimiento');
  $form = new Formulario();

  if($_SERVER['REQUEST_METHOD'] == "POST"){
    
    $jwt=$_POST["jwt"];

    $formulario_id=$_POST["formulario_id"];
    $campo_formulario_id=$_POST["campo_formulario_id"];
    $respuesta=$_POST["respuesta"];
    $aspirante_id=$_POST["aspirante_id"];;
      
    $usuario = Auth::GetData(
          $jwt  
    );

      $query_aspirante= query('SELECT formulario_aspirante_id  from inter_formulario_aspirante where aspirante_id='.$aspirante_id.' and formulario_id ='.$formulario_id);  

      if(num($query_aspirante) ){
        $inserta_formulario_aspirante=1;
      }else{
        $inserta_formulario_aspirante=inserta('inter_formulario_aspirante','formulario_id, aspirante_id, fecha_creacion, estatus',
        ''.$formulario_id[0].','.$aspirante_id.',now(), 1');
      }
    
  if($inserta_formulario_aspirante){
    
    $formulario = "INSERT INTO  inter_campo_aspirante(campo_formulario_id, aspirante_id, respuesta, fecha_creacion, estatus) VALUES";
    
    $num_formulario=count($campo_formulario_id);
    for ($i=0; $i<$num_formulario; $i++){ 
      $formulario .='('.$campo_formulario_id[$i].','.$aspirante_id.', "'.$respuesta[$i].'", now(),1),';
    }
       $formulario = trim($formulario, ',');
       $inserta=query($formulario);
    }

     $form::validar_solicitud($aspirante_id);
    
    

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