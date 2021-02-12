<?php
include '../../jwt.php';
include '../../headers.php';

 

try {

  db('datosGenerales');


  if($_SERVER['REQUEST_METHOD'] == "POST"){
    foreach($_POST as $clave => $valor){
      ${$clave} = escape_cara($valor);
    }
    
      $usuario = Auth::GetData(
            $jwt  
        );
      
     
      
        

        $inserta_inter_plan_orden_asignatura = inserta ('inter_plan_orden_asignatura',
        'plan_estudio_id,orden_jerarquico_id,asignatura_id,fecha_creacion, estatus',
        ''.$id_plan_estudio.','.$id_orden_jerarquico.','.$id_asignatura.',now(),1');

        if($inserta_inter_plan_orden_asignatura){
          $json = array("status" => 1, "msg" => "Se vinculó el orden jerarquico con el plan correctamente");
         }else{
          $json = array("status" => 0, "msg" => "No se logró vincular el orden jerarquico ");
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
