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
    $query = query('select tv.videoconferencia_id,tv.nombre, tg.grupo,tg.nombre_grupo,tv.fecha_inicio,tv.fecha_fin,
    tuz.usuario_zoom_id,tuz.usuario,tuz.password,apikey,apisecret,idmeeting
    from tr_videoconferencia tv
    join  '.$GLOBALS['db_controlEscolar'].'.inter_asignatura_grupo iag on iag.asignatura_grupo_id = tv.asignatura_grupo_id
    join  '.$GLOBALS['db_controlEscolar'].'.tr_grupo tg on tg.grupo_id = iag.grupo_id
    join tr_materia tm on tm.asignatura_grupo_id = iag.asignatura_grupo_id
    left join inter_videoconferencia_zoom ivz on ivz.videoconferencia_id = tv.videoconferencia_id
    left join tr_usuario_zoom tuz on tuz.usuario_zoom_id = ivz.usuario_zoom_id
    where now() < tv.fecha_fin and tv.estatus = 1 and tm.estatus = 1 and materia_id = '.$id_materia.'
    order by tv.fecha_inicio');

    
    $json_conf=array();
        
        while($arreglo = arreglo($query)){
            array_push($json_conf, $arreglo);
        }
       
       //ingreso todas las escuelas que tiene este profesor
       
       if(num($query)){
    		$json = array("status" => 1, "msg" => "Se encontraron conferencias","conferencias" => $json_conf);
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
