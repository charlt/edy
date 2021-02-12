<?php
include '../../jwt.php';
include '../../headers.php';

db('datosGenerales');

try {
  if($_SERVER['REQUEST_METHOD'] == "POST"){
    foreach($_POST as $clave => $valor){
      ${$clave} = escape_cara($valor);
    }
    
      $usuario = Auth::GetData(
            $jwt  
        );


        $elimina = query('update inter_persona_usuario_rol set estatus=0 where persona_id='.$id_persona.' and usuario_id='.$id_usuario.' and rol_id='.$id_rol.'');

         switch ($id_rol) {
          case 2:
            $elimina = query('update '.$GLOBALS['db_controlEscolar'].'.tr_alumno set estatus=0 where alumno_id='.$id_persona.'');               
          break;        
          
          case 3:            
            $elimina = query('update '.$GLOBALS['db_controlEscolar'].'.tr_docente set estatus=0 where docente_id='.$id_persona.'');               
          break;
  
          case 4:            
            $elimina = query('update '.$GLOBALS['db_seguimiento'].'.tr_aspirante set estatus=0 where aspirante_id='.$id_persona.'');               
          break;

          default;
        }

       
       //ingreso todas las escuelas que tiene este profesor
       
       if($elimina){
        $json = array("status" => 1, "msg" => "Se eliminó el rol correctamente");
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