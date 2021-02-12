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

    //SERVICIO DE CONSULTA DE SESIÓN
    $query_cat_grupo = query('SELECT grupo_id,grupo, nombre_grupo, descripcion,
    cupo, fecha_creacion, usuario_crea, ciclo_id,estatus,plan_orden_id,campus_id from tr_grupo where grupo_id = '.$id_grupo);

    
       $json_cat_grupo = array();
       while ($arreglo_cat_grupo = arreglo($query_cat_grupo)){
          array_push($json_cat_grupo,$arreglo_cat_grupo);
       }
       
       //ingreso todas las escuelas que tiene este profesor
       
       if(num($query_cat_grupo)){
    		$json = array("status" => 1, "msg" => "Se encontró el grupo","grupo" => $json_cat_grupo);
    	 }else{
    		$json = array("status" => 0, "msg" => "No se encontró grupo");
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
