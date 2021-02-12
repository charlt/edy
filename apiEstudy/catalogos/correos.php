<?php
include '../jwt.php';
include '../headers.php';

try {

  db ('datosGenerales');

  if($_SERVER['REQUEST_METHOD'] == "GET"){
    foreach($_GET as $clave => $valor){
      ${$clave} = escape_cara($valor);
    }
    
    $usuario = Auth::GetData(
        $jwt  
    );


    $query_correo = query('SELECT * FROM tr_correo 
    where institucion_id ='.$usuario->id_institucion);

    $json_correo = array();
    while($arreglo_correo = arreglo($query_correo)){
      array_push($json_correo,$arreglo_correo);
    }
  

    if(num($query_correo) > 0 ){
      $json = array("status" => 1, "msg" => "Se encontro correo","correo" => $json_correo);
     }else{
      $json = array("status" => 0, "msg" => "No se encontraron correos");
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
