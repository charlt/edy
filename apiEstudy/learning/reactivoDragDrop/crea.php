<?php
include '../../jwt.php';
include '../../headers.php';

db('learning');

try {

  if($_SERVER['REQUEST_METHOD'] == "POST"){
    
    $jwt=$_POST["jwt"];

    $reactivo_desc=$_POST["reactivo_desc"];

    $orden = 1;

   $id_pregunta = $_POST["id_pregunta"];


      $usuario = Auth::GetData(
            $jwt  
        );


        
    query('delete torr,tr
    from tr_materia_fecha_actividad tmfa
    left join tr_respuesta tr on tr.materia_fecha_actividad_id = tmfa.materia_fecha_actividad_id
    join tr_dd_respuesta torr on torr.materia_fecha_actividad_id = tmfa.materia_fecha_actividad_id
    join tr_dd_reactivos tor on tor.reactivo_id = torr.reactivo_id
    where materia_id = 0 and tor.pregunta_id ='.$id_pregunta);

    query('delete tmfa
    from tr_materia_fecha_actividad tmfa
    left join tr_respuesta tr on tr.materia_fecha_actividad_id = tmfa.materia_fecha_actividad_id
    join tr_dd_respuesta torr on torr.materia_fecha_actividad_id = tmfa.materia_fecha_actividad_id
    join tr_dd_reactivos tor on tor.reactivo_id = torr.reactivo_id
    where materia_id = 0 and tor.pregunta_id ='.$id_pregunta);



        $elimina = query('delete from tr_dd_reactivos
        where pregunta_id = '.$id_pregunta);

    

    $reactivos = "INSERT INTO tr_dd_reactivos(pregunta_id, reactivo_desc, orden, fecha_creacion, estatus) VALUES";
    
    $orden +1;

    foreach ($reactivo_desc as $reactivo_desc_tmp) {
        $reactivos .='('.$id_pregunta.',"'.$reactivo_desc_tmp.'",'.$orden.', now(),1),';
        $orden++;
      }
    
      $reactivos = trim($reactivos, ',');

       //ingreso todas las escuelas que tiene este profesor

       $inserta=query($reactivos);
       
       if($inserta){
    		$json = array("status" => 1, "msg" => "Se insertó el reactivo correctamente");
    	 }else{
    		$json = array("status" => 0, "msg" => "No se logró insertar");
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