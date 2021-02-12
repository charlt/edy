<?php
include '../../jwt.php';
include '../../headers.php';

try {

  db('controlEscolar');

  if($_SERVER['REQUEST_METHOD'] == "POST"){
    foreach($_POST as $clave => $valor){
      ${$clave} = escape_cara($valor);
    }
    
      $usuario = Auth::GetData(
            $jwt  
        );

    $elimina_clase = update('tr_clase','estatus=0','clase_id='.$id_clase);
    if($elimina_clase){
        $elimina_inasistencias = delete('tr_inasistencia_clase','clase_id='.$id_clase);
    }

       if($elimina_clase){
    		$json = array("status" => 1, "msg" => "Se eliminó la clase correctamente");
    	 }else{
    		$json = array("status" => 0, "msg" => "No se logró eliminar");
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
