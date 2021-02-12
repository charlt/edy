<?php
include '../../jwt.php';
include '../../headers.php';

try {
  
  db('seguimiento');

  if($_SERVER['REQUEST_METHOD'] == "GET"){
    foreach($_GET as $clave => $valor){
      ${$clave} = escape_cara($valor);
    }
    
    $arreglo_promocion = arreglo(query('SELECT promocion_id, vigencia, now() from cat_promocion  where clave= "'.$clave_promocion.'"'));
    if(!is_null($arreglo_promocion)){
        if($arreglo_promocion['vigencia']>$arreglo_promocion['now()']){   
            $json = array("status" => 1, "msg" => "Código de promoción correcto");
        }else{
            $json = array("status" => 0, "msg" => "Código de promoción vencido");
            
        }
    }else{
      $json = array("status" => 0, "msg" => "Código de promoción inválido");
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
