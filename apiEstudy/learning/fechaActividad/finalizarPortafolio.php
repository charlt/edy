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
         
        //grupo es una cadena no un número
        // $inserta = inserta('tr_retroalimentacion', 'materia_fecha_actividad_id, persona_id, texto, origen, fecha_creacion, estatus',
        // ''.$materia_fecha_actividad_id.', '.$persona_id.',"'.$texto.'",'.$origen.',now(), 1');

        $update = update('tr_portafolio_evidencias','paso = 3 ','materia_fecha_actividad_id = '.$materia_fecha_actividad_id);

        $update = update('tr_materia_fecha_actividad','estatus_actividad_id = 3 ','materia_fecha_actividad_id = '.$materia_fecha_actividad_id);
       
       //ingreso todas las escuelas que tiene este profesor
       
       if($update){
    		$json = array("status" => 1, "msg" => "Se envió la solicitud correctamente");
    	 }else{
    		$json = array("status" => 0, "msg" => "No se logró enviar la solicitud");
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