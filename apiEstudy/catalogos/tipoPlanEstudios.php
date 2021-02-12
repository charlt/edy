<?php
include '../jwt.php';
include '../headers.php';

try {
  if($_SERVER['REQUEST_METHOD'] == "GET"){
    foreach($_GET as $clave => $valor){
      ${$clave} = escape_cara($valor);
    }
  
    $usuario = Auth::GetData(
          $jwt  
    );

    //SERVICIO DE CONSULTA DE SESIÓN
    $query_tipo_plan = select ('*','cat_tipo_plan_estudios',' estatus = 1 ');

    $periodo_json = array();
    while ($arreglo_tipo_plan = arreglo($query_tipo_plan)){
      array_push($periodo_json,$arreglo_tipo_plan);
    }
       
    //ingreso todas las escuelas que tiene este profesor
    if(num($query_tipo_plan)){
    $json = array("status" => 1, "msg" => "Se encontraron tipos de plan de estudios","tipoPlan" => $periodo_json);
    }else{
    $json = array("status" => 0, "msg" => "No see encontraron tipos de plan de estudios");
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
