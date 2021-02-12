<?php
include '../../jwt.php';
include '../../headers.php';

try {
  
  db ('controlEscolar');

  if($_SERVER['REQUEST_METHOD'] == "POST"){
    foreach($_POST as $clave => $valor){
      ${$clave} = escape_cara($valor);
    }

      $usuario = Auth::GetData(
            $jwt  
        );


        $query = query('SELECT asignatura_grupo_id  from inter_asignatura_grupo where orden_asignatura_id = '.$id_orden_asignatura.'
         and grupo_id = '.$id_grupo);
        
        $arreglo = arreglo($query);
           if(num($query)){
          $edita=update('inter_asignatura_grupo', 
          'estatus = 1,usuario_actualiza="'.$usuario->usuario.'"',
          'asignatura_grupo_id ='.$arreglo['asignatura_grupo_id'].' and grupo_id ='.$id_grupo);
          $id_asignatura_grupo = $arreglo['asignatura_grupo_id'];
        }else{
          $inserta = inserta_last_id('inter_asignatura_grupo','orden_asignatura_id,grupo_id,situacion_asignatura_grupo_id,usuario_crea, estatus',
          ''.$id_orden_asignatura.', '.$id_grupo.',1,"'.$usuario->usuario.'", 1');
          $id_asignatura_grupo = $inserta;
         }
         

         $query_materias=query('SELECT materia_id,alumno_id,tipo_materia_id from '.$GLOBALS['db_learning'].'.tr_materia where asignatura_grupo_id='.$id_asignatura_grupo);
         if(num($query_materias)){
          while($arreglo_materias =arreglo($query_materias)){
            if($arreglo_materias['tipo_materia_id']==1 && $arreglo_materias['tipo_materia_id']!=""){
              $query_inter_alumno_grupo=query('SELECT alumno_id from inter_alumno_grupo where estatus=1 and alumno_id='.$arreglo_materias['alumno_id']);
              if(num($query_inter_alumno_grupo)){
                $actualiza_materia = update($GLOBALS['db_learning'].'.tr_materia',
                'usuario_actualiza = "'.$usuario->usuario.'",
                 estatus =1',
                'materia_id ='.$arreglo_materias['materia_id']);
              }
            }else{
              $query_alumno_asignatura_grupo = query('select alumno_id, asignatura_grupo_id  from inter_alumno_asignatura_grupo where estatus=1 and alumno_id = '.$arreglo_materias['alumno_id'].'');            
              if(num($query_alumno_asignatura_grupo)){
                while($arreglo_alumno_asignatura_grupo = arreglo($query_alumno_asignatura_grupo)){
                  $edita=update($GLOBALS["db_learning"].'.tr_materia', 
                  'estatus = 1',
                  'asignatura_grupo_id ='.$arreglo_alumno_asignatura_grupo['asignatura_grupo_id'].' and alumno_id ='.$arreglo_alumno_asignatura_grupo['alumno_id']);    
                }
               }  
            }
          } 
         }else{
          $query_alumno_grupo=query('SELECT alumno_id from inter_alumno_grupo where estatus=1 and grupo_id='.$id_grupo);
          if(num($query_alumno_grupo)){
           while($arreglo_alumno_grupo = arreglo($query_alumno_grupo)){
            $inserta_alumnos = inserta ($GLOBALS["db_learning"].'.tr_materia','alumno_id,asignatura_grupo_id,estatus_materia_id,usuario_creacion,estatus',
            ''.$arreglo_alumno_grupo['alumno_id'].','.$id_asignatura_grupo.',1,"'.$usuario->usuario.'",1');  
           }
          }
        }


    //      $query_alumno_asignatura_grupo = query('select alumno_id, asignatura_grupo_id  from inter_alumno_asignatura_grupo where asignatura_grupo_id = '.$id_asignatura_grupo.'');            
    //      if(num($query_alumno_asignatura_grupo)){
    //       while($arreglo_alumno_asignatura_grupo = arreglo($query_alumno_asignatura_grupo)){
    //         $edita=update($GLOBALS["db_learning"].'.tr_materia', 
    //         'estatus = 1',
    //         'asignatura_grupo_id ='.$arreglo_alumno_asignatura_grupo['asignatura_grupo_id'].' and alumno_id ='.$arreglo_alumno_asignatura_grupo['alumno_id']);    
    //       }
    //      }
    //   $query_alumnos=query('SELECT alumno_id from inter_alumno_grupo where estatus=1 and grupo_id='.$id_grupo);
    //   if(num($query_alumnos)){
    //   // $alumnos = "REPLACE INTO ".$GLOBALS["db_learning"].".tr_materia (materia_id, alumno_id, asignatura_grupo_id, estatus_materia_id, usuario_actualiza,estatus)
    //   //  VALUES";
    //   while($arreglo_alumnos = arreglo($query_alumnos)){
    //   $query_materia= query('SELECT materia_id from '.$GLOBALS["db_learning"].'.tr_materia 
    //   where alumno_id='.$arreglo_alumnos['alumno_id'].' and asignatura_grupo_id='.$id_asignatura_grupo);
    //   $arreglo_materia = arreglo($query_materia);
    //   if(num($query_materia)){
    //     // $id_materia=$arreglo_materia['materia_id'];
    //     $remplaza_materia = update($GLOBALS['db_learning'].'.tr_materia',
    //     'materia_id = '.$arreglo_materia['materia_id'].',
    //      alumno_id = '.$arreglo_alumnos['alumno_id'].',
    //      asignatura_grupo_id = '.$id_asignatura_grupo.',
    //      estatus_materia_id = 1,
    //      usuario_actualiza = "'.$usuario->usuario.'",
    //      estatus =1',
    //     'materia_id ='.$arreglo_materia['materia_id']);
    //   }else{
    //     $inserta_alumnos = inserta ($GLOBALS["db_learning"].'.tr_materia','alumno_id,asignatura_grupo_id,estatus_materia_id,usuario_creacion,estatus',
    //     ''.$arreglo_alumnos['alumno_id'].','.$id_asignatura_grupo.',1,"'.$usuario->usuario.'",1');
    //   }
    //   // $alumnos .='('.$id_materia.','.$arreglo_alumnos['alumno_id'].','.$id_asignatura_grupo.',1,"nada",1),';
    //   }

    //   // $alumnos = trim($alumnos, ',');

    //   // $inserta_al=query($alumnos);
    
      
    // }
       if($id_asignatura_grupo){
    		$json = array("status" => 1, "msg" => "Se insertó asignatura en grupo correctamente");
    	 }else{
    		$json = array("status" => 0, "msg" => "No se pudo insertar asignatura");
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