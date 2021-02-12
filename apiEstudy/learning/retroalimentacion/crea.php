<?php
include '../../jwt.php';
include '../../headers.php';
include '../../extras/archivo/class/archivo.class.php';

try {

  db('learning');

  $archivo = new Archivo();

  if ($_SERVER['REQUEST_METHOD'] == "POST") {
    foreach ($_POST as $clave => $valor) {
      ${$clave} = escape_cara($valor);
    }

    $usuario = Auth::GetData(
      $jwt
    );

    if ($origen == 2) {
      $origen_consulta = 3;
    } elseif ($origen == 3) {
      $origen_consulta = 2;
    }

    // $query_mensajes = query('SELECT * FROM tr_retroalimentacion tr
    // join tr_materia_fecha_actividad tmfa on tmfa.materia_fecha_actividad_id = tr.materia_fecha_actividad_id
    // where visto = 0 and origen = ' . $origen_consulta . ' and tmfa.actividad_id = ' . $id_actividad . ' and tmfa.materia_id = ' . $id_materia);

    // while ($arreglo_mensajes = arreglo($query_mensajes)) {
    //   // array_push($json_mensajes, $arreglo_mensajes);
    //   update('tr_retroalimentacion', 'visto=1', 'retroalimentacion_id=' . $arreglo_mensajes['retroalimentacion_id']);
    // }

    $cambio = query('UPDATE tr_retroalimentacion tr
    join tr_materia_fecha_actividad tmfa on tmfa.materia_fecha_actividad_id = tr.materia_fecha_actividad_id
    set visto = 1
    where visto = 0 and origen = ' . $origen_consulta . ' and tmfa.actividad_id = ' . $id_actividad . ' and tmfa.materia_id = ' . $id_materia);

    //grupo es una cadena no un número
    $inserta = inserta_last_id(
      'tr_retroalimentacion',
      'materia_fecha_actividad_id, persona_id, texto, origen, fecha_creacion, estatus',
      '' . $materia_fecha_actividad_id . ', ' . $persona_id . ',"' . $texto . '",' . $origen . ',now(), 1'
    );

    if ($inserta && isset($_FILES['archivo'])) {

      $inserta_imagen = $archivo::guardar_archivo(
        'retroalimentacion', // la ruta del archivo
        $inserta, //el id de la ruta
        $_FILES["archivo"], //la variable tipo file donde viene el archivo
        'img_retro', //el nombre que va a llevar el archivo a guardar
        null, //tipo de archivo
        null
      );

      if ($inserta_imagen) {
        $inserta_url = update('tr_retroalimentacion', 'url_imagen="' . $inserta_imagen['url'] . '"', 'retroalimentacion_id=' . $inserta);
      }
    }

    if ($inserta) {
      $json = array("status" => 1, "msg" => "Enviado");
    } else {
      $json = array("status" => 0, "msg" => "No se envio");
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
