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
         
        $query_acceso = query('SELECT tav.persona_id, tav.fecha_creacion as fecha_acceso, nombre, primer_apellido, segundo_apellido, clave_alumno, email from tr_acceso_videoconferencia tav
        join '.$GLOBALS['db_datosGenerales'].'.personas p  on p.persona_id = tav.persona_id
        join '.$GLOBALS['db_controlEscolar'].'.tr_alumno ta on ta.alumno_id = p.persona_id 
        where videoconferencia_id = '.$id_videoconferencia.' and ta.estatus=1');
        $json_accesos = array();
        while($arreglo = arreglo($query_acceso)){
            array_push($json_accesos, $arreglo);
        }
       
       if(num($query_acceso)){
    		$json = array("status" => 1, "msg" => "Se encontraron personas", "personas"=>$json_accesos);
    	 }else{
    		$json = array("status" => 0, "msg" => "No se encontraron personas");
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
