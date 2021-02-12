<?php
include '../../jwt.php';
include '../../headers.php';

try {

  db('learning');
  
  if($_SERVER['REQUEST_METHOD'] == "GET"){
    foreach($_GET as $clave => $valor){
      ${$clave} = escape_cara($valor);
    }
    
    $usuario = Auth::GetData(
            $jwt 
    );
         
    
    $query_imagen = query('select contenido from tr_om_reactivos where reactivo_id = '.$reactivo_id);
    $arreglo_imagen = arreglo($query_imagen);
    $imagen = '../../../'.$arreglo_imagen['contenido'];
    if($arreglo_imagen['contenido'] != '')
      unlink($imagen);

    $elimina = query('delete from tr_om_reactivos 
        where reactivo_id = '.$reactivo_id);


       
       //ingreso todas las escuelas que tiene este profesor
       
       if($elimina){
    		$json = array("status" => 1, "msg" => "Se eliminó la pregunta correctamente");
    	 }else{
    		$json = array("status" => 0, "msg" => "No se logró eliminar");
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