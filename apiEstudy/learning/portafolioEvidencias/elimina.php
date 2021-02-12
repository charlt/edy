<?php
include '../../jwt.php';
include '../../headers.php';

try {
 db ('learning');


  if($_SERVER['REQUEST_METHOD'] == "POST"){
    foreach($_POST as $clave => $valor){
      ${$clave} = escape_cara($valor);
    }
    
      $usuario = Auth::GetData(
           $jwt  
        );
        
        
        $edita = update('tr_portafolio_evidencias', 'estatus = 0',
        'portafolio_id = '.$id_portafolio);
        
       if($edita){
         
        $json = array("status" => 1, "msg" => "Se elimino el portafolio correctamente");
       }else{
        $json = array("status" => 0, "msg" => "No se logró eliminar el portafolio");
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

