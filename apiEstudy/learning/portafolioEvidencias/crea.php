<?php
include '../../jwt.php';
include '../../headers.php';

try {
 db ('learning');


  if($_SERVER['REQUEST_METHOD'] == "POST"){
    foreach($_POST as $clave => $valor){
      ${$clave} = escape_cara($valor);
    }
    
      $usuario = Auth::GetData(
           $jwt  
        );
        
        $inserta = inserta_last_id('tr_portafolio_evidencias', 
        'actividad_id, materia_fecha_actividad_id, descripcion, fecha_creacion, estatus',
        ''.$id_actividad.','.$id_materia_fecha_actividad.',"'.$descripcion.'", now(),1');
                
        
       if($inserta){
         
        $json = array("status" => 1, "msg" => "Se insertó el portafolio correctamente", "idPortafolio"=> $inserta);
       }else{
        $json = array("status" => 0, "msg" => "No se logró insertar portafolio");
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

