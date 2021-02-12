<?php
include '../../jwt.php';
include '../../headers.php';

try {

  db ('datosGenerales');

  if($_SERVER['REQUEST_METHOD'] == "POST"){
    foreach($_POST as $clave => $valor){
      ${$clave} = escape_cara($valor);
    }
    
      $usuario = Auth::GetData( 
            $jwt  
        );
         
        //grupo es una cadena no un número
        $inserta = inserta('tr_carrera', 'institucion_id, nivel_estudios_id, carrera_clave, carrera,
        fecha_creacion, usuario_crea, estatus',
        ''.$usuario->id_institucion.','.$nivel_estudios_id.',"'.$carrera_clave.'",
        "'.$carrera.'",now(), current_user(),1');


       
       //ingreso todas las escuelas que tiene este profesor
       
       if($inserta){
    		$json = array("status" => 1, "msg" => "Se insertó la carrera correctamente");
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
