<?php
include '../../jwt.php';
include '../../headers.php';

try {

  db ('datosGenerales');


  if($_SERVER['REQUEST_METHOD'] == "GET"){
    foreach($_GET as $clave => $valor){
      ${$clave} = escape_cara($valor);
    }
     

      $usuario = Auth::GetData(
            $jwt  
        );

    //SERVICIO DE CONSULTA DE SESIÓN
    $query_carreras = query('SELECT cpe.plan_estudio_id, plan_estudio_clave, plan_estudio, cpe.estatus
    FROM tr_plan_estudios cpe
    WHERE cpe.carrera_id = '.$id_carrera.' and cpe.estatus =1 ');
    /*'.$usuario->id_institucion);*/

    
       $json_carreras = array();
       while ($arreglo_carreras = arreglo($query_carreras)){
          array_push($json_carreras,$arreglo_carreras);
       }
       
       //ingreso todas las escuelas que tiene este profesor
       
       if(num($query_carreras)){
    		$json = array("status" => 1, "msg" => "Se encontraron plan de estudios","plan" => $json_carreras);
    	 }else{
    		$json = array("status" => 0, "msg" => "No se encontraron plan de estudios");
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
