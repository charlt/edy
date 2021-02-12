<?php
include '../../jwt.php';
include '../../headers.php';

try {

  db('controlEscolar');
  
  if($_SERVER['REQUEST_METHOD'] == "GET"){
    foreach($_GET as $clave => $valor){
      ${$clave} = escape_cara($valor);
    }
    
    $usuario = Auth::GetData(
            $jwt 
    );
         
          
        $elimina = update('asistencia',
        'asistencia= '.$asistencia,
        'asistencia_id = '.$id_asistencia);

       //ingreso todas las escuelas que tiene este profesor
       
       if($elimina){
    		$json = array("status" => 1, "msg" => "Se corrigió la asistencia correctamente");
    	 }else{
    		$json = array("status" => 0, "msg" => "No se logró cambiar la asitencia");
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