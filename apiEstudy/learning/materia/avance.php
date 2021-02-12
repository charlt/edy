<?php
include '../../jwt.php';
include '../../headers.php';
include '../class/materia.class.php';

try {
  $materia = new Materias();
  
  db ('learning');

  if($_SERVER['REQUEST_METHOD'] == "GET"){
    foreach($_GET as $clave => $valor){
      ${$clave} = escape_cara($valor);
    }

      $usuario = Auth::GetData(
            $jwt  
        );

        $porcentaje = $materia::avanceMateria($id_materia,$id_asignatura);
        
    		$json = array("status" => 1, "msg" => "Porcentaje de avance de la materia", "porcentaje"=>$porcentaje);

  }else{
  	$json = array("status" => 0, "msg" => "Método no aceptado");
  }

  /* Output header */

  echo json_encode($json);

} catch (Exception $e) {
    $json = array("status" => 0, "msg" =>  $e->getMessage());

    echo json_encode($json);
}