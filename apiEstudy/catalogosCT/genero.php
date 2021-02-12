<?php
include '../jwt.php';
include '../headers.php';

try {
  
  db('certificaciontitulacion');
  
  if($_SERVER['REQUEST_METHOD'] == "GET"){
    foreach($_GET as $clave => $valor){
      ${$clave} = escape_cara($valor);
    }
    
    $usuario = Auth::GetData(
        $jwt  
    );


    $query_genero = query('SELECT * FROM cat_genero');

    $json_genero = array();
    while($arreglo_genero = arreglo($query_genero)){
      array_push($json_genero,$arreglo_genero);
    }
  

    if(num($query_genero) > 0 ){
      $json = array("status" => 1, "msg" => "Se encontro genero","genero" => $json_genero);
     }else{
      $json = array("status" => 0, "msg" => "No se encontro genero");
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
