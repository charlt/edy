<?php
include '../../jwt.php';
include '../../headers.php';

try {
 db ('controlEscolar');
  if($_SERVER['REQUEST_METHOD'] == "POST"){
    
      $jwt = $_POST['jwt'];
      $id_grupo = $_POST['id_grupo'];
      $id_orden_asignatura = $_POST['id_orden_asignatura'];
    //   $id_portafolio = $_POST['id_portafolio'];
    //   $respuesta= $_POST['respuesta'];
     
      $usuario = Auth::GetData(
           $jwt  
        );

          $inserta = inserta ('inter_asignatura_grupo', 
          'orden_asignatura_id, grupo_id, fecha_creacion, estatus',
          ''.$id_orden_asignatura.','.$id_grupo.', now(),1');
              
        
       if($inserta){         
        $json = array("status" => 1, "msg" => "Se insertó grupo correctamente");
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
