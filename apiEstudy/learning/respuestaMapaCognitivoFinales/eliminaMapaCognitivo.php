<?php
include '../../jwt.php';
include '../../headers.php';

try {

  db("learning");

  if($_SERVER['REQUEST_METHOD'] == "GET"){
    foreach($_GET as $clave => $valor){
      ${$clave} = escape_cara($valor);
    }
    
    $usuario = Auth::GetData(
            $jwt 
    );

         
        $elimina_respuesta_finales = query('delete trf FROM tr_mc_respuesta tr
        join tr_mc_categorias tc on tc.respuesta_id = tr.respuesta_id
        join tr_mc_elementos te on te.respuesta_id = tr.respuesta_id
        join tr_mc_respuestas_finales trf on tc.categoria_id = trf.categoria_id and te.elemento_id = trf.elemento_id
        where tr.respuesta_id = '.$id_respuesta.' and materia_fecha_actividad_id = '.$id_materia_fecha_actividad);

        if($elimina_respuesta_finales){
            
        $elimina_elemento = query('delete from tr_mc_elementos 
        where respuesta_id = '.$id_respuesta);
        if($elimina_elemento){
            
        $elimina_categoria = query('delete  from tr_mc_categorias
        where respuesta_id = '.$id_respuesta);

        if($elimina_categoria){
            
            $elimina_pregunta = query('delete from tr_mc_respuesta
            where respuesta_id = '.$id_respuesta);
            }
        }
        }

       
       //ingreso todas las escuelas que tiene este profesor
       
       if($elimina_pregunta){
    		$json = array("status" => 1, "msg" => "Se eliminó la respuesta correctamente");
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