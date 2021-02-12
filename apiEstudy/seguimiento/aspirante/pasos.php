<?php
include '../../jwt.php';
include '../../headers.php';


db('seguimiento');


try {
  if ($_SERVER['REQUEST_METHOD'] == "GET") {
    foreach ($_GET as $clave => $valor) {
      ${$clave} = escape_cara($valor);
    }

    $usuario = Auth::GetData(
      $jwt
    );


    $query_aspirante = query('select aspirante_id, paso,info_personal_completa, cleaver_completo,aceptacion_terminos from tr_aspirante where aspirante_id =' . $id_aspirante);

    $arreglo_aspirante = arreglo($query_aspirante);

    $paso = $arreglo_aspirante['paso'];

    /*-------------------------------- CONSULTA DE INFORMACIÓN EN FORMULARIOS -----------------------------------------------------*/


    $query_form = query('SELECT distinct tf.formulario_id, tf.obligatorio, ifa.aspirante_id
        from tr_formulario tf 
        join inter_formulario_carrera ifc on ifc.formulario_id = tf.formulario_id
        join tr_aspirante ta on ta.carrera_id = ifc.carrera_id        
        left join (select aspirante_id,formulario_id from inter_formulario_aspirante 
        where aspirante_id = ' . $usuario->id . ')as ifa  on ifa.formulario_id = ifc.formulario_id
        where ta.aspirante_id = ' . $usuario->id . ' and tf.estatus=1 and ifc.estatus=1 and ta.estatus=1');

    $json = array();
    $contestados = 0;
    $obligatorios = 1; //agregamos cleaver e  información personal
    $contestados_obligatorios = 0;

    //Verificamos si cleaver y personal ya han sido contestados
    if ($arreglo_aspirante['info_personal_completa'] == '1') {
      $contestados_obligatorios++;
      $contestados++;
    }

    /*if ($arreglo_aspirante['cleaver_completo'] == '1') {
      $contestados_obligatorios++;
      $contestados++;
    }*/

    $totales = num($query_form) + 1; //agregamos cleaver e  información personal
    $finalizado = 0;

    while ($arreglo_form = arreglo($query_form)) {

      array_push($json, $arreglo_form);

      if ($arreglo_form['aspirante_id'] != '')
        $contestados++;
        

      if ($arreglo_form['obligatorio'] == '1') {
        $obligatorios++;
        if ($arreglo_form['aspirante_id'] != '')
          $contestados_obligatorios++;
      }
    }

    //echo $contestados_obligatorios.' '.$obligatorios;
    if ($contestados_obligatorios == $obligatorios) {
      $finalizado = 1;
    }

    $paso1 = array('completados' => $contestados, 'totales' => $totales, 'finalizado' => $finalizado);

    /*-------------------------------- CONSULTA DE INFORMACIÓN EN TERMINOS -----------------------------------------------------*/

    if ($arreglo_aspirante['aceptacion_terminos'] == '1')
      $finalizado = 1;
    else
      $finalizado = 0;


    $paso2 = array('completados' => $arreglo_aspirante['aceptacion_terminos'], 'totales' => 1, 'finalizado' => $finalizado);






    /*-------------------------------- CONSULTA DE INFORMACIÓN EN DOCUMENTOS -----------------------------------------------------*/

    $query_doc = query('SELECT ie.documento_id, ct.obligatorio,ie.aspirante_id
                from cat_documento ct
                join inter_documento_carrera idc on idc.documento_id = ct.documento_id
                join tr_aspirante ta on ta.carrera_id = idc.carrera_id
                left join (select documento_id,aspirante_id from inter_expediente where aspirante_id =' . $usuario->id . ' and estado_documento_id != 6 and estatus=1) as ie on ie.aspirante_id = ta.aspirante_id and ie.documento_id = ct.documento_id 
                where ct.estatus =1 and ta.aspirante_id=' . $usuario->id);

    $json = array();
    $contestados = 0;
    $obligatorios = 0;
    $contestados_obligatorios = 0;
    $totales = num($query_doc);
    $finalizado = 0;

    while ($arreglo = arreglo($query_doc)) {
      array_push($json, $arreglo);

      if ($arreglo['aspirante_id'] != '')
        $contestados++;
      if ($arreglo['obligatorio'] == '1') {
        $obligatorios++;
        if ($arreglo['aspirante_id'] != '')
          $contestados_obligatorios++;
      }
    }

    if ($contestados_obligatorios == $obligatorios) {
      $finalizado = 1;
    }

    $paso3 = array('completados' => $contestados, 'totales' => $totales, 'finalizado' => $finalizado);

    /*-------------------------------- CONSULTA DE INFORMACIÓN EN PAGOS -----------------------------------------------------*/

    if ($arreglo_aspirante['paso'] == '4')
      $finalizado = 1;
    else
      $finalizado = 0;


    $paso4 = array('completados' => $finalizado, 'totales' => 1, 'finalizado' => $finalizado);


    if (num($query_aspirante)) {
      $json = array("status" => 1, "msg" => "Este es el avance del aspirante en el formulario", "pasoActual" => $paso, "paso1" => $paso1, "paso2" => $paso2, "paso3" => $paso3, "paso4" => $paso4);
    } else {
      $json = array("status" => 0, "msg" => "No se encontraron el aspirante");
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
