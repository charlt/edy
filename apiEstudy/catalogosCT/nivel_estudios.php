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


    $query_nivel_estudios = query('SELECT * FROM cat_nivel_estudios');

    $json_nivel_estudios = array();
    while($arreglo_nivel_estudios = arreglo($query_nivel_estudios)){
      array_push($json_nivel_estudios,$arreglo_nivel_estudios);
    }
  

    if(num($query_nivel_estudios) > 0 ){
      $json = array("status" => 1, "msg" => "Se encontro nivel de estudios","nivel de estudios" => $json_nivel_estudios);
     }else{
      $json = array("status" => 0, "msg" => "No se encontro nivel de estudios");
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
