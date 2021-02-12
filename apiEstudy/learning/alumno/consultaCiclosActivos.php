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
    $query = query('SELECT alumno_id, iap.grupo_id, ciclo_id 
    FROM inter_alumno_grupo iap 
    JOIN tr_grupo tg ON iap.grupo_id = tg.grupo_id 
    WHERE alumno_id = '.$usuario->id.' AND iap.estatus = 1 AND tg.estatus = 1 AND tg.situacion_grupo_id = 1');
    
    $arreglo = arreglo($query);

    while ($arreglo_datos = arreglo($query)){
        array_push($arreglo, $arreglo_datos);
    }
              
    if(num($query)){
        $json = array("status" => 1, "msg" => "Se encontró información del ciclo", "ciclo" => $arreglo);
    }else{
        $json = array("status" => 0, "msg" => "No se encontró información");
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
