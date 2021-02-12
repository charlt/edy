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


    $query_resolucion = query('SELECT * FROM cat_metodos_resolver where estatus = 1');

    $json_resolucion = array();
    while($arreglo_resolucion = arreglo($query_resolucion)){
      array_push($json_resolucion,$arreglo_resolucion);
    }
  

    if(num($query_resolucion) > 0 ){
      $json = array("status" => 1, "msg" => "Se encontraron métodos de resolución","metodos" => $json_resolucion);
     }else{
      $json = array("status" => 0, "msg" => "No se encontraron métodos");
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