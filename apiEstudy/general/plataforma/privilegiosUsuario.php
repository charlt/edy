<?php
include '../../jwt.php';
include '../../headers.php';

try {
  if ($_SERVER['REQUEST_METHOD'] == "GET") {
    foreach ($_GET as $clave => $valor) {
      ${$clave} = escape_cara($valor);
    }



    $usuario = Auth::GetData(
      $jwt
    );

    $query_area = query('SELECT area_id 
    from  '.$GLOBALS['db_controlEscolar'].'.tr_administrador ta
    join inter_persona_usuario_rol uri on uri.usuario_id = ta.administrador_id
    where  uri.estatus=1 and uri.usuario_id = ' . $usuario->id_usuario . ' and
    uri.rol_id=' . $usuario->id_rol . ' ');

    $arreglo_area = arreglo($query_area);

    //SERVICIO DE CONSULTA DE SESIÓN
    $query = query('SELECT distinct  ipa.area_id ,cp.privilegio_id,privilegio_clave,privilegio,icono,url
        FROM cat_privilegios cp
        join inter_rol_privilegios irp on cp.privilegio_id = irp.privilegio_id
        join '.$GLOBALS['db_controlEscolar'].'.inter_privilegio_area ipa on ipa.privilegio_id = irp.privilegio_id  	
        where ipa.estatus= 1  and cp.estatus=1 and privilegio_padre_id is null and area_id = '.$arreglo_area['area_id']);


    $tmp_json = array();
    while ($arreglo = arreglo($query)) {

      $query1 = query('SELECT  cp.privilegio_id,privilegio_clave,privilegio,icono,url
          FROM cat_privilegios cp
          join '.$GLOBALS['db_controlEscolar'].'.inter_privilegio_area ipa on ipa.privilegio_id = cp.privilegio_id  	
          WHERE  cp.estatus = 1 and privilegio_padre_id = ' . $arreglo['privilegio_id'].' and area_id = '.$arreglo_area['area_id']);

      $tmp_json1 = array();

      while ($arreglo1 = arreglo($query1)) {
        array_push($tmp_json1, $arreglo1);
      }
      $arreglo['sub_privilegios'] = $tmp_json1;

      array_push($tmp_json, $arreglo);
    }

    //ingreso todas las escuelas que tiene este profesor

    if (num($query)) {
      $json = array("status" => 1, "msg" => "Se encontraron privilegios", "privilegios" => $tmp_json,"query"=>'SELECT distinct  ipa.area_id ,cp.privilegio_id,privilegio_clave,privilegio,icono,url
      FROM cat_privilegios cp
      join inter_rol_privilegios irp on cp.privilegio_id = irp.privilegio_id
      join '.$GLOBALS['db_controlEscolar'].'.inter_privilegio_area ipa on ipa.privilegio_id = irp.privilegio_id  	
      where ipa.estatus= 1  and cp.estatus=1 and privilegio_padre_id is null and area_id = '.$arreglo_area['area_id']);
    } else {
      $json = array("status" => 0, "msg" => "No se encontraron privilegios");
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
