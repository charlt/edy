<?php
include '../../jwt.php';
include '../../headers.php';
include '../../controlEscolar/class/asignatura.class.php';

try {
  
  db ('learning');
  $asignatura = new Asignatura();

  if($_SERVER['REQUEST_METHOD'] == "GET"){
    foreach($_GET as $clave => $valor){
      ${$clave} = escape_cara($valor);
    }

      $usuario = Auth::GetData(
            $jwt  
        );

        $actividades = $asignatura::consultaActividadesAsignatura($id_asignatura);


       
       if($actividades){
    		$json = array("status" => 1, "msg" => "Se encontraron Actividades","actividades" => $actividades);
    	 }else{
    		$json = array("status" => 0, "msg" => "No se encontraron Actividades");
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