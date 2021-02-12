<?php

use function PHPSTORM_META\map;

include '../../jwt.php';
include '../../headers.php';
include '../../seguimiento/class/aspirante.class.php';
include '../../controlEscolar/class/matricula.class.php';



try {
  
  db('seguimiento');

  $aspirante = new aspirante();
  

  if($_SERVER['REQUEST_METHOD'] == "GET"){
    foreach($_GET as $clave => $valor){
      ${$clave} = escape_cara($valor);
    }

    
    


    $aspirantes = $aspirante::consulta_aspirantes_aptos();
    
    $total_aspirantes = sizeof($aspirantes);
    $num_aspirantes = 0;
    foreach ($aspirantes as $_aspirante) {
      $matriculado = $aspirante::matricula_aspirante($_aspirante['persona_id']);
      if($matriculado['status'] == 1){
        $num_aspirantes++;
      }
    }
    
    if(1){
      $json = array("status" => 1, "msg" => "Se matricularon ".$num_aspirantes." de ".$total_aspirantes." alumnos correctamnte");
     }else{
      $json = array("status" => 0, "msg" => "No se crearón alumnos");
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
