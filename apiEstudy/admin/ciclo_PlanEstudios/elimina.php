<?php
include '../../jwt.php';
include '../../headers.php';

try {

  db ('datosGenerales');

  if($_SERVER['REQUEST_METHOD'] == "GET"){
    foreach($_GET as $clave => $valor){
      ${$clave} = escape_cara($valor);
    }
    
    $usuario = Auth::GetData(
            $jwt 
    );
         
        // if ($plan_estudio_db != $plan_estudio_clave) {
          $elimina = query('update inter_ciclo_plan_estudios
          set estatus = 0
          where ciclo_id = '.$id_ciclo.' and plan_estudio_id = '.$id_plan_estudio);

       
       //ingreso todas las escuelas que tiene este profesor
       
       if($elimina){
    		$json = array("status" => 1, "msg" => "Se eliminó el plan de estudio correctamente");
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
