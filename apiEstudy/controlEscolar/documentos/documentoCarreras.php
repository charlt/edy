<?php
include '../../jwt.php';
include '../../headers.php';

try {
  
  db('seguimiento');

  if($_SERVER['REQUEST_METHOD'] == "GET"){
    foreach($_GET as $clave => $valor){
      ${$clave} = escape_cara($valor);
    }
    
    $usuario = Auth::GetData(
        $jwt  
    );

    $query_documento = query('SELECT tc.carrera_id, tc.carrera_clave, tc.carrera, idc.documento_carrera_id, idc.documento_id 
    FROM ecunisant_estudydg.tr_carrera tc
    LEFT JOIN inter_documento_carrera idc ON tc.carrera_id = idc.carrera_id
    AND idc.documento_id = '.$id_documento.'
    WHERE tc.estatus = 1');

    $json_carreras = array();
    while($arreglo_documento = arreglo($query_documento)){
      array_push($json_carreras, $arreglo_documento);
    }

    if(num($query_documento)){
      $json = array("status" => 1, "msg" => "Se encontraron carreras", "carreras" => $json_carreras);
    }else{
      $json = array("status" => 0, "msg" => "No se encontraron carreras");
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
