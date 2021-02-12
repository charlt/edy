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

    $query_calificacion = query('SELECT ta.actividad_nombre, ta.tipo_actividad_id, tmfa.calificacion, ta.visible FROM tr_materia_fecha_actividad tmfa 
    JOIN tr_actividad ta ON tmfa.actividad_id = ta.actividad_id
    WHERE tmfa.materia_id = '.$id_materia.' AND ta.tipo_actividad_id = 5 AND tmfa.estatus = 1 AND ta.estatus = 1
    AND ta.visible = 1');
    
    $arreglo = array();

    if(num($query_calificacion) > 0){
        for ($i=0; $i < num($query_calificacion) ; $i++) {
            $arreglo_calificacion = arreglo($query_calificacion);
            array_push($arreglo, $arreglo_calificacion);
        }
        $json = array("status" => 1, "msg" => "Calificaciónes del alumno", "calificaciones" => $arreglo);
    }else{
        $json = array("status" => 0, "msg" => "No se encontraron calificaciones");
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