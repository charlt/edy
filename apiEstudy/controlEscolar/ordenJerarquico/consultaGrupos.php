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


    $query_grupo = query('SELECT grupo_id,grupo,nombre_grupo,tg.plan_orden_id,ipo.orden_jerarquico_id FROM tr_grupo tg
    join '.$GLOBALS['db_datosGenerales'].'.inter_plan_orden ipo on ipo.plan_orden_id = tg.plan_orden_id
    WHERE tg.estatus = 1 and tg.situacion_grupo_id = 1 and tg.plan_orden_id ='.$id_plan_orden);

    $json_grupo = array();
    while($arreglo_grupo = arreglo($query_grupo)){
      array_push($json_grupo,$arreglo_grupo);
    }
  

    if(num($query_grupo) > 0 ){
      $json = array("status" => 1, "msg" => "Se encontraron grupo","grupos" => $json_grupo);
     }else{
      $json = array("status" => 0, "msg" => "No se encontraron grupo");
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
