<?php
include '../../jwt.php';
include '../../headers.php';

try {

  db('learning');

  if ($_SERVER['REQUEST_METHOD'] == "POST") {
    foreach ($_POST as $clave => $valor) {
      ${$clave} = escape_cara($valor);
    }

    $usuario = Auth::GetData(
      $jwt
    );

    $query_seguimiento = query('select seguimiento_actividad_id, (imp_pt + click_derecho + control_c + control_v + cambio_pagina) as total from tr_seguimiento_actividad where materia_fecha_actividad_id ='.$materia_fecha_actividad_id);

    if(num($query_seguimiento)){
      $arreglo_seguimiento = arreglo($query_seguimiento);
      if(empty($arreglo_seguimiento['total']))$arreglo_seguimiento['total'] = 0;
      $json = array("status" => 1, "msg" => "Seguimiento",'total'=>  $arreglo_seguimiento['total']);
    }else{
      $crea_alumno = inserta('tr_seguimiento_actividad', 'materia_fecha_actividad_id,estatus', '' . $materia_fecha_actividad_id . ',1');

      $json = array("status" => 1, "msg" => "Seguimiento",'total'=>  0);
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
