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


    $query_actividades = query('          
    SELECT distinct ta.actividad_id,ta.actividad_nombre, ta.ponderacion, tmfa.calificacion,materia_fecha_actividad_id,final
    FROM tr_actividad ta 
    join inter_modulos_asignaturas imm on imm.modulo_id = ta.modulo_id
    join '.$GLOBALS["db_datosGenerales"].'.inter_orden_asignatura ioa on ioa.asignatura_id = imm.asignatura_id
    join '.$GLOBALS["db_controlEscolar"].'.inter_asignatura_grupo iag on iag.orden_asignatura_id = ioa.orden_asignatura_id 
    join tr_materia tm on tm.asignatura_grupo_id = iag.asignatura_grupo_id
    join cat_modulos m on m.modulo_id = imm.modulo_id
    left join (
      select actividad_id,materia_fecha_actividad_id,calificacion 
      from tr_materia_fecha_actividad 
      where materia_id = '.$id_materia.' and (estatus_actividad_id = 2 or estatus_actividad_id = 4)  and estatus = 1 
    ) afa on afa.actividad_id = ta.actividad_id
    where tm.materia_id = '.$id_materia.'
    and ta.estatus = 1 and m.estatus = 1 and ta.tipo_actividad_id != 1  and ta.estatus = 1');

      

          
    $calificacion_asignatura = 0;
      $json_actividades = array();
         while($arreglo_actividades = arreglo($query_actividades)){
          
          
          if($arreglo_actividades['calificacion'] == ''){
            $tmp_cali = 0;
          }else{
            $tmp_cali = $arreglo_actividades['calificacion'];
          }

          $valor_final = $arreglo_actividades['ponderacion']* $tmp_cali/100;
          
          $arreglo_actividades['valor'] = $valor_final;

          array_push($json_actividades,$arreglo_actividades);


         }

        
      if(num($query_actividades)){
    		$json = array("status" => 1, "msg" => "Avance de la materia", "actividades"=>$json_actividades);
    	 }else{
    		$json = array("status" => 0, "msg" => "No se encontró avance en la materia");
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