<?php
include '../jwt.php';
include '../headers.php';

try {

  db('datosGenerales');

  if($_SERVER['REQUEST_METHOD'] == "GET"){
    foreach($_GET as $clave => $valor){
      ${$clave} = escape_cara($valor);
    }
    
    $usuario = Auth::GetData(
        $jwt
      );


      $query_orden = query('SELECT * FROM cat_orden_jerarquico where estatus=1');

      $json_orden = array();
      while ($arreglo_orden = arreglo($query_orden)){
         array_push($json_orden,$arreglo_orden);
      }
      
      //ingreso todas las escuelas que tiene este profesor
      
      if(num($query_orden)){
           $json = array("status" => 1, "msg" => "Se encontraron ordenes jerárquicos","ordenJerarquico" => $json_orden);
        }else{
           $json = array("status" => 0, "msg" => "No se encontraron ordenes");
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
