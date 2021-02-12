<?php
include '../../jwt.php';
include '../../headers.php';
// include '../../admin/personas/class/persona.class.php';
 

try {

  db('controlEscolar');

  if($_SERVER['REQUEST_METHOD'] == "POST"){
    foreach($_POST as $clave => $valor){
      ${$clave} = escape_cara($valor);
    }
    
      $usuario = Auth::GetData(
            $jwt  
        );       

        $arreglo_asignatura_grupo = arreglo(query('select asignatura_grupo_id from '.$GLOBALS['db_learning'].'.tr_materia where asignatura_grupo_id= '.$asignatura_grupo_id.' and alumno_id = '.$alumno_id));
        if(!empty($arreglo_asignatura_grupo)){

          $update_materia  = update($GLOBALS['db_learning'].'.tr_materia','estatus=1','asignatura_grupo_id='.$arreglo_asignatura_grupo['asignatura_grupo_id'].' and alumno_id = '.$alumno_id);

          if($update_materia){
            $query_alumno_asignatura_grupo = query('select alumno_id, asignatura_grupo_id  from inter_alumno_asignatura_grupo where asignatura_grupo_id = '.$asignatura_grupo_id.' and alumno_id = '.$alumno_id);            
            if(num($query_alumno_asignatura_grupo)){
              $arreglo_alumno_asignatura_grupo=arreglo($query_alumno_asignatura_grupo);
              $update_materia  = update($GLOBALS['db_controlEscolar'].'.inter_alumno_asignatura_grupo','estatus=1','asignatura_grupo_id='.$arreglo_alumno_asignatura_grupo['asignatura_grupo_id'].' and  alumno_id ='.$arreglo_alumno_asignatura_grupo['alumno_id']);
            }
          }

          if($update_materia){
            $json = array("status" => 1, "msg" => "Se insertó la asignatura correctamente");
          }else{
            $json = array("status" => 1, "msg" => "Se insertó la asignatura correctamente");
          }

        }else{
        $materia = inserta(''.$GLOBALS["db_learning"].'.tr_materia',
        'alumno_id,
         asignatura_grupo_id,
         tipo_materia_id,
         estatus_materia_id,
         usuario_creacion,
         fecha_creacion, 
         fecha_actualiza,
         estatus',
         '"' . $alumno_id . '",
         ' . $asignatura_grupo_id . ',
         "4",
         "1",
         "'.$usuario->usuario.'",
         now(),
         now(),
         1');
        if ($materia) {
            $interMateria = inserta(''.$GLOBALS["db_controlEscolar"].'.inter_alumno_asignatura_grupo',
            'alumno_id,
            asignatura_grupo_id,
            fecha_creacion,
            fecha_actualiza,
            estatus ',
            '"' . $alumno_id . '",
            ' . $asignatura_grupo_id . ',
            now(),
            now(),1');
        }
        
      if($materia && $interMateria){
        $json = array("status" => 1, "msg" => "Se insertó la asignatura correctamente");
      }else{
        $json = $materia;
      }
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


