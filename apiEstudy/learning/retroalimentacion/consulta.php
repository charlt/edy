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
    $query_mensajes = query('SELECT tr.retroalimentacion_id,tr.materia_fecha_actividad_id,tr.persona_id,tr.texto,tr.origen,tr.visto,    UNIX_TIMESTAMP(tr.fecha_creacion) as fecha_creacion    ,tr.estatus,url_imagen
     FROM tr_retroalimentacion tr
     join tr_materia_fecha_actividad tmfa on tmfa.materia_fecha_actividad_id = tr.materia_fecha_actividad_id
     where tmfa.actividad_id = '.$id_actividad.' and tmfa.materia_id = '.$id_materia);

        $num_mensajes=num($query_mensajes);

       $json_mensajes= array();

      //  $i=0;
       while ($arreglo_mensajes = arreglo($query_mensajes)){
          array_push($json_mensajes,$arreglo_mensajes);
            // if($usuario->id_rol != $arreglo_mensajes['origen']){
            //   update('tr_retroalimentacion','visto=1',
            //  'retroalimentacion_id='.$arreglo_mensajes['retroalimentacion_id']);
            // }
          // $i++;
       }
       
       if(num($query_mensajes)){
    		$json = array("status" => 1, "msg" => "Se encontraron Mensajes","mensajes" => $json_mensajes);
    	 }else{
    		$json = array("status" => 0, "msg" => "No se encontraron Mensajes");
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