<?php
include '../../jwt.php';
include '../../headers.php';

try {
 db ('learning');

  if($_SERVER['REQUEST_METHOD'] == "GET"){
    foreach($_GET as $clave => $valor){
      ${$clave} = escape_cara($valor);
    }
    
      $usuario = Auth::GetData(
           $jwt  
        );
        
        
        $edita = update('tr_portafolio_respuesta', 'validado = '.$validado,
        'portafolio_id = '.$id_portafolio.' and actividad_id = '.$id_actividad);
        
       if($edita){
         
        $json = array("status" => 1, "msg" => "Se modifico el estatus correctamente");
       }else{
        $json = array("status" => 0, "msg" => "No se modifico el estatus");
       }

        /* Output header */
}else{
    $json = array("status" => 0, "msg" => "Método no aceptado");
}

echo json_encode($json);

} catch (Exception $e) {
    $json = array("status" => 0, "msg" =>  $e->getMessage());

    echo json_encode($json);
}


 
?>

