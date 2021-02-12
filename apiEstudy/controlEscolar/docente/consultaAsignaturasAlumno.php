<?php
include '../../jwt.php';
include '../../headers.php';
include '../class/alumno.class.php';

try {
  
  db ('controlEscolar');

  $alumno=new Alumno();

  if($_SERVER['REQUEST_METHOD'] == "GET"){
    foreach($_GET as $clave => $valor){
      ${$clave} = escape_cara($valor);
    }

      $usuario = Auth::GetData(
            $jwt  
        );

        if(!isset($busqueda)) $busqueda = null; //si no existe el parámetro de busqueda forzar a que busque algo
  
        $alumnos=$alumno::busquedaAlumnos($busqueda,$tipo_busqueda,$min,$max);    
        
        $json_alumno = array();
        foreach ($alumnos as $rec_alumno) {
            $query_asignaturas_alumnos = query('SELECT iag.asignatura_grupo_id,asignatura_padre_id,grupo, asignatura_padre_seriacion, ca.asignatura_id, asignatura_clave, asignatura, 
            tipo_asignatura_id, tg.grupo_id, tg.nombre_grupo, calif_min, calif_max, creditos, cc.ciclo_estatus_id, ciclo_desc, 
            ciclo_estatus_desc, coj.orden_jerarquico_descripcion, UNIX_TIMESTAMP(iag.fecha_inicio) as fecha_inicio, UNIX_TIMESTAMP(iag.fecha_fin) as fecha_fin,csag.situacion_asignatura_grupo_id, situacion_asignatura_grupo_descripcion,
            nombre,primer_apellido, segundo_apellido
            FROM '.$GLOBALS['db_datosGenerales'].'.cat_asignaturas ca
            join '.$GLOBALS['db_datosGenerales'].'.inter_orden_asignatura ioa on ioa.asignatura_id = ca.asignatura_id
            join '.$GLOBALS['db_datosGenerales'].'.inter_plan_orden ipo on ipo.plan_orden_id = ioa.plan_orden_id
            join inter_asignatura_grupo iag on iag.orden_asignatura_id = ioa.orden_asignatura_id
            join tr_grupo tg on tg.grupo_id = iag.grupo_id
            join cat_ciclo cc on cc.ciclo_id = tg.ciclo_id
            join cat_ciclo_estatus cce on cce.ciclo_estatus_id = cc.ciclo_estatus_id
            join '.$GLOBALS['db_datosGenerales'].'.cat_orden_jerarquico coj on coj.orden_jerarquico_id = ipo.orden_jerarquico_id
            join inter_alumno_asignatura_grupo iaag on iaag.asignatura_grupo_id = iag.asignatura_grupo_id
            join cat_situacion_asignatura_grupo csag on csag.situacion_asignatura_grupo_id = iag.situacion_asignatura_grupo_id
            join tr_alumno ta on ta.alumno_id = iaag.alumno_id
            join '.$GLOBALS['db_datosGenerales'].'.personas p on p.persona_id = ta.alumno_id
            where ta.alumno_id = '.$rec_alumno['usuario_id'].' and ta.estatus=1 and iaag.estatus = 1 and iag.estatus = 1');
            while($arreglo_asignaturas_alumnos = arreglo($query_asignaturas_alumnos)){
                array_push($json_alumno, $arreglo_asignaturas_alumnos);
            }
        }

       
       if($json_alumno){
    		$json = array("status" => 1, "msg" => "Se encontraron alumnos","Alumnos" => $json_alumno);
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