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
     $query_cat_carreras = query('SELECT carrera_id, institucion_id, nivel_estudios_id, carrera_clave, carrera
     FROM tr_carrera WHERE carrera_id = '.$id_carrera.' and institucion_id = '.$usuario->id_institucion);

    
       $json_cat_carreras = array();
       while ($arreglo_cat_carreras = arreglo($query_cat_carreras)){
          array_push($json_cat_carreras,$arreglo_cat_carreras);
       }
       
       //ingreso todas las escuelas que tiene este profesor
       
       if(num($query_cat_carreras)){
    		$json = array("status" => 1, "msg" => "Se encontró las carreras","carreras" => $json_cat_carreras);
    	 }else{
    		$json = array("status" => 0, "msg" => "No se encontraron las carreras");
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
