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

    //SERVICIO DE CONSULTA DE SESIÓN
    $query_videoconferencia_activa = query('select tv.videoconferencia_id, tv.url_meet
     from tr_videoconferencia tv
    join '.$GLOBALS['db_controlEscolar'].'.inter_docente_asignatura_grupo idag on idag.asignatura_grupo_id = tv.asignatura_grupo_id
    left join inter_videoconferencia_zoom  tuz on tv.videoconferencia_id = tuz.videoconferencia_id 
    where docente_id = '.$usuario->id.' and idag.estatus = 1 and now() between fecha_inicio and fecha_fin and tv.estatus = 1');

    $arreglo_videoconferencias = array();
    while ($arreglo = arreglo($query_videoconferencia_activa)) {
      array_push($arreglo_videoconferencias, $arreglo);
    }

        
    $conferencias_activas = num($query_videoconferencia_activa);

        
       //ingreso todas las escuelas que tiene este profesor
       
       if($conferencias_activas){
        $json = array("status" => 1, "msg" => "Se encontraron conferencias","conferenciasActivas" => $conferencias_activas, 
          "videoconferencias" => $arreglo_videoconferencias);
    	 }else{
    		$json = array("status" => 0, "msg" => "No se encontraron conferencias");
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
