<?php
include '../../jwt.php';
include '../../headers.php';

try {

  db('controlEscolar');

  if($_SERVER['REQUEST_METHOD'] == "POST"){
    foreach($_POST as $clave => $valor){
      ${$clave} = escape_cara($valor);
    }
    
      $usuario = Auth::GetData(
            $jwt  
        );


        $query_asistencia = query('SELECT alumno_id, iag.asignatura_grupo_id  from inter_asignatura_grupo iag  
        join inter_alumno_grupo ia on iag.grupo_id = ia.grupo_id
        where iag.asignatura_grupo_id ='.$id_asignatura_grupo.' and ia.estatus= 1 and iag.estatus=1');

       while ($arreglo_asistencia = arreglo($query_asistencia)) {
        
        $inserta = inserta('asistencia', 'alumno_id, asignatura_grupo_id, asistencia,fecha, estatus',
        ''.$arreglo_asistencia['alumno_id'].','.$arreglo_asistencia['asignatura_grupo_id'].',1, "'.$fecha.'",0');

       }
       //ingreso todas las escuelas que tiene este profesor
       
       if($inserta){
    		$json = array("status" => 1, "msg" => "Se insertó la asistencia por grupo correctamente");
    	 }else{
    		$json = array("status" => 0, "msg" => "No se logró insertar");
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
