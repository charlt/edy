<?php
include '../jwt.php';
include '../headers.php';

try {
  
  db('learning');

  if($_SERVER['REQUEST_METHOD'] == "GET"){
    foreach($_GET as $clave => $valor){
      ${$clave} = escape_cara($valor);
    }
    
    $usuario = Auth::GetData(
        $jwt  
    );


    $query_estatus = query('SELECT * FROM cat_estatus_materia where estatus = 1');

    $json_estatus = array();
    while($arreglo_estatus = arreglo($query_estatus)){
      array_push($json_estatus,$arreglo_estatus);
    }
  

    if(num($query_estatus) > 0 ){
      $json = array("status" => 1, "msg" => "Se encontraron estatus de materia","estatus" => $json_estatus);
     }else{
      $json = array("status" => 0, "msg" => "No se encontraron estatus");
     }

}else{
    $json = array("status" => 0, "msg" => "Método no aceptado");
}

echo json_encode($json);

} catch (Exception $e) {
  $json = array("status" => 0, "msg" =>  $e->getMessage());

  echo json_encode($json);
}
