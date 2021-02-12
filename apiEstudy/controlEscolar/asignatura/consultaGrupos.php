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
    $query = query('select grupo,nombre_grupo,tg.grupo_id,iag.asignatura_grupo_id from
    tr_grupo tg
    join inter_asignatura_grupo iag on iag.grupo_id = tg.grupo_id
    where  iag.orden_asignatura_id ='.$id_orden_asignatura.' and iag.estatus = 1 and tg.estatus = 1');

    
    $json_asignatura_grupos= array();
    while ($arreglo_asignatura_grupos = arreglo($query)){
       array_push($json_asignatura_grupos,$arreglo_asignatura_grupos);
    }
       
       //ingreso todas las escuelas que tiene este profesor
       
       if(num($query)){
    		$json = array("status" => 1, "msg" => "Se encontraron grupos de esta asignatura","grupos" => $json_asignatura_grupos);
    	 }else{
    		$json = array("status" => 0, "msg" => "No se encontraron grupos");
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
