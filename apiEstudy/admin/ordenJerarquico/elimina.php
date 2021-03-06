<?php
include '../../jwt.php';
include '../../headers.php';

try {

  db('datosGenerales');

  if($_SERVER['REQUEST_METHOD'] == "GET"){
    foreach($_GET as $clave => $valor){
      ${$clave} = escape_cara($valor);
    }
    
    $usuario = Auth::GetData(
            $jwt 
    );
         
        
        // if ($usuarios_db != $usuario_id) {  
        $elimina = query('update cat_orden_jerarquico  
        set estatus = 0
        where orden_jerarquico_id  = '.$id_orden_jerarquico);
  

       
       //ingreso todas las escuelas que tiene este profesor
       
       if($elimina){
    		$json = array("status" => 1, "msg" => "Se eliminó el plan de estudio correctamente");
    	 }else{
    		$json = array("status" => 0, "msg" => "No se logró eliminar el plan de estudio");
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
