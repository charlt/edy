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


    $query_dificultad = query('SELECT * FROM cat_dificultad where estatus = 1');

    $json_dificultad = array();
    while($arreglo_dificultad = arreglo($query_dificultad)){
      array_push($json_dificultad,$arreglo_dificultad);
    }
  

    if(num($query_dificultad) > 0 ){
      $json = array("status" => 1, "msg" => "Se encontraron dificultades","dificultad" => $json_dificultad);
     }else{
      $json = array("status" => 0, "msg" => "No se encontraron dificultades");
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
