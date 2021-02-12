<?php
include '../../jwt.php';
include '../../headers.php';

try {

  db ('controlEscolar');

  if($_SERVER['REQUEST_METHOD'] == "GET"){
    foreach($_GET as $clave => $valor){
      ${$clave} = escape_cara($valor);
    }
    
     if(isset($id_materia))
       $cond_materia = ' and materia_id = '.$id_materia;
     else
       $cond_materia = '';

    
    

      $usuario = Auth::GetData(
            $jwt  
        );

    $query_materias_alumno = query('select materia_id,ca.asignatura,iag.asignatura_grupo_id 
    from '.$GLOBALS['db_learning'].'.tr_materia tm
    join '.$GLOBALS["db_controlEscolar"].'.inter_asignatura_grupo iag ON tm.asignatura_grupo_id = iag.asignatura_grupo_id
    join '.$GLOBALS["db_datosGenerales"].'.inter_orden_asignatura ioa ON ioa.orden_asignatura_id = iag.orden_asignatura_id
    join '.$GLOBALS["db_datosGenerales"].'.cat_asignaturas ca ON ca.asignatura_id = ioa.asignatura_id
    where alumno_id = '.$usuario->id.' '.$cond_materia);


    
    $array_materias_alumno = array();
    $array_materias = array();
    $array_asignatura_grupos = array();
    $array_nombre_asignatura = array();

    while($arreglo_materia_alumno = arreglo($query_materias_alumno)){
      array_push($array_materias_alumno,$arreglo_materia_alumno);
      array_push($array_materias,$arreglo_materia_alumno['materia_id']);
      array_push($array_nombre_asignatura,$arreglo_materia_alumno['asignatura']);
      array_push($array_asignatura_grupos,$arreglo_materia_alumno['asignatura_grupo_id']);

    }

    if(sizeof($array_materias) > 0){
      $secuencia_materias= implode(',',$array_materias);
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


  //AVISOS DEL PROFESOR
    $query_avisos_profesor = query('SELECT 1 as tipo,"Aviso del profesor" as tipo_descripcion,tag.avisos_grupo_id as aviso_id,iagp.persona_id, titulo,asignatura_grupo_id,importancia_aviso_id,mensaje,adjunto,UNIX_TIMESTAMP(tag.fecha_inicio) as fecha_inicio, UNIX_TIMESTAMP(tag.fecha_fin) as fecha_fin
    FROM tr_avisos_grupo tag 
    left join inter_aviso_grupo_persona iagp on iagp.avisos_grupo_id = tag.avisos_grupo_id and iagp.persona_id = '.$usuario->id.'
    WHERE tag.estatus = 1 and asignatura_grupo_id in ('.$secuencia_asignatura_grupo.') '.$script_fecha_g.'
    ');

    //AVISOS DEL ADMINISTRADOR
    $query_aviso_admin = query('select 2 as tipo,"Aviso de la escuela" as tipo_descripcion,titulo,iap.persona_id, mensaje,adjunto,UNIX_TIMESTAMP(ta.fecha_inicio) as fecha_inicio, UNIX_TIMESTAMP(ta.fecha_fin) as fecha_fin,tsa.aviso_id,ta.importancia_aviso_id,
    asignatura_grupo_id,grupo_id,orden_asignatura_id,plan_orden_id,plan_estudios_id,carrera_id
    from tr_switch_aviso tsa
    join tr_avisos ta on ta.aviso_id = tsa.aviso_id 
    left join inter_aviso_persona iap on iap.aviso_id = tsa.aviso_id and iap.persona_id = '.$usuario->id.'
    where ta.estatus=1 and rol_id = '.$usuario->id_rol.' '.$script_fecha.'
    order by iap.persona_id');

    $json_notificacion_mensajes = array();

    while($arreglo_avisos_profesor = arreglo($query_avisos_profesor)){
      // print_r($arreglo_avisos_profesor);
      for($i =0; $i < sizeof($array_asignatura_grupos); $i++){
       if($array_asignatura_grupos[$i] == $arreglo_avisos_profesor['asignatura_grupo_id']){
         $arreglo_avisos_profesor['nombre_materia'] = $array_nombre_asignatura[$i];
         $arreglo_avisos_profesor['materia_id'] = $array_materias[$i];
       }
     }

     
      if($arreglo_avisos_profesor['persona_id'] == ''){
        $arreglo_avisos_profesor['visto'] = 0;
      }else{
        $arreglo_avisos_profesor['visto'] = 1;
      }
      
      array_push($json_notificacion_mensajes, $arreglo_avisos_profesor);
     }

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

        $query_plan = query('SELECT alumno_id, tpe.plan_estudio_id,ipo.plan_orden_id,carrera_id
          from ' . $GLOBALS['db_datosGenerales'] . '.inter_plan_orden ipo
          join ' . $GLOBALS['db_controlEscolar'] . '.inter_alumno_plan iap on iap.plan_orden_id = ipo.plan_orden_id
          join ' . $GLOBALS['db_datosGenerales'] . '.tr_plan_estudios tpe on tpe.plan_estudio_id = ipo.plan_estudio_id
          where alumno_id ='.$usuario->id.' and ipo.estatus=1 and tpe.estatus=1 and iap.estatus = 1');

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
