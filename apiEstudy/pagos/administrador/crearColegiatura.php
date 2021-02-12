<?php
include '../../jwt.php';
include '../../headers.php';
 

try {

  db('pagos');

  if($_SERVER['REQUEST_METHOD'] == "POST"){
    foreach($_POST as $clave => $valor){
      ${$clave} = escape_cara($valor);
    }
    
      $usuario = Auth::GetData(
            $jwt  
        );       


        $consulta_pago = arreglo(query('select monto,pago_carrera_id, pago_id from inter_pago_carrera 
        where carrera_id = '.$id_carrera.' and pago_id='.$pago_id.' and estatus=1')); 

            $alumnos_carrera = query('select ta.alumno_id from '.$GLOBALS['db_controlEscolar'].'.inter_alumno_plan iap
            join '.$GLOBALS['db_datosGenerales'].'.inter_plan_orden ipo on ipo.plan_orden_id = iap.plan_orden_id
            join '.$GLOBALS['db_datosGenerales'].'.tr_plan_estudios tpe on tpe.plan_estudio_id = ipo.plan_estudio_id
            join '.$GLOBALS['db_controlEscolar'].'.tr_alumno ta on ta.alumno_id = iap.alumno_id
            where tpe.carrera_id = '.$id_carrera.' and ta.suscripcion_id = 1');

            $json_alumnos=array();
            while($arreglo_alumnos = arreglo($alumnos_carrera)){
                array_push($json_alumnos,$arreglo_alumnos);
                update(''.$GLOBALS['db_controlEscolar'].'.tr_alumno','colegiatura_activa =0','alumno_id = '.$arreglo_alumnos['alumno_id']);
            }

            $solicitud_pago = "INSERT INTO tr_solicitud_pago(persona_id,pago_carrera_id, monto, fecha_solicitud,fecha_limite,estatus_solicitud_pago_id,estatus) VALUES";
    
            foreach ($json_alumnos as $alumno_tmp ){
                 $solicitud_pago .='('.$alumno_tmp['alumno_id'].','.$consulta_pago['pago_carrera_id'].','.$consulta_pago['monto'].',"'.$fecha_solicitud.'","'.$fecha_limite.'",2,1),';
            }
            $solicitud_pago = trim($solicitud_pago, ',');
            $inserta=query($solicitud_pago);

      if(num($alumnos_carrera)){
        $json = array("status" => 1, "msg" => "Se editó colegiatura correctamente");
      }else{
        $json = array("status" => 0, "msg" => "No se editó colegiatura correctamente");
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


