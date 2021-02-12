<?php
include '../../jwt.php';
include '../../headers.php';

try {

  db('learning');


  if($_SERVER['REQUEST_METHOD'] == "POST"){
    foreach($_POST as $clave => $valor){
      ${$clave} = escape_cara($valor);
    }
    
      $usuario = Auth::GetData(
            $jwt  
        );
        

        $inserta_modulo = inserta_last_id('cat_modulos','modulo_numero, modulo_nombre, fecha_creacion, usuario_crea, estatus',
        ''.$modulo_numero.',"'.$modulo_nombre.'", now() ,current_user(),1');
        
       if($inserta_modulo){

   
        
        if($tipo_consulta == 1 || $tipo_consulta == 2){

          $inserta_asignatura = inserta ('inter_modulos_asignaturas',
          'modulo_id, asignatura_id,estatus',
          ''.$inserta_modulo.', '.$id_asignatura.',1');

        }else{

          $inserta_asignatura = inserta ('inter_modulos_asignatura_grupo',
          'modulo_id, asignatura_grupo_id,estatus',
          ''.$inserta_modulo.', '.$id_asignatura.',1');

        }
        if($promedio_modulo == 1){
          $inserta_actividad = inserta_last_id('tr_actividad','modulo_id,tipo_actividad_id,actividad_nombre,dificultad_id,orden,unica,ponderacion,visible,usuario_crea,estatus'
        ,$inserta_modulo.',5,"Calificación '.$modulo_nombre.'",1,99,0,'.$porcentaje.',0,"'.$usuario->usuario.'",1');  
        }
         



        if($inserta_asignatura){
          $json = array("status" => 1, "msg" => "Se insertó el Bloque correctamente");
         }else{
          delete('modulos','modulo_id = '.$inserta_modulo);
          $json = array("status" => 0, "msg" => "No se logró vincular el Bloque con la asignatura");
         }

        }else{
          $json = array("status" => 0, "msg" => "No se logró insertar el Bloque");
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