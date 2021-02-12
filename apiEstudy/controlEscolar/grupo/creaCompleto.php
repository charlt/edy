<?php
include '../../jwt.php';
include '../../headers.php';
include '../class/grupo.class.php';

try {

  db('controlEscolar');
  
  $Grupo = new Grupo();

  if($_SERVER['REQUEST_METHOD'] == "POST"){

     if(isset($_POST["alumno_id"]))
      $arreglo_alumno =$_POST["alumno_id"];
    else
      $arreglo_alumno = array();

    if(isset($_POST["orden_asignatura_id"]))
      $arreglo_asignaturas =$_POST["orden_asignatura_id"];
    else
      $arreglo_asignaturas = array();

    $id_ciclo = $_POST["id_ciclo"];
    $id_campus = $_POST["id_campus"];
    $grupo = $_POST["grupo"];
    $jwt = $_POST["jwt"];
    $nombre_grupo = $_POST["nombre_grupo"];
    $descripcion = $_POST["descripcion"];
    $cupo = $_POST["cupo"];
    $id_plan_orden = $_POST["id_plan_orden"];

    $arreglo_asignatura_grupo = array();


    $usuario = Auth::GetData(
            $jwt  
        );
         
        $crea_grupo=$Grupo::inserta_grupo($id_ciclo,$grupo, $nombre_grupo,1,$id_plan_orden, $descripcion, $cupo,$id_campus,null,$usuario->usuario);
        if($crea_grupo){

          foreach($arreglo_alumno as $id_alumno){
            $inserta_alumnos = inserta('inter_alumno_grupo','alumno_id, grupo_id, estatus',''.$id_alumno.','.$crea_grupo.',1');
          }

          foreach($arreglo_asignaturas as $id_orden_asignatura){
            $id_asignatura_grupo = inserta_last_id ('inter_asignatura_grupo','orden_asignatura_id, grupo_id,situacion_asignatura_grupo_id, usuario_crea,estatus',''.$id_orden_asignatura.','.$crea_grupo.',1,"'.$usuario->usuario.'",1');
            array_push($arreglo_asignatura_grupo,$id_asignatura_grupo);
          }

      
        
          $scrip_materia = "REPLACE INTO ".$GLOBALS["db_learning"].".tr_materia (materia_id, alumno_id, asignatura_grupo_id, estatus_materia_id,tipo_materia_id,usuario_actualiza,estatus)
          VALUES";


       foreach($arreglo_alumno as $id_alumno){

        foreach($arreglo_asignatura_grupo as $id_asignatura_grupo){
          $query_materia= query('SELECT materia_id from '.$GLOBALS["db_learning"].'.tr_materia 
          where alumno_id='.$id_alumno.' and asignatura_grupo_id='.$id_asignatura_grupo);
          $arreglo_materia = arreglo($query_materia);

          if(num($query_materia)){
            $id_materia=$arreglo_materia['materia_id'];
          }else{
            $id_materia=0;
          }
  
          $scrip_materia .='('.$id_materia.','.$id_alumno.','.$id_asignatura_grupo.',1,1,"'.$usuario->usuario.'",1),';
        }
        
      }

      
      query("update  inter_alumno_grupo iag 
      join tr_grupo tg on tg.grupo_id = iag.grupo_id
      join inter_alumno_plan iap on iap.alumno_id =iag.alumno_id  and iap.plan_orden_id = tg.plan_orden_id
      set asignado_grupo = 1 where  tg.grupo_id =".$crea_grupo);

      
      $scrip_materia = trim($scrip_materia, ',');

      if(sizeof($arreglo_alumno) && sizeof($arreglo_asignaturas))
        $inserta_al=query($scrip_materia);
    
        }




        if($crea_grupo){
    		$json = array("status" => 1, "msg" => "Se creo grupo correctamente");
    	 }else{
    		$json = array("status" => 0, "msg" => "No se logró crear");
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