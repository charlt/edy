<?php
include '../../jwt.php';
include '../../headers.php';

try {

  db ('learning');

  if($_SERVER['REQUEST_METHOD'] == "GET"){
    foreach($_GET as $clave => $valor){
      ${$clave} = escape_cara($valor);
    }
    
    // if(isset($id_plan_estudios))
    //   $cond_plan_estudios = ' and plan_estudio_id = '.$id_plan_estudios;
    // else
    //   $cond_plan_estudios = '';
    

      $usuario = Auth::GetData(
            $jwt  
        );

    $query = query('SELECT a.alumno_id, situacion_alumno_id, clave_alumno, cedula_profesional,
    nombre, primer_apellido, segundo_apellido, curp, rfc, fecha_nacimiento, email, sexo_id, otros_datos_id
    FROM '.$GLOBALS["db_controlEscolar"].'.tr_alumno a
    join '.$GLOBALS["db_datosGenerales"].'.personas p on alumno_id = persona_id 
    join tr_materia tm ON tm.alumno_id = a.alumno_id
    WHERE materia_id = '.$id_materia);

       $arreglo = arreglo($query);
       
       //ingreso todas las escuelas que tiene este profesor
       
       if(num($query)){
    		$json = array("status" => 1, "msg" => "Se encontró el alumno","alumno" => $arreglo);
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
