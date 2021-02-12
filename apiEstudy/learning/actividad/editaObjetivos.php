<?php
include '../../jwt.php';
include '../../headers.php';

try {
  
  db ('learning');

  if($_SERVER['REQUEST_METHOD'] == "POST"){
    foreach($_POST as $clave => $valor){
      ${$clave} = escape_cara($valor);
    }

      $usuario = Auth::GetData(
            $jwt  
        );


        $query = arreglo(query('SELECT *  from tr_objetivos_actividad 
         where objetivos_actividad_id = '.$id_objetivos_actividad.'
         and actividad_id = '.$id_actividad));
        // print_r($query);
        if(isset($query['objetivos_actividad_id']) && $query['objetivos_actividad_id']!=''){
        
          $id_objetivos_actividad =$query['objetivos_actividad_id'];
          $id_actividad = $query['actividad_id'];
        }else{

         $id_objetivos_actividad=0; 
      }
      
      $alumnos=replace('tr_objetivos_actividad',' objetivos_actividad_id, actividad_id,objetivo_alumno,
       objetivo_docente,fecha_creacion,usuario_crea, estatus',
       ''.$id_objetivos_actividad.','.$id_actividad.', "'.$objetivo_alumno.'", "'.$objetivo_docente.'", now(), current_user(),1');

       if($alumnos){
    		$json = array("status" => 1, "msg" => "Se actualizaron los objetivos correctamente");
    	 }else{
    		$json = array("status" => 0, "msg" => "No se pudieron actualizar");
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