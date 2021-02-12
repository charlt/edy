<?php
include '../../jwt.php';
include '../../headers.php';

try {
  
  db('learning');

  if($_SERVER['REQUEST_METHOD'] == "GET"){
    foreach($_GET as $clave => $valor){
      ${$clave} = escape_cara($valor);
    }

      $usuario = Auth::GetData(
            $jwt  
        );


    $query_materia = query('SELECT distinct p.nombre as nombre_docente, p.primer_apellido, p.segundo_apellido, coj.orden_jerarquico_descripcion,
    ca.asignatura, tpe.plan_estudio, tc.carrera
    from tr_materia tm
    join '.$GLOBALS["db_controlEscolar"].'.inter_docente_asignatura_grupo idag on idag.asignatura_grupo_id = tm.asignatura_grupo_id
    join '.$GLOBALS["db_datosGenerales"].'.personas p on p.persona_id = idag.docente_id
    join '.$GLOBALS["db_controlEscolar"].'.inter_asignatura_grupo iag on iag.asignatura_grupo_id = tm.asignatura_grupo_id
    join '.$GLOBALS["db_datosGenerales"].'.inter_orden_asignatura ioa on ioa.orden_asignatura_id = iag.orden_asignatura_id
    join '.$GLOBALS["db_datosGenerales"].'.inter_plan_orden ipo on ipo.plan_orden_id = ioa.plan_orden_id
    join '.$GLOBALS["db_datosGenerales"].'.tr_plan_estudios tpe on tpe.plan_estudio_id = ipo.plan_estudio_id
    join '.$GLOBALS["db_datosGenerales"].'.tr_carrera tc on tc.carrera_id = tpe.carrera_id
    join '.$GLOBALS["db_datosGenerales"].'.cat_orden_jerarquico coj on coj.orden_jerarquico_id = ipo.orden_jerarquico_id
    join '.$GLOBALS["db_datosGenerales"].'.cat_asignaturas ca on ca.asignatura_id = ioa.asignatura_id
    where idag.estatus =1 and p.estatus=1 and iag.estatus =1 and ioa.estatus=1 and tm.estatus=1 and tm.materia_id = '.$id_materia );
    $datos_materia= array();    
    while($arreglo_materia = arreglo($query_materia)){
        array_push($datos_materia, $arreglo_materia);
    }



    $query_alumno_clases = query('SELECT distinct tca.clase_id, tca.nombre_clase, tca.desc_clase, tca.fecha_clase, 
    tca.inasistencia_clase_id
    from tr_materia tm
    join (select tc.clase_id, tc.asignatura_grupo_id, tc.nombre_clase, tc.desc_clase,
    tc.fecha_clase, tic.inasistencia_clase_id,tic.persona_id
    from '.$GLOBALS["db_controlEscolar"].'.tr_clase tc 
    left join '.$GLOBALS["db_controlEscolar"].'.tr_inasistencia_clase tic on tic.clase_id = tc.clase_id 
    where tc.estatus =1) tca on tca.asignatura_grupo_id = tm.asignatura_grupo_id 
    where tm.alumno_id != 0 and tm.estatus=1 and tm.materia_id = '.$id_materia);  

    $num_clases = num($query_alumno_clases);
    $clases=array();
    $asistencia =0;
    $inasistencia =0;
    while($arreglo_clases = arreglo($query_alumno_clases)){
        if($arreglo_clases['inasistencia_clase_id'] == ''){
            $asistencia++;
        }else{
            $inasistencia++;
        }


        $arreglo_clase['clase_id']=$arreglo_clases['clase_id'];
        $arreglo_clase['nombre_clase']=$arreglo_clases['nombre_clase'];
        $arreglo_clase['desc_clase']=$arreglo_clases['desc_clase'];
        $arreglo_clase['fecha_clase']=$arreglo_clases['fecha_clase'];
        array_push($clases, $arreglo_clase);
    }



    $clases['num_clases'] = $num_clases;
    $clases['asistencia_clases'] = $asistencia;
    $clases['inasistencias_clases'] = $inasistencia;


    $query_confe = query('SELECT tv.videoconferencia_id, tv.nombre, tv.fecha_inicio, tv.fecha_fin, tav.acceso_videoconferencia_id
    from tr_materia tm
    join tr_videoconferencia tv on tv.asignatura_grupo_id = tm.asignatura_grupo_id 
    left join tr_acceso_videoconferencia tav on tav.videoconferencia_id = tv.videoconferencia_id and tav.persona_id = tm.alumno_id
    where tv.estatus != 0 and tm.estatus=1 and tm.materia_id =  '.$id_materia.' and tv.fecha_fin < now() order by fecha_inicio');
    
    $num_confe = num($query_confe);
    $confe=array();
    $asistencia_confe=0;
    $inasistencia_confe =0;
    while($arreglo_confe = arreglo($query_confe)){
        if($arreglo_confe['acceso_videoconferencia_id']){
            $asistencia_confe++;
        }else{
            $inasistencia_confe++;
        }
        array_push($confe, $arreglo_confe);
    }

    $confe['num_confe']= $num_confe;
    $confe['asistencia_confe']= $asistencia_confe;
    $confe['inasistencia_confe']= $inasistencia_confe;




    if(num($query_alumno_clases)){
        $json = array("status" => 1, "msg" => "Se encontraron clases","materia" => $datos_materia ,"clases" => $clases, "conferencias"=>$confe);
     }else{
        $json = array("status" => 0, "msg" => "No se encontraron clases");
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
