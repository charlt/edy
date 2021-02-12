<?php
include '../../jwt.php';
include '../../headers.php';

db ('datosGenerales');

try {


  if($_SERVER['REQUEST_METHOD'] == "POST"){
    foreach($_POST as $clave => $valor){
      ${$clave} = escape_cara($valor);
    }
    
      $usuario = Auth::GetData(
            $jwt  
        );
         
        //grupo es una cadena no un número
        $inserta = inserta('tr_bitacora_sesion','usuario_id,fecha_inicio,fecha_fin,dispositivo',
          ''.$usuario->id.',"'.$fecha_inicio.'","'.$fecha_fin.'","'.$dispositivo.'"');
        
      
       //ingreso todas las escuelas que tiene este profesor
       
       if($inserta){
    		$json = array("status" => 1, "msg" => "Se insertó sesión correctamente");
    	 }else{
    		$json = array("status" => 0, "msg" => "No se logró insertar");
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