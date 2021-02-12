<?php
include '../../jwt.php';
include '../../headers.php';

try {

  db('controlEscolar');

  /*
  $usuario = Auth::GetData(
    $jwt );*/

  if($_SERVER['REQUEST_METHOD'] == "POST"){
    foreach($_POST as $clave => $valor){
      ${$clave} = escape_cara($valor);
    }
    
    $query_grupos_cerrados = query('select grupo from tr_grupo where situacion_grupo_id != 4 and estatus = 1 and ciclo_id ='.$id_ciclo);
    $num_grupos_cerrados = num($query_grupos_cerrados);
    if(!$num_grupos_cerrados){
    
        $cierra_ciclo = update('cat_ciclo','ciclo_estatus_id=2','ciclo_id = '.$id_ciclo);

        if($cierra_ciclo){
          $json = array("status" => 1, "msg" => "Se cerró ciclo correctamente");
         }else{
          $json = array("status" => 0, "msg" => "No se logró cerrar");
         }

    }else{
      $json_grupos_cerrados = array();
      while($arreglo_grupos_cerrados = arreglo($query_grupos_cerrados)){
        array_push($json_grupos_cerrados,$arreglo_grupos_cerrados['grupo']);
      }

      $json = array("status" => 0, "msg" => "Debes cerrar los grupos '".implode(',',$json_grupos_cerrados)."' primero");
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
