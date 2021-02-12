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


    $query_tipo_pregunta = query('SELECT * FROM cat_tipo_pregunta where estatus = 1 and tipo_actividad_id ='.$id_tipo_actividad);

    $json_tipo_pregunta = array();
    while($arreglo_tipo_pregunta = arreglo($query_tipo_pregunta)){
      array_push($json_tipo_pregunta,$arreglo_tipo_pregunta);
    }
  

    if(num($query_tipo_pregunta) > 0 ){
      $json = array("status" => 1, "msg" => "Se encontraron preguntas","preguntas" => $json_tipo_pregunta);
     }else{
      $json = array("status" => 0, "msg" => "No se encontraron preguntas");
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
