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
        $inserta = inserta('inter_ciclo_institucion_asignatura', 'ciclo_id, institucion_id,
         asignatura_id, fecha_inicio, fecha_fin, fecha_creacion, estatus',
        ''.$id_ciclo.','.$usuario->id_institucion.','.$id_asignatura.',"'.$fecha_inicio.'",
        "'.$fecha_fin.'",now(),1');


       
       //ingreso todas las escuelas que tiene este profesor
       
       if($inserta){
    		$json = array("status" => 1, "msg" => "Se insertó el inter correctamente");
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
