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
        $elimina = query('update personas 
        set estatus = 0
        where persona_id = '.$id_persona);


       
       //ingreso todas las escuelas que tiene este profesor
       
       if($elimina){
    		$json = array("status" => 1, "msg" => "Se eliminó la persona correctamente");
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
