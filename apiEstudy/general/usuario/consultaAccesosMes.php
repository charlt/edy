<?php
include '../../jwt.php';
include '../../headers.php';

try {
  
  db ('datosGenerales');

  if($_SERVER['REQUEST_METHOD'] == "GET"){
    foreach($_GET as $clave => $valor){
      ${$clave} = escape_cara($valor);
    }

      $usuario = Auth::GetData(
            $jwt  
        );

    //SERVICIO DE CONSULTA DE SESIÓN
     $query_registros = query('select day(fecha_inicio) as dia, count(tbs.usuario_id) as accesos from tr_bitacora_sesion tbs
     join inter_persona_usuario_rol ipur on ipur.usuario_id = tbs.usuario_id
     where month(fecha_inicio) = '.$mes.' and persona_id= '.$id_persona.'
     group by dia');

    
       $json_registros = array();
       while ($arreglo_registros = arreglo($query_registros)){
          array_push($json_registros,$arreglo_registros);
       }
       
       //ingreso todas las escuelas que tiene este profesor
       
       if(num($query_registros)){
    		$json = array("status" => 1, "msg" => "Se encontraron registros de accesos en el mes","registros" => $json_registros);
    	 }else{
    		$json = array("status" => 0, "msg" => "No se encontraron registros");
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
