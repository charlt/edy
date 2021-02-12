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
    $query_mensajes = query('SELECT tr.*, tmfa.actividad_id, ta.actividad_nombre
    FROM tr_retroalimentacion tr
    join tr_materia_fecha_actividad tmfa on tmfa.materia_fecha_actividad_id = tr.materia_fecha_actividad_id
    join tr_actividad ta on ta.actividad_id = tmfa.actividad_id
    join tr_materia tm on tm.materia_id = tmfa.materia_id
    WHERE tm.materia_id = '.$id_materia.' and origen = 3 and (visto = 0 or visto is null)'
    );

    $num_mensajes=num($query_mensajes);

    $json_mensajes = array();
    while ($arreglo_mensajes = arreglo($query_mensajes)){
      array_push($json_mensajes,$arreglo_mensajes);
    }
              
       //ingreso todas las escuelas que tiene este profesor
       
       if(num($query_mensajes)){
    		$json = array("status" => 1, "msg" => "Esta materia tiene mensajes sin ver","totalMensajes" => $num_mensajes, "mensajes" => $json_mensajes);
    	 }else{
    		$json = array("status" => 0, "msg" => "Esta materia tiene todos los mensajes vistos");
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