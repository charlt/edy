<?php
include '../../jwt.php';
include '../../headers.php';

try {

  db ('controlEscolar');

  if($_SERVER['REQUEST_METHOD'] == "POST"){
    foreach($_POST as $clave => $valor){
      ${$clave} = escape_cara($valor);
    }
    
      $usuario = Auth::GetData(
            $jwt  
        );

        
         //if ($instituciones_db != $institucion_clave) {ok
          $edita = update('inter_asignatura_grupo',
          'fecha_inicio = "'.$fecha_inicio.' 00:00:00",
          fecha_fin = "'.$fecha_fin.' 23:59:59" ',
          'asignatura_grupo_id = '.$id_asignatura_grupo);


       
       //ingreso todas las carreras que tiene
       
       if($edita){
    		$json = array("status" => 1, "msg" => "Se actualizaron las fechas correctamente");
    	 }else{
    		$json = array("status" => 0, "msg" => "No se logró actualizar las fechas");
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
