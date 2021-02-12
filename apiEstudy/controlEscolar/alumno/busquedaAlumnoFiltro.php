<?php
include '../../jwt.php';
include '../../headers.php';

try {
  
  db('controlEscolar');

  if($_SERVER['REQUEST_METHOD'] == "GET"){
    foreach($_GET as $clave => $valor){
      ${$clave} = escape_cara($valor);
    }
    
    $usuario = Auth::GetData(
        $jwt
    );
      
    if(!isset($campus_id)){
        $script_campus = '';
    }else{
        $script_campus = 'and campus_id = '.$campus_id.' ';
    }
    
    if(!isset($plan_estudio_id)){
        $script_plan = '';
    }else{
        $script_plan = 'and tpe.plan_estudio_id = '.$plan_estudio_id.' ';
    }
    
    if(!isset($orden_jerarquico_id)){        
        $script_grado = '';
    }else{
        $script_grado = 'and ipo.orden_jerarquico_id = '.$orden_jerarquico_id.'';
    }

    if(!isset($situacion_alumno_id)){
        $script_situacion_alumno = '';
    }else{
        $script_situacion_alumno = ' and ta.situacion_alumno_id = '.$situacion_alumno_id.'';
    }

    $query = query('select ta.clave_alumno, p.nombre, p.primer_apellido, p.segundo_apellido, curp, rfc, fecha_nacimiento,
    email, sexo_id, otros_datos_id, p.fecha_creacion, p.estatus, ipo.orden_jerarquico_id as orden_jerarquico, coj.orden_jerarquico_descripcion,
    tc.carrera_id, tc.carrera,csa.situacion_alumno_id,csa.situacion_alumno_descripcion
    from inter_alumno_plan iap 
    join tr_alumno ta on ta.alumno_id = iap.alumno_id
    join cat_situacion_alumno csa on csa.situacion_alumno_id = ta.situacion_alumno_id
    join '.$GLOBALS['db_datosGenerales'].'.personas p on p.persona_id = ta.alumno_id
    join '.$GLOBALS['db_datosGenerales'].'.inter_plan_orden ipo on ipo.plan_orden_id = iap.plan_orden_id
    join '.$GLOBALS['db_datosGenerales'].'.cat_orden_jerarquico coj on coj.orden_jerarquico_id = ipo.orden_jerarquico_id
    join '.$GLOBALS['db_datosGenerales'].'.tr_plan_estudios tpe on tpe.plan_estudio_id = ipo.plan_estudio_id
    join '.$GLOBALS['db_datosGenerales'].'.tr_carrera tc on tc.carrera_id = tpe.carrera_id
    where iap.estatus =1 and ta.estatus =1 and p.estatus =1 and coj.estatus=1 and tpe.estatus=1 
    and tc.estatus =1 and ipo.estatus =1 '.$script_campus.' '.$script_plan.' '.$script_grado.' '.$script_situacion_alumno.' limit '.$min.','.$max.'');

        $json = array();
        while($arreglo = arreglo($query)){
            array_push($json, $arreglo);
        }

    if($json){
      $json = array("status" => 1, "msg" => "Se encontraron alumnos","usuario" => $json);
     }else{
      $json = array("status" => 0, "msg" => "No se encontraron alumnos");
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
