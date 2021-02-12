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

    //SERVICIO DE CONSULTA DE SESIÓN
    $query_mensajes = query(' SELECT retroalimentacion_id 
    FROM tr_retroalimentacion tr
    join tr_materia_fecha_actividad tmfa on tmfa.materia_fecha_actividad_id = tr.materia_fecha_actividad_id
    where tmfa.actividad_id = '.$id_actividad.' and tmfa.materia_id = '.$id_materia.' and origen != '.$usuario->id_rol.' and (visto = 0 or visto is null)'
    );

    $num_mensajes=num($query_mensajes);
              
       //ingreso todas las escuelas que tiene este profesor
       
       if(num($query_mensajes)){
    		$json = array("status" => 1, "msg" => "Esta actividad tiene retroalimentaciones sin ver","totalMensajes" => $num_mensajes);
    	 }else{
    		$json = array("status" => 0, "msg" => "Esta actividad no tiene retroalimentaciones sin ver");
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