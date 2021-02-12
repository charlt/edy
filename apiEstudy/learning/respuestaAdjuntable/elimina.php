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
         
    
    $query_archivo = query('select url_archivo from tr_ad_respuesta where respuesta_id = '.$id_respuesta);
    $arreglo_archivo = arreglo($query_archivo);
    $imagen = '../../../'.$arreglo_archivo['url_archivo'];

    if($arreglo_archivo['url_archivo'] != '')
      unlink($imagen);  

    $elimina = query('delete from tr_ad_respuesta 
        where respuesta_id = '.$id_respuesta);


       
       //ingreso todas las escuelas que tiene este profesor
       
       if($elimina){
    		$json = array("status" => 1, "msg" => "Se eliminó el contenido correctamente");
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