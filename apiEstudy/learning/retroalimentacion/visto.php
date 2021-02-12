<?php
include '../../jwt.php';
include '../../headers.php';

try {
  
  db ('learning');

  if($_SERVER['REQUEST_METHOD'] == "GET"){
    foreach($_GET as $clave => $valor){
      ${$clave} = escape_cara($valor);
    }

      $usuario = Auth::GetData(
            $jwt  
        );

    //SERVICIO DE CONSULTA DE SESIÓN
        
        $edita=update('tr_retroalimentacion','materia_fecha_actividad_id='.$id_materia_fecha_actividad.'
        ,persona_id ='.$id_persona.', texto="'.$texto.'", origen='.$origen.', visto="'.$visto.'"',
        'retroalimentacion_id='.$id_retroalimentacion);
    
       
       //ingreso todas las escuelas que tiene este profesor
       
       if($edita){
    		$json = array("status" => 1, "msg" => "Se modificó correctamente");
    	 }else{
    		$json = array("status" => 0, "msg" => "No se modificó correctamente");
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