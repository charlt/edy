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

    //SERVICIO DE CONSULTA DE SESIÓN
    $query = query('SELECT ciclo_id, ciclo_desc, ciclo_estatus_id, fecha_inicio, fecha_fin 
    FROM cat_ciclo WHERE estatus = 1 AND ciclo_id = '.$id_ciclo);
    
    $arreglo = array();

    while ($arreglo_ciclo = arreglo($query)){
        array_push($arreglo, $arreglo_ciclo);
    }
              
    if(num($query)){
        $json = array("status" => 1, "msg" => "Se encontró información", "datos" => $arreglo);
    }else{
        $json = array("status" => 0, "msg" => "No se encontró información");
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
