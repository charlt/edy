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
    $query_inter_carrera_campus = query('SELECT  inter.carrera_id, inter.campus_id,
    campus, carrera
    FROM inter_carrera_campus  inter
    join cat_campus on cat_campus.campus_ID = inter.campus_id
    join tr_carrera tc on tc.carrera_id = inter.carrera_id
    WHERE tc.institucion_id = '.$usuario->id_institucion);

    
       $json_inter_carrera_campus = array();
       while ($arreglo_inter_carrera_campus = arreglo($query_inter_carrera_campus)){
          array_push($json_inter_carrera_campus,$arreglo_inter_carrera_campus);
       }
       
       //ingreso todas las escuelas que tiene este profesor
       
       if(num($query_inter_carrera_campus)){
    		$json = array("status" => 1, "msg" => "Se encontró una vinculación","inter" => $json_inter_carrera_campus);
    	 }else{
    		$json = array("status" => 0, "msg" => "No se encontró vinculación");
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
