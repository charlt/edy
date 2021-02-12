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


    $query_grupo = query('SELECT tg.grupo_id,ciclo_id,grupo,nombre_grupo,descripcion,cupo,plan_orden_id,tg.situacion_grupo_id,situacion_grupo_descripcion
    FROM tr_grupo tg
    join cat_situacion_grupo csg on csg.situacion_grupo_id = tg.situacion_grupo_id
    WHERE tg.estatus = 1 order by tg.grupo_id desc');

    $json_grupo = array();
    while($arreglo_grupo = arreglo($query_grupo)){
      array_push($json_grupo,$arreglo_grupo);
    }
  

    if(num($query_grupo) > 0 ){
      $json = array("status" => 1, "msg" => "Se encontraron grupo","grupo" => $json_grupo);
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
