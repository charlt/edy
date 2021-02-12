<?php
include '../../jwt.php';
include '../../headers.php';

try {
  
  db('datosGenerales');


  if($_SERVER['REQUEST_METHOD'] == "GET"){
    foreach($_GET as $clave => $valor){
      ${$clave} = escape_cara($valor);
    }

        $arreglo_alumno = arreglo(query('SELECT u.usuario,u.password,p.persona_id, nombre, primer_apellido, segundo_apellido, curp, rfc, fecha_nacimiento,
        p.email, sexo_id, otros_datos_id,celular FROM personas p
        join '.$GLOBALS['db_controlEscolar'].'.tr_alumno ta on p.persona_id = ta.alumno_id
        join inter_persona_usuario_rol ipur on ipur.persona_id = p.persona_id 
        join usuarios u on u.usuario_id = ipur.usuario_id
        WHERE clave_alumno = "'.$clave_alumno.'" and p.estatus=1'));

       
       if($arreglo_alumno['persona_id']){
         if($arreglo_alumno['usuario'] == $arreglo_alumno['password'])
            $usuario_actualizado = 0;
          else
            $usuario_actualizado = 1;
        
       $json = array("status" => 1, "msg" => "Se encontró el alumno","alumno" => $arreglo_alumno,"usuarioActualizado" => $usuario_actualizado,"usuario"=>$arreglo_alumno['usuario']);
        
    	 }else{
    		$json = array("status" => 0, "msg" => "No se encontró alumno");
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
