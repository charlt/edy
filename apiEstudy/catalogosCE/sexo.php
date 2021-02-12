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


    $query_sexo = query('SELECT * FROM cat_sexo where estatus=1');

    $json_sexo = array();
    while($arreglo_sexo = arreglo($query_sexo)){
      array_push($json_sexo,$arreglo_sexo);
    }
  

    if(num($query_sexo) > 0 ){
      $json = array("status" => 1, "msg" => "Se encontro sexo","sexo" => $json_sexo);
     }else{
      $json = array("status" => 0, "msg" => "No se encontro sexo");
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
