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

    $query = query('SELECT * FROM cat_privilegios_docente WHERE estatus = 1');

    $privilegios= array();
    while ($arreglo_privilegios = arreglo($query)){
        array_push($privilegios, $arreglo_privilegios);
    }
            
    if(num($query)){
        $json = array("status" => 1, "msg" => "Se encontraron los privilegios", "privilegios" => $privilegios, "cargaBloques" => $GLOBALS['carga_bloques']);
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