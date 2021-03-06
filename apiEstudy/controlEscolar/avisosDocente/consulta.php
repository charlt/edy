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
    $query_cat_ciclo = query('SELECT  avisos_grupo_id, importancia_aviso_id, titulo, mensaje, adjunto, docente_id, asignatura_grupo_id, fecha_inicio, fecha_fin,
    fecha_crea, fecha_actualiza, usuario_crea, usuario_actualiza, estatus
    FROM tr_avisos_grupo WHERE avisos_grupo_id = '.$id_avisos.' and estatus=1');
    
      $json_cat_ciclo = array();

       while ($arreglo_cat_ciclo = arreglo($query_cat_ciclo)){
          array_push($json_cat_ciclo,$arreglo_cat_ciclo);
       }
       
       //ingreso todas las escuelas que tiene este profesor
       
       if(num($query_cat_ciclo)){
    		$json = array("status" => 1, "msg" => "Se encontraron avisos","aviso" => $json_cat_ciclo);
    	 }else{
    		$json = array("status" => 0, "msg" => "No se encontron avisos");
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
