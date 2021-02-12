<?php
include '../../jwt.php';
include '../../headers.php';

try {
  
  db ('learning');

  if($_SERVER['REQUEST_METHOD'] == "POST"){
    foreach($_POST as $clave => $valor){
      ${$clave} = escape_cara($valor);
    }

      /*$usuario = Auth::GetData(
            $jwt  
        );*/

        $query_actividad= query('select tipo_calificacion
        from tr_datos_pregunta tdp
        join tr_actividad ta on ta.actividad_id =  tdp.actividad_id
         where ta.actividad_id ='.$id_actividad.' and tdp.estatus = 1');

        $arreglo_actividad = arreglo($query_actividad);

        $query_pregunta= query('select tdp.datos_pregunta_id, tdp.ponderacion
        from tr_datos_pregunta tdp
        join tr_om_pregunta top on top.datos_pregunta_id = tdp.datos_pregunta_id
         where pregunta_id ='.$id_pregunta);

         $arreglo_pregunta = arreglo($query_pregunta);


         if($arreglo_actividad['tipo_calificacion'] == 3)
              $ponderacion = round(1/num($query_actividad)*10,2 );
            else
              $ponderacion = $arreglo_pregunta['ponderacion']/10;  
        

        $query_omr  = query('select torr.materia_fecha_actividad_id, tom.datos_pregunta_id,tor.ponderacion, torr.reactivo_id from tr_om_pregunta tom
        join tr_om_reactivos tor on tor.pregunta_id = tom.pregunta_id
        join tr_om_respuesta torr on tor.reactivo_id = torr.reactivo_id
        where tom.pregunta_id ='.$id_pregunta.'');

        while($arreglo_omr = arreglo($query_omr)){          
          
            
            $valor = $arreglo_omr['ponderacion'] /100;
            $calificacion = $arreglo_omr['ponderacion']*$ponderacion/100;
            
            query('update tr_respuesta set calificacion = '.$calificacion.', valor='.$valor.' where datos_pregunta_id='.$arreglo_omr['datos_pregunta_id'].' and materia_fecha_actividad_id = '.$arreglo_omr['materia_fecha_actividad_id']);
        }

        $edita_calificacion_materia = query('update tr_materia_fecha_actividad tmfa
        join (select materia_fecha_actividad_id, IF( sum(calificacion)> 10, 10,  sum(calificacion)) as calificacion 
        from tr_respuesta tr
        join tr_datos_pregunta tdp on tr.datos_pregunta_id = tdp.datos_pregunta_id
         where tdp.estatus = 1 and tr.estatus = 1 group by materia_fecha_actividad_id) tr
        on tr.materia_fecha_actividad_id = tmfa.materia_fecha_actividad_id
        set tmfa.calificacion = tr.calificacion
        where actividad_id = '.$id_actividad);        

       
       if($edita_calificacion_materia){
    		$json = array("status" => 1, "msg" => "Se actualizaron calificaciones correctamente",);
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