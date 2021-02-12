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
         
      $query_asigntaura_grupo= query('select asignatura_grupo_id from inter_asignatura_grupo where grupo_id ='.$id_grupo);
      while($arreglo = arreglo($query_asigntaura_grupo)){
        $elimina_alumno_asignatura = update('inter_alumno_asignatura_grupo','estatus = 0','asignatura_grupo_id ='.$arreglo['asignatura_grupo_id']);
        $elimina_materia = update($GLOBALS['db_learning'].'.tr_materia','estatus = 0','asignatura_grupo_id ='.$arreglo['asignatura_grupo_id']);
      
      }
          $elimina_asignatura_grupo = update('inter_asignatura_grupo','estatus = 0, usuario_actualiza="'.$usuario->usuario.'"','grupo_id = '.$id_grupo);
          $elimina_alumno_grupo = update('inter_alumno_grupo','estatus = 0','grupo_id = '.$id_grupo);
          $elimina_grupo = update('tr_grupo','estatus = 0,usuario_actualiza="'.$usuario->usuario.'"','grupo_id = '.$id_grupo);
        
             
       
       if($elimina_grupo){
    		$json = array("status" => 1, "msg" => "Se eliminó el grupo correctamente");
    	 }else{
    		$json = array("status" => 0, "msg" => "No se logró eliminar");
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
