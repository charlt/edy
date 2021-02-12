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

    //SERVICIO DE CONSULTA DE SESIÓN
    $query = query('SELECT tm.alumno_id, tm.materia_id, ta.actividad_id, actividad_clave, actividad_nombre
    FROM tr_actividad ta
    left join tr_materia_fecha_actividad tma on tma.actividad_id = ta.actividad_id
    join tr_materia tm on tm.materia_id = tma.materia_id
    join '.$GLOBALS["db_controlEscolar"].'.tr_alumno t on t.alumno_id = tm.alumno_id
    where tm.materia_id='.$id_materia.' and tma.estatus =1');

    
       $json_alumno= array();
       while ($arreglo_alumno = arreglo($query)){
          array_push($json_alumno,$arreglo_alumno);
       }
       
       //ingreso todas las escuelas que tiene este profesor
       
       if(num($query)){
    		$json = array("status" => 1, "msg" => "Se encontraron Asignaturas","Asignaturas" => $json_alumno);
    	 }else{
    		$json = array("status" => 0, "msg" => "No se encontraron Asignaturas");
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