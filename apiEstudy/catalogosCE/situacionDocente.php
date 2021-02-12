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


    $query_situacion_docente = query('SELECT * FROM cat_situacion_docente where estatus =1');

    $json_situacion_docente = array();
    while($arreglo_situacion_docente = arreglo($query_situacion_docente)){
      array_push($json_situacion_docente,$arreglo_situacion_docente);
    }
  

    if(num($query_situacion_docente) > 0 ){
      $json = array("status" => 1, "msg" => "Se encontraron Estatus","ciclo_estatus" => $json_situacion_docente);
     }else{
      $json = array("status" => 0, "msg" => "No se encontraron Estatus");
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
