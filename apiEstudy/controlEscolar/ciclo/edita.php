<?php
include '../../jwt.php';
include '../../headers.php';

try {

  db('controlEscolar');

  if($_SERVER['REQUEST_METHOD'] == "POST"){
    foreach($_POST as $clave => $valor){
      ${$clave} = escape_cara($valor);
    }
    
      $usuario = Auth::GetData(
            $jwt  
        );
         
    

        $edita = update('cat_ciclo', 
        'fecha_inicio = "'.$fecha_inicio.'",
        fecha_fin = "'.$fecha_fin.'",
        ciclo_desc = "'.$ciclo_desc.'",
        ciclo_estatus_id = "'.$ciclo_estatus_id.'",  
        fecha_actualiza = now(),
        usuario_actualiza = current_user()',
        'ciclo_id = '.$id_ciclo);


       
       //ingreso todas las escuelas que tiene este profesor
       
       if($edita){
    		$json = array("status" => 1, "msg" => "Se actualizó el ciclo correctamente");
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
