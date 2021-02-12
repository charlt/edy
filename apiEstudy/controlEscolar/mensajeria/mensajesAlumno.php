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
    
    $query_mensajes = query('SELECT tm.materia_id, tm.alumno_id, tmm.texto, ca.asignatura,tmm.persona_id, tmm.origen,count(*) as total_mensajes, UNIX_TIMESTAMP(max(tmm.fecha_actualiza)) as ultimo_mensaje from tr_mensaje_materia tmm 
    join tr_materia tm on tm.materia_id = tmm.materia_id 
    join '.$GLOBALS['db_controlEscolar'].'.inter_asignatura_grupo iag on iag.asignatura_grupo_id = tm.asignatura_grupo_id 
    join '.$GLOBALS['db_datosGenerales'].'.inter_orden_asignatura ioa on ioa.orden_asignatura_id = iag.orden_asignatura_id 
    join '.$GLOBALS['db_datosGenerales'].'.cat_asignaturas ca on ca.asignatura_id = ioa.asignatura_id 
    where tm.alumno_id = '.$usuario->id.' and tmm.origen = 3 '.$consulta_visto.'
    group by tmm.materia_id 
    order by ultimo_mensaje asc');


        $json_mensajes= array();

       while ($arreglo_mensajes = arreglo($query_mensajes)){

            $query_docente=query('select nombre,primer_apellido,segundo_apellido, clave_profesor
            from '.$GLOBALS['db_datosGenerales'].'.personas p
            join '.$GLOBALS['db_controlEscolar'].'.tr_docente td on td.docente_id = p.persona_id
            where docente_id = '.$arreglo_mensajes['persona_id'].'
            ');

            $arreglo_docente = arreglo($query_docente);

            $arreglo_mensajes['docente'] = $arreglo_docente;
            
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