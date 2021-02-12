<?php
include '../jwt.php';
include '../headers.php';

try {

  db('controlEscolar');

  if($_SERVER['REQUEST_METHOD'] == "GET"){
    foreach($_GET as $clave => $valor){
      ${$clave} = escape_cara($valor);
    }
    
    $usuario = Auth::GetData(
        $jwt
      );


    $query_ciclo = query('SELECT ciclo_id, fecha_inicio, fecha_fin,  
    ciclo_desc, cc.ciclo_estatus_id, ciclo_estatus_desc, cc.fecha_creacion, cc.usuario_crea, cc.estatus  
    FROM cat_ciclo cc 
    join cat_ciclo_estatus on cat_ciclo_estatus.ciclo_estatus_id = cc.ciclo_estatus_id 
    where cc.estatus = 1');

    $json_ciclo = array();
    while($arreglo_ciclo = arreglo($query_ciclo)){
      array_push($json_ciclo,$arreglo_ciclo);
    }
  

    if(num($query_ciclo) > 0 ){
      $json = array("status" => 1, "msg" => "Se encontraron ciclos","ciclo" => $json_ciclo);
     }else{
      $json = array("status" => 0, "msg" => "No se encontraron ciclos");
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
