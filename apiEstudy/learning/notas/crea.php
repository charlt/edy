<?php
include '../../jwt.php';
include '../../headers.php';

try {

  db('learning');

  if($_SERVER['REQUEST_METHOD'] == "POST"){
    foreach($_POST as $clave => $valor){
      ${$clave} = escape_cara($valor);
    }
    
      $usuario = Auth::GetData(
            $jwt  
        );

        if(!isset($actividad_id)) $actividad_id = 'null';
         
        //grupo es una cadena no un número
        $inserta = inserta('tr_nota', 'actividad_id, materia_id, docente_id, texto, fecha_creacion, estatus',
        ''.$actividad_id.','.$materia_id.', '.$docente_id.',"'.$texto.'",now(), 1');


       
       //ingreso todas las escuelas que tiene este profesor
       
       if($inserta){
    		$json = array("status" => 1, "msg" => "Se insertó la nota correctamente");
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