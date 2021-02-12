<?php
include '../../jwt.php';
include '../../headers.php';

try {
 db ('learning');


  if($_SERVER['REQUEST_METHOD'] == "POST"){
    
      $id_actividad = $_POST['id_actividad'];
      $id_portafolio = $_POST['id_portafolio'];
      
      $id_materia_fecha_actividad = $_POST['id_materia_fecha_actividad'];
      $respuesta= $_POST['respuesta'];
      $jwt = $_POST['jwt'];
    
      $usuario = Auth::GetData(
           $jwt  
        );
        $num=sizeof($id_actividad);
        $respuestas_correctas = 0;

        for ($i = 0; $i < $num; $i++) {
          $inserta = inserta ('tr_portafolio_respuesta', 
          'actividad_id, portafolio_id, validado, respuesta,fecha_creacion, estatus',
          ''.$id_actividad[$i].','.$id_portafolio.',0,"'.$respuesta[$i].'", now(),1');
          
          if($inserta)
            $respuestas_correctas++;
        }
        
       
                
        
       if($respuestas_correctas > 0){

        update('tr_materia_fecha_actividad', 'estatus_actividad_id = 3', 'estatus = 1 and materia_fecha_actividad_id = '.$id_materia_fecha_actividad);
         
        $json = array("status" => 1, "msg" => "Se insertaron $respuestas_correctas respuestas correctamente");
       }else{
        $json = array("status" => 0, "msg" => "No se logró insertar");
       }

        /* Output header */
}else{
    $json = array("status" => 0, "msg" => "Método no aceptado");
}

echo json_encode($json);

} catch (Exception $e) {
    $json = array("status" => 0, "msg" =>  $e->getMessage());

    echo json_encode($json);
}


 
?>

