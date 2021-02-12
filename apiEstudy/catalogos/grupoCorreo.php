<?php
include '../jwt.php';
include '../headers.php';

try {
  if($_SERVER['REQUEST_METHOD'] == "GET"){
    foreach($_GET as $clave => $valor){
      ${$clave} = escape_cara($valor);
    }
    
    $usuario = Auth::GetData(
        $jwt  
    );


    $query_grupo_correo = query('SELECT * FROM cat_grupo_correo where estatus = 1');

    $json_grupo_correo = array();
    while($arreglo_grupo_correo = arreglo($query_grupo_correo)){
      array_push($json_grupo_correo, $arreglo_grupo_correo);
    }
  

    if(num($query_grupo_correo) > 0 ){
      $json = array("status" => 1, "msg" => "Se encontraron grupos","grupos" => $json_grupo_correo);
     }else{
      $json = array("status" => 0, "msg" => "No se encontraron grupos");
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
