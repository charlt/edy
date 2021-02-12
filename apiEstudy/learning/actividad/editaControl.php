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

        $script_id_actividad_padre =$script_ponderacion =$script_fecha_inicio =$script_fecha_fin = '';
        
        if(isset($fecha_inicio)) $script_fecha_inicio = 'fecha_inicio = "'.$fecha_inicio.' 00:00:00",';
        if(isset($fecha_fin)) $script_fecha_fin = 'fecha_fin = "'.$fecha_fin.' 23:59:59",';
        if(isset($id_actividad_padre)) $script_id_actividad_padre = 'actividad_padre_id = "'.$id_actividad_padre.'",';
        if(isset($ponderacion)) $script_ponderacion = 'ponderacion = "'.$ponderacion.'",';

        $script_edita = $script_id_actividad_padre.$script_ponderacion.$script_fecha_inicio.$script_fecha_fin;
        $script_edita = trim($script_edita,',');


          $edita = update('tr_actividad',
          $script_edita,
          'actividad_id = '.$id_actividad);


       
       //ingreso todas las carreras que tiene
       
       if($edita){
    		$json = array("status" => 1, "msg" => "Se actualizó la actividad correctamente");
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