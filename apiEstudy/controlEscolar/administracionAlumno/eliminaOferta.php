<?php
include '../../jwt.php';
include '../../headers.php';

try {

  db('controlEscolar');
  
  if($_SERVER['REQUEST_METHOD'] == "GET"){
    foreach($_GET as $clave => $valor){
      ${$clave} = escape_cara($valor);
    }
    
    $usuario = Auth::GetData(
            $jwt 
    );

    
    // $elimina_oferta = update('inter_alumno_plan',
    // 'estatus=0',' plan_orden_id = '.$id_plan_orden.' and alumno_id = '.$alumno_id);

    $elimina_oferta = delete('inter_alumno_plan',' plan_orden_id = '.$id_plan_orden.' and alumno_id = '.$alumno_id);

    
    
       if($elimina_oferta){
    		$json = array("status" => 1, "msg" => "Se eliminó Oferta Educativa");
    	 }else{
    		$json = array("status" => 0, "msg" => "No se logró eliminar");
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
