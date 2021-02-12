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
     $query_registros = query('select  unix_timestamp(tbs.fecha_inicio) as fecha_inicio, unix_timestamp(tbs.fecha_fin) as fecha_fin, tbs.dispositivo, tbs.ip, tbs.navegador, ipu.persona_id 
     from tr_bitacora_sesion tbs join inter_persona_usuario_rol ipu on tbs.usuario_id = ipu.usuario_id 
     where ipu.persona_id='.$id_persona.' order by fecha_inicio desc');

    
       $json_registros = array();
       while ($arreglo_registros = arreglo($query_registros)){
         if(empty($arreglo_registros['fecha_fin'])){
            $arreglo_registros['fecha_fin'] = "-";
            
         }
          array_push($json_registros,$arreglo_registros);
       }
       
       //ingreso todas las escuelas que tiene este profesor
       
       if(num($query_registros)){
    		$json = array("status" => 1, "msg" => "Se encontraron registros de accesos","registros" => $json_registros);
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
