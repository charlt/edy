<?php
include '../../jwt.php';
include '../../headers.php';

try {
 db ('learning');





  if($_SERVER['REQUEST_METHOD'] == "POST"){
    
    $ponderacion = $_POST['ponderacion'];
    $reactivo = $_POST['reactivo'];
    $retroalimentacion = $_POST['retroalimentacion'];
    $id_pregunta = $_POST['id_pregunta'];
    $jwt = $_POST['jwt'];
    
    $usuario = Auth::GetData(
        $jwt  
    );

    query('delete torr,tr
    from tr_materia_fecha_actividad tmfa
    left join tr_respuesta tr on tr.materia_fecha_actividad_id = tmfa.materia_fecha_actividad_id
    join tr_om_respuesta torr on torr.materia_fecha_actividad_id = tmfa.materia_fecha_actividad_id
    join tr_om_reactivos tor on tor.reactivo_id = torr.reactivo_id
    where materia_id = 0 and tor.pregunta_id ='.$id_pregunta);

    query('delete tmfa
    from tr_materia_fecha_actividad tmfa
    left join tr_respuesta tr on tr.materia_fecha_actividad_id = tmfa.materia_fecha_actividad_id
    join tr_om_respuesta torr on torr.materia_fecha_actividad_id = tmfa.materia_fecha_actividad_id
    join tr_om_reactivos tor on tor.reactivo_id = torr.reactivo_id
    where materia_id = 0 and tor.pregunta_id ='.$id_pregunta);
    


    $query = delete('tr_om_reactivos','pregunta_id ='.$id_pregunta);


    $num_reactivos = sizeof($reactivo);


    
    $reactivos = "INSERT INTO tr_om_reactivos(reactivo, pregunta_id, ponderacion, retroalimentacion,fecha_creacion, estatus) VALUES ";
    
    for($i = 0; $i < $num_reactivos; $i++){
        $reactivos .=  '("'.escape_cara($reactivo[$i]).'",'.$id_pregunta.','.$ponderacion[$i].',"'.escape_cara($retroalimentacion[$i]).'",now(),1),';
    }

    $reactivos = trim($reactivos, ',');


    $inserta=query($reactivos);
        

        if($inserta){
              $json = array("status" => 1, "msg" => "Reactivos guardados correctamente");
        }else{ 
            $json = array("status" => 1, "msg" => "No se pueden crear los reactivos");
        }

}else{
    $json = array("status" => 0, "msg" => "Método no aceptado");

}

        

echo json_encode($json);

} catch (Exception $e) {
    $json = array("status" => 0, "msg" =>  $e->getMessage());

    echo json_encode($json);
}


 
?>

