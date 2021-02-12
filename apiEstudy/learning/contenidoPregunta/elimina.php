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
         
    $query_archivo = query('select contenido from '.$tabla.' where pregunta_id = '.$id_pregunta);
    $arreglo_archivo = arreglo($query_archivo);
    $tipo_extension = '../../../'.$arreglo_archivo['contenido'];
    
    if($arreglo_archivo['contenido'] != '')
      unlink($tipo_extension);

    $elimina = query('delete from tr_rc_pregunta 
        where pregunta_id = '.$id_pregunta);


       
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