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

    $query_sin_grupo = query('SELECT iap.alumno_id, nombre, primer_apellido, segundo_apellido, clave_alumno 
    from inter_alumno_plan iap
    join '.$GLOBALS['db_datosGenerales'].'.personas p on p.persona_id = iap.alumno_id
    join tr_alumno ta on ta.alumno_id = p.persona_id
    where iap.plan_orden_id = '.$id_plan_orden.' and iap.asignado_grupo = 0 and iap.estatus=1');

    
       $json = array();
       while ($arreglo = arreglo($query_sin_grupo)){
          array_push($json,$arreglo);
       }
       
       //ingreso todas las escuelas que tiene este profesor
       
       if(num($query_sin_grupo)){
    		$json = array("status" => 1, "msg" => "Se encontraron alumnos sin grupo","alumnos" => $json);
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
