<?php
include '../../jwt.php';
include '../../headers.php';


try {

    db('learning');


  if(isset($_POST['id_videoconferencia'])) {

    $id_videoconferencia = $_POST['id_videoconferencia'];

    $arreglo_usuario_zoom = arreglo(query(' select apikey,apisecret,usuario,tv.nombre,tv.fecha_inicio,  TIMESTAMPDIFF(MINUTE, tv.fecha_inicio, tv.fecha_fin)  as minutos 
    from tr_usuario_zoom tuz
    join inter_videoconferencia_zoom ivz on ivz.usuario_zoom_id = tuz.usuario_zoom_id
    join tr_videoconferencia tv on tv.videoconferencia_id = ivz.videoconferencia_id 
    where tv.videoconferencia_id = '.$id_videoconferencia));

    $fecha_inicio = str_replace($arreglo_usuario_zoom['fecha_inicio'], "T", " ");


    $jwt = Auth::SignInZoom($arreglo_usuario_zoom['apikey'],$arreglo_usuario_zoom['apisecret'],1);

    $curl = curl_init();

    curl_setopt_array($curl, array(
    CURLOPT_URL => "https://api.zoom.us/v2/users/".$arreglo_usuario_zoom['usuario']."/meetings",
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_ENCODING => "",
    CURLOPT_MAXREDIRS => 10,
    CURLOPT_TIMEOUT => 30,
    CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
    CURLOPT_SSL_VERIFYPEER => false,
    CURLOPT_CUSTOMREQUEST => "POST",
    CURLOPT_POSTFIELDS => '{
        "topic": "'.escape_cara($arreglo_usuario_zoom['nombre']).'",
        "type": "1",
        "start_time": "'.$fecha_inicio.'",
        "duration": "'.$arreglo_usuario_zoom['minutos'].'",
        "agenda": "string"
      }',
    CURLOPT_HTTPHEADER => array(
        "authorization: Bearer ".$jwt,
        "content-type: application/json"
    ),
    ));

        $response = curl_exec($curl);
        $err = curl_error($curl);

        curl_close($curl);

        if ($err) {
        echo "cURL Error #:" . $err;
        } else {
        echo $response;
        }

    
    

  }else{
    $json = array("status" => 0, "jwt" => "parametros incorrectos");
  }


    /* Output header */
//      header("Access-Control-Allow-Origin: *");
  //  	header("Content-Type: application/json; charset=UTF-8");

} catch (Exception $e) {
    $json = array("status" => 0, "jwt" => $e->getMessage());
    /* Output header */
    //      header("Access-Control-Allow-Origin: *");
  //  	header("Content-Type: application/json; charset=UTF-8");
    echo json_encode($json);
}
