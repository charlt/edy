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
   
        

        $inserta_orden_jerarquico = inserta_last_id('cat_orden_jerarquico',
        ' orden_jerarquico, orden_jerarquico_descripcion, fecha_creacion,usuario_crea, estatus',
         '"'.$orden_jerarquico.'","'.$descripcion_orden_jerarquico.'", now() ,current_user(),1');    
      
        
       if($inserta_orden_jerarquico){

    		$json = array("status" => 1, "msg" => "Se insertó el orden jerarquico correctamente" , "idOrdenJerarquico" => $inserta_orden_jerarquico);
    	 }else{
    		$json = array("status" => 0, "msg" => "No se logró insertar el orden jerarquico ");
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
