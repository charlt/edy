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
      
     
        $query_ultimo  = query('
        select max(orden_jerarquico) as max_orden
        from inter_plan_orden ipo 
        join cat_orden_jerarquico coj on coj.orden_jerarquico_id = ipo.orden_jerarquico_id
        where coj.estatus = 1 and ipo.estatus = 1 and plan_estudio_id = '.$id_plan_estudios);

        $arreglo_ultimo = arreglo($query_ultimo);

        if($arreglo_ultimo['max_orden'] === null ){
          $max_orden = 1;
        }else{
          $max_orden = $arreglo_ultimo['max_orden'] + 1;
        }
        
        $inserta_inter_plan_orden = inserta ('inter_plan_orden',
        'plan_estudio_id,orden_jerarquico_id,fecha_creacion, estatus',
        ''.$id_plan_estudios.','.$max_orden.',now(),1');

        if($inserta_inter_plan_orden){
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
