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

        $query = query('select ipur.persona_id, ta.aspirante_id, ta.clave_aspirante, nombre, primer_apellido, segundo_apellido,email, ta.carrera_id, tc.carrera, ta.validado_administrador,
        ta.situacion_aspirante_id, situacion_aspirante_descripcion, ta.fecha_creacion, t1.ultimo_accesso as sesion, t1.ultima_salida
        from tr_aspirante ta 
        join cat_situacion_aspirante csa on csa.situacion_aspirante_id = ta.situacion_aspirante_id
        join '.$GLOBALS['db_datosGenerales'].'.tr_carrera tc on tc.carrera_id = ta.carrera_id
        join inter_asesor_persona iap on iap.persona_id = ta.aspirante_id
        join tr_asesor tas on tas.asesor_id = iap.asesor_id
        join '.$GLOBALS['db_datosGenerales'].'.inter_persona_usuario_rol ipur on ipur.usuario_id = iap.persona_id
        join '.$GLOBALS['db_datosGenerales'].'.personas p on p.persona_id = ipur.persona_id
        left join (select usuario_id, max(fecha_inicio) as ultimo_accesso, max(fecha_fin) ultima_salida from
        '.$GLOBALS['db_datosGenerales'].'.tr_bitacora_sesion group by usuario_id) t1 on t1.usuario_id = ipur.persona_id
        where  ta.estatus= 1 and iap.estatus=1
        and ipur.estatus= 1 and p.estatus=1 and ipur.rol_id = 4 and iap.asesor_id = '.$usuario->id);


        $json = array();
       while ($arreglo = arreglo($query)){


        $query_documento = query('SELECT cd.documento_id from ' . $GLOBALS['db_seguimiento'] . '.cat_documento cd
        join ' . $GLOBALS['db_seguimiento'] . '.inter_documento_carrera idc on cd.documento_id = idc.documento_id
        join ' . $GLOBALS['db_seguimiento'] . '.tr_aspirante ta on ta.carrera_id = idc.carrera_id
        where cd.estatus = 1 and ta.estatus = 1 and ta.aspirante_id =' . $arreglo['persona_id']);
        if (num($query_documento) == 0) {
            $num_documento = 0;
        } else {
            $num_documento = 100 / num($query_documento);
        }

       $query_expediente = query('SELECT expediente_id from ' . $GLOBALS["db_seguimiento"] . '.inter_expediente
       where estatus=1 and aspirante_id=' . $arreglo['persona_id']);

       $num_expediente = num($query_expediente);
       $porcentaje_doc = $num_documento * $num_expediente;


       $query_formulario = query('SELECT count(tf.formulario_id) as total from ' . $GLOBALS["db_seguimiento"] . '.tr_formulario tf 
       join ' . $GLOBALS["db_seguimiento"] . '.inter_formulario_carrera ifc on ifc.formulario_id = tf.formulario_id
       left join ' . $GLOBALS["db_seguimiento"] . '.tr_aspirante ta on ta.carrera_id = ifc.carrera_id
       where ta.aspirante_id = ' . $arreglo['persona_id']);

       $arreglo_formulario = arreglo($query_formulario);
       if ($arreglo_formulario['total'] == 0) {
           $num_formulario = 0;
       } else {
           $num_formulario = 100 / $arreglo_formulario['total'];
       }



       $query_formulario_aspirante = query('SELECT formulario_id from ' . $GLOBALS["db_seguimiento"] . '.inter_formulario_aspirante 
       where aspirante_id = ' . $arreglo['persona_id']);
       $num_form = num($query_formulario_aspirante);
       $porcentaje_form = $num_formulario * $num_form;

       $arreglo['porcentaje_formulario'] = round($porcentaje_form);
       $arreglo['porcentaje_documento'] = round($porcentaje_doc);



          array_push($json,$arreglo);
       }
       
       //ingreso todas las escuelas que tiene este profesor
       
       if(num($query)){
    		$json = array("status" => 1, "msg" => "Se encontraron Aspirantes","aspirantes" => $json);
    	 }else{
    		$json = array("status" => 0, "msg" => "No se encontraron Aspirantes");
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
