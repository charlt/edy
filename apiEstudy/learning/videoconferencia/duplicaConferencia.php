<?php
include '../../jwt.php';
include '../../headers.php';

try {
 db ('learning');





  if($_SERVER['REQUEST_METHOD'] == "POST"){
    $jwt = $_POST['jwt'];    
    $videoconferencia_id = $_POST['videoconferencia_id'];
    $asignatura_grupo_id = $_POST['asignatura_grupo_id'];
    
    $usuario = Auth::GetData(
        $jwt  
    );

    $arreglo_videoconferencia = arreglo(query('select tv.videoconferencia_id,nombre, descripcion, fecha_inicio, fecha_fin
    from tr_videoconferencia tv
    where tv.videoconferencia_id ='.$videoconferencia_id[0]));
        print_r($arreglo_videoconferencia);


    $num_asignaturas = sizeof($asignatura_grupo_id);
    $asignaturas = "INSERT INTO tr_videoconferencia (asignatura_grupo_id, nombre,descripcion,fecha_inicio, 
    fecha_fin, estatus) VALUES ";
    
    for($i = 0; $i < $num_asignaturas; $i++){
        $asignaturas .=  '('.$asignatura_grupo_id[$i].',"'.$arreglo_videoconferencia['nombre'].'","'.$arreglo_videoconferencia['descripcion'].'",
        "'.$arreglo_videoconferencia['fecha_inicio'].'", "'.$arreglo_videoconferencia['fecha_fin'].'",1),';
    }

    $asignaturas = trim($asignaturas, ',');


    $inserta=query($asignaturas);
        

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

