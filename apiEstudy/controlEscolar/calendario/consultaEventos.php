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
    $query = query('SELECT evento_id,persona_id,ciclo_id,evento_nombre,evento_desc,color,fecha_inicio,fecha_fin 
    FROM cat_eventos_calendario WHERE estatus = 1 AND ciclo_id = '.$id_ciclo);
    
    $arreglo = array();

    while ($arreglo_eventos = arreglo($query)){
        array_push($arreglo, $arreglo_eventos);
    }
              
    if(num($query)){
        $json = array("status" => 1, "msg" => "Se encontró información", "eventos" => $arreglo);
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
