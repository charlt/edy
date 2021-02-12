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
      
  

      $query = query('SELECT tm.asignatura_grupo_id,videoconferencia_id,nombre,descripcion,tv.fecha_inicio,tv.fecha_fin FROM tr_videoconferencia tv
      join tr_materia tm on tm.asignatura_grupo_id = tv.asignatura_grupo_id      
      WHERE materia_id  =  '.$id_materia.'  and tv.estatus=1 and now() between tv.fecha_inicio and tv.fecha_fin
      order by fecha_inicio
      ');

      


       
       
       
       //ingreso todas las escuelas que tiene este profesor
       
       if(num($query)){

        $arreglo = arreglo($query);

      //consulta_docente_grupo
      $query_docente = query('SELECT u.usuario_id, p.persona_id, nombre, primer_apellido, segundo_apellido, color, url_perfil,u.color,u.url_perfil 
      FROM  '.$GLOBALS["db_controlEscolar"].'.inter_docente_asignatura_grupo idag
      join '.$GLOBALS["db_datosGenerales"].'.personas p ON p.persona_id = idag.docente_id
      join '.$GLOBALS["db_datosGenerales"].'.inter_persona_usuario_rol ipu ON ipu.persona_id = p.persona_id
      join '.$GLOBALS["db_datosGenerales"].'.usuarios u ON ipu.usuario_id = u.usuario_id
      WHERE asignatura_grupo_id = '.$arreglo['asignatura_grupo_id'].'
      and idag.estatus = 1 ');

      if(num($query_docente)){
        $arreglo_docente = arreglo($query_docente);
      }else{
        $arreglo_docente = null;
      }
      

      $arreglo['docente'] = $arreglo_docente;
         
    		$json = array("status" => 1, "msg" => "La proxima videconferencia es","videoconferencia" => $arreglo);
    	 }else{
    		$json = array("status" => 0, "msg" => "No se encontró videoconferencia");
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