<?php
include '../../jwt.php';
include '../../headers.php';

try {
  
  db('learning');

  if($_SERVER['REQUEST_METHOD'] == "GET"){
    foreach($_GET as $clave => $valor){
      ${$clave} = escape_cara($valor);
    }

      $usuario = Auth::GetData(
            $jwt  
        );

        $script = 'and ta.estatus = '.$filtro;
        if ($filtro == '0') $script = '';
        $query= query('select ta.actividad_nombre, tmfa.calificacion , tmfa.intento_num ,cea.estatus_actividad, cea.icono , tmfa.fecha_actualiza,
        ta.estatus 
        from tr_materia_fecha_actividad tmfa
        join tr_actividad ta on tmfa.actividad_id = ta.actividad_id
        join cat_estatus_actividad cea on  cea.estatus_actividad_id = tmfa.estatus_actividad_id 
        where (tmfa.materia_id = '.$id_materia.') and (cea.estatus_actividad_id != 8) '.$script.' 
        order by ta.orden ');

        $json_historial = array();
        while ($arreglo = arreglo($query)){
           array_push($json_historial,$arreglo);
        }
       
       if(num($query)){
    		$json = array("status" => 1, "msg" => "Se encontró historial","historial" => $json_historial);
    	 }else{
    		$json = array("status" => 0, "msg" => "No se encontró historial");
    	 }

  }else{
  	$json = array("status" => 0, "msg" => "Método no aceptado");
  }

  echo json_encode($json);

} catch (Exception $e) {
    $json = array("status" => 0, "msg" =>  $e->getMessage());

    echo json_encode($json);
}
