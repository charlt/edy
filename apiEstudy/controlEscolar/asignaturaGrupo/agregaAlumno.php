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


        $consulta_alumno=query('SELECT alumno_id, gai.grupo_id, asignatura_grupo_id, orden_asignatura_id from inter_alumno_grupo gai 
        join inter_asignatura_grupo gpi on gpi.grupo_id = gai.grupo_id
        where alumno_id='.$id_alumno.' and asignatura_grupo_id='.$id_asignatura_grupo.' and gai.estatus = 1');
        $arreglo_alumno= arreglo($consulta_alumno);
        // print_r($arreglo_alumno);

        if(isset($arreglo_alumno['alumno_id']) && isset($arreglo_alumno['grupo_id'])){
          $json = array("status" => 0, "msg" => "Este alumno se encuentra en el grupo, no se puede agregar a la asignatura");
        }else{
          

        $consulta_aag = query('SELECT alumno_id, iaa.asignatura_grupo_id, grupo_id, asignatura_id 
        from inter_alumno_asignatura_grupo iaa
        join inter_asignatura_grupo iag on iag.asignatura_grupo_id= iaa.asignatura_grupo_id
                join '.$GLOBALS["db_datosGenerales"].'.inter_orden_asignatura ioa on ioa.orden_asignatura_id = iag.orden_asignatura_id
                 where alumno_id='.$id_alumno.' and iaa.asignatura_grupo_id ='.$id_asignatura_grupo);

        $arreglo=arreglo($consulta_aag);

        if(num($consulta_aag)){
          $edita_alumno = update('inter_alumno_asignatura_grupo', 'estatus=1' , 'alumno_id='.$id_alumno.' 
        and asignatura_grupo_id = '.$id_asignatura_grupo);

          $edita_materia = update($GLOBALS["db_learning"].'.tr_materia', 'tipo_materia_id = '.$id_tipo_materia.',usuario_actualiza="'.$usuario->usuario.'",estatus=1', 'alumno_id='.$id_alumno.'
           and asignatura_grupo_id ='.$id_asignatura_grupo);

           if($edita_materia){
            $json = array("status" => 1, "msg" => "Se insertó alumno a materia correctamente");
           }else{
            $json = array("status" => 0, "msg" => "No se insertó alumno");
           }

        }else{

          $inserta=inserta('inter_alumno_asignatura_grupo','alumno_id,asignatura_grupo_id, fecha_creacion, estatus',
          ''.$id_alumno.','.$id_asignatura_grupo.', now(), 1');

          $inserta2 = inserta($GLOBALS["db_learning"].'.tr_materia',
         'alumno_id, asignatura_grupo_id,tipo_materia_id,estatus_materia_id,usuario_creacion, estatus',
         ''.$id_alumno.', '.$id_asignatura_grupo.' ,'.$id_tipo_materia.',1,"'.$usuario->usuario.'",1');
  
         if($inserta2){
          $json = array("status" => 1, "msg" => "Se insertó alumno a materia correctamente");
         }else{
          $json = array("status" => 0, "msg" => "No se insertó alumno");
         }
        }
        
      }

      

       //ingreso todas las escuelas que tiene este profesor
       
       

  }else{
  	$json = array("status" => 0, "msg" => "Método no aceptado");
  }

  /* Output header */

  echo json_encode($json);

} catch (Exception $e) {
    $json = array("status" => 0, "msg" =>  $e->getMessage());

    echo json_encode($json);
}