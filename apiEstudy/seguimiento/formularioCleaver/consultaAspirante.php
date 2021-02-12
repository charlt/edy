<?php
include '../../jwt.php';
include '../../headers.php';

try {
  
  db('seguimiento');

  if($_SERVER['REQUEST_METHOD'] == "GET"){
    foreach($_GET as $clave => $valor){
      ${$clave} = escape_cara($valor);
    }
    
    $usuario = Auth::GetData(
        $jwt  
    );

    $query_reactivos = query('SELECT ica.cleaver_base_id, nombre_reactivo,aspirante_id,ica.respuesta_id
    from cat_reactivos_cleaver_base rcb 
    left join inter_cleaver_aspirante ica on ica.cleaver_base_id = rcb.cleaver_base_id
    where rcb.estatus = 1 and  ica.estatus = 1 and aspirante_id = '.$aspirante_id);
  
    $json_reactivos=array();
    while($arreglo = arreglo($query_reactivos)){
        array_push($json_reactivos, $arreglo);
    }
    if(num($query_reactivos)){
      $json = array("status" => 1, "msg" => "Se encontraron reactivos","reactivos" => $json_reactivos);
     }else{
      $json = array("status" => 0, "msg" => "No se encontraron reactivos");
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
