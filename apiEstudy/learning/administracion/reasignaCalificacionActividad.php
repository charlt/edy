<?php
include '../../jwt.php';
include '../../headers.php';

try {
  
  db ('learning');

  if($_SERVER['REQUEST_METHOD'] == "POST"){
    foreach($_POST as $clave => $valor){
      ${$clave} = escape_cara($valor);
    }

      $usuario = Auth::GetData(
            $jwt  
        );

        $query_actividad= query('select datos_pregunta_id, tdp.ponderacion, tdp.actividad_id ,ta.tipo_calificacion
        from tr_datos_pregunta tdp  
        join tr_actividad ta on ta.actividad_id = tdp.actividad_id
        where tdp.actividad_id ='.$id_actividad.' and tdp.estatus = 1 and ta.estatus=1');

        while($arreglo_actividad = arreglo($query_actividad)){


            if($arreglo_actividad['tipo_calificacion'] == 3)
              $ponderacion = 1/num($query_actividad)*10;
            else
              $ponderacion = $arreglo_actividad['ponderacion']/10;  
            
            $query_respuestas= query('update tr_respuesta set calificacion = valor*'.$ponderacion.' where datos_pregunta_id='.$arreglo_actividad['datos_pregunta_id']);
        }

        $edita_calificacion_materia = query('update tr_materia_fecha_actividad tmfa
        join (select materia_fecha_actividad_id, if(sum(calificacion)> 10, 10,sum(calificacion)) as calificacion 
        from tr_respuesta tr
        join tr_datos_pregunta tdp on tr.datos_pregunta_id = tdp.datos_pregunta_id
         where tdp.estatus = 1 and tr.estatus = 1 group by materia_fecha_actividad_id) tr
        on tr.materia_fecha_actividad_id = tmfa.materia_fecha_actividad_id
        set tmfa.calificacion = tr.calificacion
        where actividad_id = '.$id_actividad);        

       
       if($edita_calificacion_materia){
    		$json = array("status" => 1, "msg" => "Se actualizarón calificaciones correctamente",);
    	 }else{
    		$json = array("status" => 0, "msg" => "No se actualizaron correctamente");
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