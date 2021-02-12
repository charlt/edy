<?php
include '../../jwt.php';
include '../../headers.php';

try {
  
  db ('learning');

  if($_SERVER['REQUEST_METHOD'] == "GET"){
    foreach($_GET as $clave => $valor){
      ${$clave} = escape_cara($valor);
    }

      $usuario = Auth::GetData(
            $jwt  
        );

        if($nuevos == 1){
          $consulta_visto = 'and tmm.visto = 0';
        }else{
          $consulta_visto = '';
        }
    
    $query_mensajes = query('SELECT tmm.materia_id,tm.alumno_id,count(tmm.mensaje_id) as numero_mensajes,UNIX_TIMESTAMP(max(tmm.fecha_actualiza)) as ultimo_mensaje
    from tr_materia tm
    join tr_mensaje_materia tmm on tmm.materia_id = tm.materia_id
    join '.$GLOBALS['db_controlEscolar'].'.inter_docente_asignatura_grupo idag on idag.asignatura_grupo_id = tm.asignatura_grupo_id
    where docente_id = '.$usuario->id.' and tm.estatus = 1 '.$consulta_visto.' and tmm.estatus=1 and origen=2
   group by tmm.materia_id,alumno_id
  order by ultimo_mensaje asc');


        $json_mensajes= array();

       while ($arreglo_mensajes = arreglo($query_mensajes)){

            $query_alumno=query('select nombre,primer_apellido,segundo_apellido, clave_alumno
            from '.$GLOBALS['db_datosGenerales'].'.personas p
            join '.$GLOBALS['db_controlEscolar'].'.tr_alumno ta on ta.alumno_id = p.persona_id
            where alumno_id = '.$arreglo_mensajes['alumno_id'].'
            ');

            $query_mensaje_nuevo = query('select materia_id from tr_mensaje_materia where materia_id = '.$arreglo_mensajes['materia_id'].' and estatus=1 and origen=2 and visto = 0');
            
            $query_asignatura = query('select ca.asignatura,tg.grupo as nombre_grupo from tr_materia tm
            join  '.$GLOBALS['db_controlEscolar'].'.inter_asignatura_grupo iag on iag.asignatura_grupo_id = tm.asignatura_grupo_id
            join  '.$GLOBALS['db_controlEscolar'].'.tr_grupo tg on tg.grupo_id = iag.grupo_id
            join '.$GLOBALS['db_datosGenerales'].'.inter_orden_asignatura ioa on ioa.orden_asignatura_id = iag.orden_asignatura_id
            join '.$GLOBALS['db_datosGenerales'].'.cat_asignaturas ca on ca.asignatura_id = ioa.asignatura_id
            where tm.materia_id = "'.$arreglo_mensajes['materia_id'].'"');

            $arreglo_asignatura = arreglo($query_asignatura);

            $arreglo_mensajes['nombre_grupo']  = $arreglo_asignatura['nombre_grupo'];
            $arreglo_mensajes['nombre_asignatura']  = $arreglo_asignatura['asignatura'];

            $arreglo_mensajes['nuevos_mensajes'] = num($query_mensaje_nuevo);


            $arreglo_alumno = arreglo($query_alumno);

            $arreglo_mensajes['alumno'] = $arreglo_alumno;
            
            array_push($json_mensajes,$arreglo_mensajes);
       }
       
       
       if(num($query_mensajes)){
    		$json = array("status" => 1, "msg" => "Se encontraron mensajes","mensajes" => $json_mensajes);
    	 }else{
    		$json = array("status" => 0, "msg" => "No se encontraron mensajes");
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