<?php
include '../../jwt.php';
include '../../headers.php';

try {

  db('learning');

  if($_SERVER['REQUEST_METHOD'] == "POST"){
    foreach($_POST as $clave => $valor){
      ${$clave} = escape_cara($valor);
    }
    
      $usuario = Auth::GetData(
            $jwt  
        );
         

        $query_acceso =query('select videoconferencia_id 
        from tr_acceso_videoconferencia 
        where persona_id ='.$id_persona.' and videoconferencia_id ='.$id_video_conferencia.'
        ');
        // print_r($arreglo_hora);
        if(!num($query_acceso)){
          
            $inserta = inserta('tr_acceso_videoconferencia', 
            'videoconferencia_id,persona_id,estatus',$id_video_conferencia.',"'.$id_persona.'",1');

        }else{
          $inserta=0;
        }
        
       
       //ingreso todas las escuelas que tiene este profesor
       
       if($inserta){
    		$json = array("status" => 1, "msg" => "Acceso insertado correctamente");
    	 }else{
    		$json = array("status" => 0, "msg" => "No se logró insertar acceso");
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
