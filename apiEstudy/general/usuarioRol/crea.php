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

        $arreglo_persona = arreglo(query('select estatus from inter_persona_usuario_rol 
        where persona_id='.$id_persona.' and usuario_id ='.$id_usuario.' and rol_id ='.$id_rol));
        if(empty($arreglo_persona)){
        $inserta = inserta('inter_persona_usuario_rol','persona_id, usuario_id, rol_id,estatus',
        ''.$id_persona.','.$id_usuario.','.$id_rol.',1');
        
        switch ($id_rol) {
          case 1:
            $inserta_admin = inserta($GLOBALS['db_controlEscolar'].'.tr_administrador','administrador_id, situacion_administrador_id, clave_administrador,vista, edicion,area_id, estatus',
            ''.$id_persona.',1,"'.$clave_usuario.'",1,1,1,1');

          break;        

          case 2:
            $inserta_alumno = inserta($GLOBALS['db_controlEscolar'].'.tr_alumno','alumno_id, situacion_alumno_id, clave_alumno, estatus',
            ''.$id_persona.',1,"'.$clave_usuario.'", 1');
          break;        
          
          case 3:            
            $inserta_docente = inserta($GLOBALS['db_controlEscolar'].'.tr_docente','docente_id, situacion_docente_id, clave_profesor, estatus',
            ''.$id_persona.',1,"'.$clave_usuario.'", 1');
          break;
  
          case 4:            
            $inserta_aspirante = inserta($GLOBALS['db_seguimiento'].'.tr_aspirante',
            'aspirante_id,clave_aspirante,carrera_id,estatus',
            ''.$id_persona.',"'.$clave_usuario.'",null,1,1');
          break;

        }


      }else{

        $inserta = query('update inter_persona_usuario_rol set estatus=1 where persona_id='.$id_persona.' and usuario_id='.$id_usuario.' and rol_id='.$id_rol.'');

        switch ($id_rol) {
          case 1:
            $inserta = query('update '.$GLOBALS['db_controlEscolar'].'.tr_administrador set estatus=1,clave_administrador="'.$clave.'" where administrador_id='.$id_persona.'');               
          break;        
 
         case 2:
           $inserta = query('update '.$GLOBALS['db_controlEscolar'].'.tr_alumno set estatus=1,clave_alumno="'.$clave.'" where alumno_id='.$id_persona.'');               
         break;        
         
         case 3:            
           $inserta = query('update '.$GLOBALS['db_controlEscolar'].'.tr_docente set estatus=1,clave_profesor="'.$clave.'" where docente_id='.$id_persona.'');               
         break;
 
         case 4:            
           $inserta = query('update '.$GLOBALS['db_seguimiento'].'.tr_aspirante set estatus=1,clave_aspirante="'.$clave.'"  where aspirante_id='.$id_persona.'');               
         break;

         default;
       }
      }




       if($inserta){
        $json = array("status" => 1, "msg" => "Se agregó el rol correctamente");
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