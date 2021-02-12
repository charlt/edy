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


    $query_tipo_asignatura = query('SELECT * FROM cat_tipo_asignatura');

    $json_tipo_asignatura = array();
    while($arreglo_tipo_asignatura = arreglo($query_tipo_asignatura)){
      array_push($json_tipo_asignatura,$arreglo_tipo_asignatura);
    }
  

    if(num($query_tipo_asignatura) > 0 ){
      $json = array("status" => 1, "msg" => "Se encontro asignatura","asignatura" => $json_tipo_asignatura);
     }else{
      $json = array("status" => 0, "msg" => "No se encontro asignatura");
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
