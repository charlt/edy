<?php
include '../jwt.php';
include '../headers.php';

db('controlEscolar');

try {
  if($_SERVER['REQUEST_METHOD'] == "POST"){
    foreach($_POST as $clave => $valor){
      ${$clave} = escape_cara($valor);
    }
    
      $usuario = Auth::GetData(
            $jwt  
        );
         
        $inserta = inserta('cat_area','area_desc, area_nombre ,estatus','"'.$area_desc.'","'.$area.'",1');

        if($inserta){
        $json = array("status" => 1, "msg" => "Se insertó el rol correctamente");
       }else{
        $json = array("status" => 0, "msg" => "No se logró insertar");
       }

  }else{
    $json = array("status" => 0, "msg" => "Método no aceptado");
  }

  echo json_encode($json);

} catch (Exception $e) {
    $json = array("status" => 0, "msg" =>  $e->getMessage());

    echo json_encode($json);
}