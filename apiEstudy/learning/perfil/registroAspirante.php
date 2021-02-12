<?php
include '../../jwt.php';
include '../../headers.php';

try {

  db('seguimiento');

  if ($_SERVER['REQUEST_METHOD'] == "POST") {
    foreach ($_POST as $clave => $valor) {
      ${$clave} = escape_cara($valor);
    }

    $usuario = Auth::GetData(
      $jwt
    );

    $consulta_aspirante = arreglo(query('SELECT aspirante_id from ' . $GLOBALS["db_seguimiento"] . '.tr_aspirante where aspirante_id =' . $id_persona));
    if (!empty($consulta_aspirante['aspirante_id'])) {
      $id_aspirante = $consulta_aspirante['aspirante_id'];
      $msg = 'Se encontró aspirante';
    } else {

      $carrera = arreglo(query('select carrera_id from '.$GLOBALS['db_controlEscolar'].'.inter_alumno_plan iap
          join '.$GLOBALS['db_datosGenerales'].'.inter_plan_orden ipo on ipo.plan_orden_id = iap.plan_orden_id
          join '.$GLOBALS['db_datosGenerales'].'.tr_plan_estudios tpe on tpe.plan_estudio_id = ipo.plan_estudio_id
          where alumno_id =' . $id_persona));

      if(empty($carrera['carrera_id'])){
        $carrera['carrera_id'] = 0; 
      }

      $inserta_aspirante = inserta(
        'tr_aspirante',
        'aspirante_id,clave_aspirante, carrera_id,paso,estatus',
        '' . $id_persona . ',"' . $clave_aspirante . '",' . $carrera['carrera_id'] . ',3, 1'
      );
      $id_aspirante = $id_persona;
      $msg = 'Se insertó aspirante correctamente';
    }

    if ($id_aspirante) {
      $json = array("status" => 1, "msg" => $msg, "idAspirante" => $id_aspirante);
    } else {
      $json = array("status" => 0, "msg" => "No se insertó correctamente");
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
