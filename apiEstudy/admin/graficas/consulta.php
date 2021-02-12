<?php
include '../../jwt.php';
include '../../headers.php';

try {

  db ('datosGenerales');

  if($_SERVER['REQUEST_METHOD'] == "GET"){
    foreach($_GET as $clave => $valor){
      ${$clave} = escape_cara($valor);
    }
  
    $usuario = Auth::GetData($jwt);

    if ($tipo == '0') {
      $query_accesos = query('SELECT HOUR(fecha_inicio) AS hora, COUNT(fecha_inicio) AS accesos 
        FROM inter_persona_usuario_rol ipur JOIN tr_bitacora_sesion tbs 
        ON tbs.usuario_id = ipur.usuario_id WHERE ipur.rol_id = "'.$rol.'" AND tbs.fecha_inicio 
        BETWEEN "'.$fecha_inicio.'" AND "'.$fecha_fin.'" GROUP BY hora');
    }else if ($tipo == '2') {
      $query_accesos = query('SELECT DAY(tbs.fecha_inicio) AS dia, COUNT(tbs.usuario_id) AS accesos
        FROM inter_persona_usuario_rol ipur JOIN tr_bitacora_sesion tbs ON tbs.usuario_id = ipur.usuario_id
        WHERE ipur.rol_id = "'.$rol.'" AND tbs.fecha_inicio 
        BETWEEN "'.$fecha_inicio.'" AND "'.$fecha_fin.'" GROUP BY dia');
    }
    
    $json_accesos = array();
      while ($arreglo_accesos = arreglo($query_accesos)){
        array_push($json_accesos, $arreglo_accesos);
    }
            
    if(num($query_accesos)){
      $json = array("status" => 1, "msg" => "Se encontraron accesos", "accesos" => $json_accesos);
    }else{
      $json = array("status" => 0, "msg" => "No se encontraron accesos");
    }

  }else{
  	$json = array("status" => 0, "msg" => "Método no aceptado");
  }

  echo json_encode($json);

} catch (Exception $e) {
    $json = array("status" => 0, "msg" =>  $e->getMessage());

    echo json_encode($json);
}
