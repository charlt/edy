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
    $query_aviso_grupo = query('SELECT  avisos_grupo_id, titulo, mensaje, adjunto, docente_id, asignatura_grupo_id, tag.fecha_inicio, tag.fecha_fin
    ,importancia
    FROM tr_avisos_grupo tag
    join cat_importancia_aviso on tag.importancia_aviso_id = cat_importancia_aviso.importancia_aviso_id
     WHERE tag.estatus=1 and asignatura_grupo_id ='.$id_asignatura_grupo.' and docente_id = '.$id_docente);
    
      $json_aviso_grupo = array();

       while ($arreglo_aviso_grupo = arreglo($query_aviso_grupo)){
          array_push($json_aviso_grupo,$arreglo_aviso_grupo);
       }
       
       //ingreso todas las escuelas que tiene este profesor
       
       if(num($query_aviso_grupo)){
    		$json = array("status" => 1, "msg" => "Se encontraron avisos","avisos" => $json_aviso_grupo);
    	 }else{
    		$json = array("status" => 0, "msg" => "No se encontraron avisos");
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
