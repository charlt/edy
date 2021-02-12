<?php
include '../../jwt.php';
include '../../headers.php';

try {
  
  db ('controlEscolar');

  if($_SERVER['REQUEST_METHOD'] == "POST"){
    foreach($_POST as $clave => $valor){
      ${$clave} = escape_cara($valor);
    }

      $usuario = Auth::GetData(
            $jwt  
        );


    $rollback = query('update unicon_estudyle.tr_materia tm 
    join inter_asignatura_grupo iag on iag.asignatura_grupo_id = tm.asignatura_grupo_id
    set tm.estatus_materia_id =1, tm.calificacion = null, iag.situacion_asignatura_grupo_id =1 
    where iag.asignatura_grupo_id = '.$id_asignatura_grupo.' and tm.estatus =1 and iag.estatus =1 ');

    if($rollback){
      $query_alumnos = query('select tm.materia_id,iag.orden_asignatura_id
      from '.$GLOBALS['db_learning'].'.tr_materia tm
      join inter_asignatura_grupo iag on iag.asignatura_grupo_id = tm.asignatura_grupo_id
      where tm.asignatura_grupo_id = '.$id_asignatura_grupo.' and tm.estatus =1 and iag.estatus=1');

      while($arreglo = arreglo($query_alumnos)){
        $elimina_historial = delete('tr_historial','materia_id ='.$arreglo['materia_id'].' and orden_asignatura_id ='.$arreglo['orden_asignatura_id'].' ');
      }
    }

       if($elimina_historial){
    		$json = array("status" => 1, "msg" => "Se restablecio la asignatura correctamente");
    	 }else{
    		$json = array("status" => 0, "msg" => "No se logro restablecer la asignatura");
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