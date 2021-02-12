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


    $query_tipos_materia = query('SELECT * FROM cat_tipo_materia where estatus = 1');

    $json_tipos_materia = array();
    while($arreglo_tipos_materia = arreglo($query_tipos_materia)){
      array_push($json_tipos_materia,$arreglo_tipos_materia);
    }
  

    if(num($query_tipos_materia) > 0 ){
      $json = array("status" => 1, "msg" => "Se encontraron tipos de materias","tipoMateria" => $json_tipos_materia);
     }else{
      $json = array("status" => 0, "msg" => "No se encontraron tipos de materias");
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
