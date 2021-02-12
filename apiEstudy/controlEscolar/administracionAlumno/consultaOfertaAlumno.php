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

      
        $query = query('
        select iap.plan_orden_id, iap.alumno_id,p.nombre,p.primer_apellido,p.segundo_apellido,tc.carrera,coj.orden_jerarquico_descripcion, cc.campus 
        from inter_alumno_plan  iap
        left join '.$GLOBALS['db_datosGenerales'].'.cat_campus cc on cc.campus_id = iap.campus_id
        join '.$GLOBALS['db_datosGenerales'].'.inter_plan_orden ipo on iap.plan_orden_id = ipo.plan_orden_id
        join '.$GLOBALS['db_datosGenerales'].'.cat_orden_jerarquico coj on coj.orden_jerarquico_id = ipo.orden_jerarquico_id
        join '.$GLOBALS['db_datosGenerales'].'.tr_plan_estudios tpe on tpe.plan_estudio_id = ipo.plan_estudio_id
        join '.$GLOBALS['db_datosGenerales'].'.tr_carrera tc on tc.carrera_id = tpe.carrera_id
        join tr_alumno ta on ta.alumno_id = iap.alumno_id
        join '.$GLOBALS['db_datosGenerales'].'.personas p on p.persona_id = ta.alumno_id
        where ta.alumno_id = '.$id_alumno.' and iap.estatus=1 and ipo.estatus=1 and coj.estatus= 1 and tc.estatus= 1 and ta.estatus=1');

        $json = array();
        while($arreglo = arreglo($query)){
            array_push($json, $arreglo);
        }

    
       if(num($query)){
    		$json = array("status" => 1, "msg" => "Se encontró Oferta Educativa", "ofertas"=>$json);
    	 }else{
    		$json = array("status" => 0, "msg" => "No se encontró Oferta Educativa");
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
