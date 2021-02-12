<?php
include '../../jwt.php';
include '../../headers.php';

db('learning');

try {
  if ($_SERVER['REQUEST_METHOD'] == "GET") {
    foreach ($_GET as $clave => $valor) {
      ${$clave} = escape_cara($valor);
    }

    $usuario = Auth::GetData(
      $jwt
    );

    //SERVICIO DE CONSULTA DE SESIÓN
    $tipo_consulta;
    // $min = 1;
    // $max = 50;
    if ($tipo_consulta == 1) { // videoconferencias pasadas
      $query_videoconferencias = query('select videoconferencia_id,nombre,UNIX_TIMESTAMP(fecha_inicio) as fecha_inicio,UNIX_TIMESTAMP(fecha_fin) as fecha_fin from tr_videoconferencia where estatus != 0 and fecha_fin < now() ORDER by fecha_inicio limit ' . $min . ',' . $max . ';');
      $query_num = query('select count(videoconferencia_id) as total from tr_videoconferencia where estatus != 0 and fecha_fin < now();');
    } elseif ($tipo_consulta == 2) { // videoconferencias presentes
      $query_videoconferencias = query('select tv.videoconferencia_id,tv.estatus,nombre,UNIX_TIMESTAMP(fecha_inicio) as fecha_inicio,
      UNIX_TIMESTAMP(fecha_fin) as fecha_fin,apikey, apisecret, idmeeting,url_meet
      from tr_videoconferencia tv
      left join inter_videoconferencia_zoom tvz on tvz.videoconferencia_id = tv.videoconferencia_id 
      left join tr_usuario_zoom tuz on tuz.usuario_zoom_id = tvz.usuario_zoom_id 
      where tv.estatus != 0 and now() between fecha_inicio and fecha_fin limit 0,50');

      $query_num = query('select count(tv.videoconferencia_id) as total
        from tr_videoconferencia tv
        left join inter_videoconferencia_zoom tvz on tvz.videoconferencia_id = tv.videoconferencia_id 
        left join tr_usuario_zoom tuz on tuz.usuario_zoom_id = tvz.usuario_zoom_id 
        where tv.estatus != 0 and now() between fecha_inicio and fecha_fin');
    } elseif ($tipo_consulta == 3) { // videoconferencias futuras
      $query_videoconferencias = query('select videoconferencia_id,nombre,UNIX_TIMESTAMP(fecha_inicio) as fecha_inicio,UNIX_TIMESTAMP(fecha_fin) as fecha_fin from tr_videoconferencia where estatus = 1 and fecha_inicio > now() limit ' . $min . ',' . $max . ';');
      $query_num = query('select count(videoconferencia_id) as total from tr_videoconferencia where estatus = 1 and fecha_inicio > now();');
    }


    $json_videoconferencia = array();
    $json_num = array();
    while ($arreglo_videoconferencia = arreglo($query_videoconferencias)) {
      array_push($json_videoconferencia, $arreglo_videoconferencia);
    }

    $arreglo_num = arreglo($query_num);
    array_push($json_num, $arreglo_num);


    //ingreso todas las escuelas que tiene este profesor

    if (num($query_videoconferencias)) {
      $json = array("status" => 1, "msg" => "Se encontraron videoconferencias", "Videoconferencias" => $json_videoconferencia, "total" => $json_num);
    } else {
      $json = array("status" => 0, "msg" => "No se encontraron Videoconferencias");
    }
  } else {
    $json = array("status" => 0, "msg" => "Método no aceptado");
  }

  /* Output header */

  echo json_encode($json);
} catch (Exception $e) {
  $json = array("status" => 0, "msg" =>  $e->getMessage());

  echo json_encode($json);
}
