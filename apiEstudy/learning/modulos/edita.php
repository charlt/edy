<?php
include '../../jwt.php';
include '../../headers.php';

try {

  db ('learning');

  if($_SERVER['REQUEST_METHOD'] == "POST"){
    foreach($_POST as $clave => $valor){
      ${$clave} = escape_cara($valor);
    }
    
      $usuario = Auth::GetData(
            $jwt  
        );

        
         //if ($instituciones_db != $institucion_clave) {ok
          $edita = update('cat_modulos',
          'modulo_numero = '.$modulo_numero.',
          modulo_nombre = "'.$modulo_nombre.'",
          fecha_actualiza = now(),
          usuario_actualiza = current_user()',
          'modulo_id = '.$id_modulo);

          update('tr_actividad','actividad_nombre="Calificación '.$modulo_nombre.'"','tipo_actividad_id = 5 and modulo_id = '.$id_modulo);
       
       //ingreso todas las carreras que tiene
       
       if($edita){
    		$json = array("status" => 1, "msg" => "Se actualizó el Bloque correctamente");
    	 }else{
    		$json = array("status" => 0, "msg" => "No se logró actualizar");
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