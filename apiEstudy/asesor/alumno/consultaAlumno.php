<?php
include '../../jwt.php';
include '../../headers.php';

try {


    db('seguimiento');

    if($_SERVER['REQUEST_METHOD'] == "GET"){
    foreach($_GET as $clave => $valor){
      ${$clave} = escape_cara($valor);
    }
  
      $usuario = Auth::GetData(
            $jwt  
        );

        $query = query('select ta.alumno_id as persona_id, ta.clave_alumno as matricula, nombre, primer_apellido, segundo_apellido,email,p.celular ,curp, rfc,ta.situacion_alumno_id,
        tc.carrera, coj.orden_jerarquico_descripcion,coj.orden_jerarquico
        from '.$GLOBALS['db_controlEscolar'].'.tr_alumno ta 
        join '.$GLOBALS['db_controlEscolar'].'.inter_alumno_plan inap on inap.alumno_id = ta.alumno_id
        join '.$GLOBALS['db_datosGenerales'].'.inter_plan_orden ipo on ipo.plan_orden_id = inap.plan_orden_id
        join '.$GLOBALS['db_datosGenerales'].'.tr_plan_estudios tpe on tpe.plan_estudio_id = ipo.plan_estudio_id
        join '.$GLOBALS['db_datosGenerales'].'.tr_carrera tc on tpe.carrera_id = tc.carrera_id
        join '.$GLOBALS['db_datosGenerales'].'.cat_orden_jerarquico coj on coj.orden_jerarquico_id = ipo.orden_jerarquico_id
        join inter_asesor_persona iap on iap.persona_id = ta.alumno_id
        join tr_asesor tas on tas.asesor_id = iap.asesor_id
        join '.$GLOBALS['db_datosGenerales'].'.inter_persona_usuario_rol ipur on ipur.usuario_id = iap.persona_id
        join '.$GLOBALS['db_datosGenerales'].'.personas p on p.persona_id = ipur.persona_id
        where ta.situacion_alumno_id = 1  and ta.estatus= 1 and iap.estatus=1 and tas.estatus=1 
        and ipur.estatus= 1 and p.estatus=1 and ipur.rol_id = 2 and iap.asesor_id = '.$usuario->id);


        $json = array();
       while ($arreglo = arreglo($query)){
          array_push($json,$arreglo);
       }
       
       //ingreso todas las escuelas que tiene este profesor
       
       if(num($query)){
    		$json = array("status" => 1, "msg" => "Se encontraron Alumnos","Alumnos" => $json);
    	 }else{
    		$json = array("status" => 0, "msg" => "No se encontraron Alumnos");
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
