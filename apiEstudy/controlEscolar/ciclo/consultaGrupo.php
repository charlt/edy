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


    $query_grupo = query('SELECT * FROM tr_grupo WHERE estatus = 1 and ciclo_id = '.$id_ciclo);

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
