<?php
include '../../jwt.php';
include '../../headers.php';

try {

  db('controlEscolar');

  if($_SERVER['REQUEST_METHOD'] == "POST"){
    foreach($_POST as $clave => $valor){
      ${$clave} = escape_cara($valor);
    }
    
      $usuario = Auth::GetData(
            $jwt  
        );
         
        //grupo es una cadena no un número
        //cuando se edita un registro sólo cambia fecha_actualiza no fecha_creación
        //estatus no es necesario editar, se omite
        if(empty($id_campus)){
          $script_campus = "campus_id = null,";
        }else{
          $script_campus = "campus_id = ".$id_campus.',';
        }

        $edita = update('tr_grupo', 
        'grupo = "'.$grupo.'", 
        nombre_grupo = "'.$nombre_grupo.'",
        descripcion = "'.$descripcion.'",
        cupo = '.$cupo.',
        ciclo_id = '.$id_ciclo.',      
        situacion_grupo_id = 1,
        '.$script_campus.'
        fecha_actualiza = now(),
        usuario_actualiza = "'.$usuario->usuario.'"',
        'grupo_id = '.$id_grupo);


       
       //ingreso todas las escuelas que tiene este profesor
       
       if($edita){
    		$json = array("status" => 1, "msg" => "Se actualizó el grupo correctamente");
    	 }else{
    		$json = array("status" => 0, "msg" => "No se logró actualizar");
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
