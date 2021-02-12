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
         if(isset($asignatura_grupo_id)){
             $query_videoconferencias = query('SELECT asignatura_grupo_id,descripcion,unix_timestamp(fecha_inicio) as fecha_inicio,unix_timestamp(fecha_fin) as fecha_fin, nombre, url_descarga   from tr_videoconferencia tv where tv.estatus = 1 and tv.url_descarga is not null and tv.asignatura_grupo_id='.$asignatura_grupo_id);
            }
        // else{
        //         $query_videoconferencias = query('SELECT asignatura_grupo_id,descripcion,fecha_inicio,fecha_fin,nombre,url_descarga from tr_videoconferencia tv where tv.estatus = 1 and tv.url_descarga is not null');
        //  }
        $json_videoconferencias = array();
        while($arreglo = arreglo($query_videoconferencias)){
            array_push($json_videoconferencias, $arreglo);
        }
       
       if(num($query_videoconferencias)){
    		$json = array("status" => 1, "msg" => "Se encontraron videoconferencias", "videoconferencias"=>$json_videoconferencias);
    	 }else{
    		$json = array("status" => 0, "msg" => "No se encontraron videoconferencias");
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
