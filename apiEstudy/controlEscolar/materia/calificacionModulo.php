<?php
include '../../jwt.php';
include '../../headers.php';
include '../class/asignaturagrupo.class.php'; 

try {
  db('learning');
  $grupo = new AsignaturaGrupo();

  if($_SERVER['REQUEST_METHOD'] == "POST"){
 
    
    $jwt=$_POST["jwt"];
    $id_actividad= $_POST["id_actividad"];
    $id_asignatura_grupo= $_POST["id_asignatura_grupo"];
    $id_modulo= $_POST["id_modulo"];
    $arreglo_actividad_id=$_POST["arreglo_actividad_id"];
    $arreglo_ponderacion=$_POST["arreglo_ponderacion"];
    
    $usuario = Auth::GetData(
           $jwt  
       );   

  $modulos_calificados = $grupo::calculaCalificacionModulo($id_asignatura_grupo,$id_modulo,$id_actividad,$arreglo_actividad_id,$arreglo_ponderacion);

  if($modulos_calificados){
    $json = array("status" => 1, "msg" => "Se insertaron calificaciones del Bloque");
    }else{
    $json = array("status" => 0, "msg" => "No se logró insertar calificación");
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
