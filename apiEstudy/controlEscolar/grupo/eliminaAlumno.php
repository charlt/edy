<?php
include '../../jwt.php';
include '../../headers.php';

try {
  
  db ('controlEscolar');

  if($_SERVER['REQUEST_METHOD'] == "GET"){
    foreach($_GET as $clave => $valor){
      ${$clave} = escape_cara($valor);
    }

      $usuario = Auth::GetData(
            $jwt  
        );

        query("update  inter_alumno_grupo iag 
        join tr_grupo tg on tg.grupo_id = iag.grupo_id
        join inter_alumno_plan iap on iap.alumno_id =iag.alumno_id  and iap.plan_orden_id = tg.plan_orden_id
        set asignado_grupo = 0 where  tg.grupo_id =".$id_grupo." and iap.alumno_id =".$id_alumno);

        $elimina=delete('inter_alumno_grupo',
        'alumno_id='.$id_alumno.' and grupo_id = '.$id_grupo);

        $query_grupos = query('select asignatura_grupo_id from inter_asignatura_grupo where grupo_id = '.$id_grupo.' and estatus=1');
        while($arreglo_grupos = arreglo($query_grupos)){

          $estatus_alumno_asignatura= update($GLOBALS["db_learning"].'.tr_materia',
          'estatus=0, usuario_actualiza="'.$usuario->usuario.'"','alumno_id='.$id_alumno.' and asignatura_grupo_id='.$arreglo_grupos['asignatura_grupo_id']);
        }

          
 

       //ingreso todas las escuelas que tiene este profesor
       
       if($elimina){  
        $json = array("status" => 1, "msg" => "Se eliminó alumno correctamente");
     }else{
        $json = array("status" => 0, "msg" => "No se eliminó alumno");
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