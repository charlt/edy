<?php
include '../../jwt.php';
include '../../headers.php';

try {
 db ('controlEscolar');

  if($_SERVER['REQUEST_METHOD'] == "POST"){
    
    $alumno_id = $_POST['alumno_id'];
    $id_tipo_materia = $_POST['id_tipo_materia'];
    $asignatura_grupo_id = $_POST['asignatura_grupo_id'];
    $jwt = $_POST['jwt'];
    
    $usuario = Auth::GetData(
        $jwt  
    );

    $num_alumnos = sizeof($alumno_id);
    
    $alumno = "REPLACE INTO inter_alumno_asignatura_grupo(alumno_id, asignatura_grupo_id, fecha_creacion,estatus) VALUES ";
    for($i = 0; $i < $num_alumnos; $i++){
        $alumno .=  '('.$alumno_id[$i].','.$asignatura_grupo_id.',now(),1),';
    }
    $alumno = trim($alumno, ',');
    $inserta=query($alumno);
        
    
    $materia = "REPLACE INTO ".$GLOBALS['db_learning'].".tr_materia(alumno_id, asignatura_grupo_id, estatus_materia_id,tipo_materia_id,usuario_creacion,estatus) VALUES ";
    for($i = 0; $i < $num_alumnos; $i++){
        $materia .=  '('.$alumno_id[$i].','.$asignatura_grupo_id.',1,'.$id_tipo_materia.',"'.$usuario->usuario.'",1),';
    }
    $materia = trim($materia, ',');
    $inserta=query($materia);
        


        if($inserta){
              $json = array("status" => 1, "msg" => "Alumnos guardados correctamente");
        }else{ 
            $json = array("status" => 1, "msg" => "No se insertaron alumno");
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

