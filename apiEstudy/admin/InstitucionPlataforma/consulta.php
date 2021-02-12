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
    $query_consulta_imagen = query('SELECT * FROM plataforma_institucion 
    WHERE institucion_id = '.$usuario->id_institucion);

    
       $json_consulta_imagen = array();
       while ($arreglo_consulta_imagen = arreglo($query_consulta_imagen)){
          array_push($json_consulta_imagen,$arreglo_consulta_imagen);
       }
       
       //ingreso todas las escuelas que tiene este profesor
       
       if(num($query_consulta_imagen)){
    		$json = array("status" => 1, "msg" => "Se encontraron estilos","estilos" => $json_consulta_imagen);
    	 }else{
    		$json = array("status" => 0, "msg" => "No se encontraron los estilos");
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
