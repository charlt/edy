<?php
include '../../jwt.php';
include '../../headers.php';

try {

  db ('controlEscolar');

  if($_SERVER['REQUEST_METHOD'] == "GET"){
    foreach($_GET as $clave => $valor){
      ${$clave} = escape_cara($valor);
    }
    
     if(isset($id_asignatura_grupo))
       $cond_asignatura_grupo = ' and asignatura_grupo_id = '.$id_asignatura_grupo;
     else
     $cond_asignatura_grupo= '';

    
    

      $usuario = Auth::GetData(
            $jwt  
        );

        $query_asignatura_grupo_docente = query('select ca.asignatura,iag.asignatura_grupo_id 
        from inter_docente_asignatura_grupo idag
        join inter_asignatura_grupo iag ON idag.asignatura_grupo_id = iag.asignatura_grupo_id
        join '.$GLOBALS['db_datosGenerales'].'.inter_orden_asignatura ioa ON ioa.orden_asignatura_id = iag.orden_asignatura_id
        join '.$GLOBALS['db_datosGenerales'].'.cat_asignaturas ca ON ca.asignatura_id = ioa.asignatura_id
        where docente_id = ' . $usuario->id);
    
    $array_asignatura_grupos = array();
    $array_nombre_asignatura = array();

    while($arreglo_materia_alumno = arreglo($query_asignatura_grupo_docente)){
      array_push($array_nombre_asignatura,$arreglo_materia_alumno['asignatura']);
      array_push($array_asignatura_grupos,$arreglo_materia_alumno['asignatura_grupo_id']);

    }
    
    if(sizeof($array_asignatura_grupos) > 0){
      $secuencia_materias= implode(',',$array_asignatura_grupos);
      $secuencia_asignatura_grupo= implode(',',$array_asignatura_grupos);
    }else{
      $secuencia_materias=0;
      $secuencia_asignatura_grupo=0;
    }


    if($nuevos == 1){
      $script_fecha = 'and now() between ta.fecha_inicio and ta.fecha_fin';
      $script_fecha_g = 'and now() between tag.fecha_inicio and tag.fecha_fin';
    }else{
      $script_fecha = 'and !(now() between ta.fecha_inicio and ta.fecha_fin)';
      $script_fecha_g = 'and !(now() between tag.fecha_inicio and tag.fecha_fin)';
    }




    //AVISOS DEL ADMINISTRADOR
    $query_aviso_admin = query('select 2 as tipo,"Aviso de la escuela" as tipo_descripcion,titulo,iap.persona_id, mensaje,adjunto,UNIX_TIMESTAMP(ta.fecha_inicio) as fecha_inicio, UNIX_TIMESTAMP(ta.fecha_fin) as fecha_fin,tsa.aviso_id,ta.importancia_aviso_id,
    asignatura_grupo_id,grupo_id,orden_asignatura_id,plan_orden_id,plan_estudios_id,carrera_id
    from tr_switch_aviso tsa
    join tr_avisos ta on ta.aviso_id = tsa.aviso_id 
    left join inter_aviso_persona iap on iap.aviso_id = tsa.aviso_id and iap.persona_id = '.$usuario->id.'
    where ta.estatus=1 and rol_id = '.$usuario->id_rol.' '.$script_fecha.'
    order by iap.persona_id');

    $json_notificacion_mensajes = array();



     while($arreglo_aviso_admin = arreglo($query_aviso_admin)){

      if(!empty($arreglo_aviso_admin['asignatura_grupo_id'] ) || !empty($arreglo_aviso_admin['grupo_id'] ) || !empty($arreglo_aviso_admin['orden_asignatura_id'] )){
        $ver_aviso = 0;

        $query_grupo = query('select iag.grupo_id,iag.orden_asignatura_id,asignatura_grupo_id
        from inter_asignatura_grupo iag
        join tr_grupo tg on tg.grupo_id = iag.grupo_id
        join ' . $GLOBALS['db_datosGenerales'] . '.inter_orden_asignatura ioa on ioa.orden_asignatura_id = iag.orden_asignatura_id
        where iag.asignatura_grupo_id in ('.$secuencia_asignatura_grupo.') and iag.estatus = 1 and tg.estatus = 1 and ioa.estatus= 1');

        if(num($query_grupo)){
          $arreglo_grupo = arreglo($query_grupo);

          if(
            $arreglo_grupo['asignatura_grupo_id'] == $arreglo_aviso_admin['asignatura_grupo_id']  || 
            $arreglo_grupo['grupo_id'] == $arreglo_aviso_admin['grupo_id']  || 
            $arreglo_grupo['orden_asignatura_id'] == $arreglo_aviso_admin['orden_asignatura_id']  
           ){
            $ver_aviso = 1;
           }
    
        }

      }else if(!empty($arreglo_aviso_admin['plan_orden_id'] ) || !empty($arreglo_aviso_admin['plan_estudios_id'] ) ||  !empty($arreglo_aviso_admin['carrera_id'] )){

        $ver_aviso = 0;

        $query_plan = query('select ioa.orden_asignatura_id, tpe.plan_estudio_id,tpe.carrera_id 
        from '.$GLOBALS['db_controlEscolar'].'.inter_docente_asignatura_grupo idag 
        join '.$GLOBALS['db_controlEscolar'].'.inter_asignatura_grupo iag on iag.asignatura_grupo_id = idag.asignatura_grupo_id
        join '.$GLOBALS['db_datosGenerales'].'.inter_orden_asignatura ioa on ioa.orden_asignatura_id = iag.orden_asignatura_id
        join '.$GLOBALS['db_datosGenerales'].'.inter_plan_orden ipo on ipo.plan_orden_id = ioa.plan_orden_id
        join '.$GLOBALS['db_datosGenerales'].'.tr_plan_estudios tpe on tpe.plan_estudio_id = ipo.plan_estudio_id
       where docente_id = '.$usuario->id.' and idag.estatus= 1 and iag.estatus=1 and ioa.estatus= 1 and ipo.estatus= 1 and tpe.estatus=1 ');

        if(num($query_plan)){
          $arreglo_plan = arreglo($query_plan);

          if(
            $arreglo_plan['plan_estudio_id'] == $arreglo_aviso_admin['plan_estudios_id']  || 
            $arreglo_plan['plan_orden_id'] == $arreglo_aviso_admin['plan_orden_id']  || 
            $arreglo_plan['carrera_id'] == $arreglo_aviso_admin['carrera_id']  
           ){
             
            $ver_aviso = 1;
           }
    
        }

      }else{
        $ver_aviso = 1;

      }

      if($ver_aviso == 1){

        if($arreglo_aviso_admin['persona_id'] == ''){
          $arreglo_aviso_admin['visto'] = 0;
        }else{
          $arreglo_aviso_admin['visto'] = 1;
        }

        array_push($json_notificacion_mensajes, $arreglo_aviso_admin);
      }
      
    }

   
    function cmp($a, $b) {
      return $b['aviso_id']- $a['aviso_id'] ;
   }
   
   usort($json_notificacion_mensajes,"cmp");

   
       
       //ingreso todas las escuelas que tiene este profesor
       
       if(sizeof($json_notificacion_mensajes)){
        $json = array("status" => 1, "msg" => "Se encontraron avisos","avisos" => $json_notificacion_mensajes);
      }else{
    		$json = array("status" => 0, "msg" => "No se encontraron avisos");
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
