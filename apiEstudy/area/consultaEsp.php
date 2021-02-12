<?php
include '../jwt.php';
include '../headers.php';

try {
  
  db ('controlEscolar');

  if($_SERVER['REQUEST_METHOD'] == "GET"){
    foreach($_GET as $clave => $valor){
      ${$clave} = escape_cara($valor);
    }

      $usuario = Auth::GetData(
            $jwt  
        );

    //SERVICIO DE CONSULTA DE SESIÓN
    $query_area = query('SELECT area_id, area_desc, area_nombre FROM cat_area WHERE estatus=1 and area_id = '.$id_area);

    
       $json_area= array();
       while ($arreglo_area = arreglo($query_area)){
          array_push($json_area,$arreglo_area);
       }
       
       if(num($query_area)){
        $json = array("status" => 1, "msg" => "Se encontro el área","area" => $json_area);
       }else{
        $json = array("status" => 0, "msg" => "No se encontro el área");
       }

  }else{
    $json = array("status" => 0, "msg" => "Método no aceptado");
  }

  echo json_encode($json);

} catch (Exception $e) {
    $json = array("status" => 0, "msg" =>  $e->getMessage());

    echo json_encode($json);
}