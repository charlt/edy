<?php
include '../../jwt.php';
include '../../headers.php';

try {
  
//   db ('datosGenerales');

  if($_SERVER['REQUEST_METHOD'] == "GET"){
    foreach($_GET as $clave => $valor){
      ${$clave} = escape_cara($valor);
    }

    $usuario = Auth::GetData(
        $jwt  
    );

    $query = query('SELECT * FROM cat_privilegios_alumno WHERE estatus = 1');

    $privilegios= array("principales" => array(), "secundarios" => array());
    while ($arreglo_privilegios = arreglo($query)){
        if ($arreglo_privilegios['type'] == 1) {
            array_push($privilegios['principales'], $arreglo_privilegios);
        }else if ($arreglo_privilegios['type'] == 2) {
            array_push($privilegios['secundarios'], $arreglo_privilegios);
        }
    }
            
    if(num($query)){
        $json = array("status" => 1, "msg" => "Se encontraron los privilegios", "privilegios" => $privilegios);
    }else{
        $json = array("status" => 0, "msg" => "No se encontraron los privilegios");
    }

  }else{
    $json = array("status" => 0, "msg" => "Método no aceptado");
  }

  echo json_encode($json);

} catch (Exception $e) {
    $json = array("status" => 0, "msg" =>  $e->getMessage());

    echo json_encode($json);
}