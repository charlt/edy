<?php
include '../../jwt.php';
include '../../headers.php';

try {
  
  db('datosGenerales');

  if($_SERVER['REQUEST_METHOD'] == "GET"){
    foreach($_GET as $clave => $valor){
      ${$clave} = escape_cara($valor);
    }

      $usuario = Auth::GetData(
            $jwt  
        );

    //SERVICIO DE CONSULTA DE SESIÓN
    $query_asignatura = query('select *
    from cat_asignaturas ca
    where asignatura_id = '.$id_asignatura);

    $arreglo_asignatura = arreglo($query_asignatura);
       
       //ingreso todas las escuelas que tiene este profesor
       
       if(num($query_asignatura)){
    		$json = array("status" => 1, "msg" => "Se encontró el grupo","asignatura" => $arreglo_asignatura);
    	 }else{
    		$json = array("status" => 0, "msg" => "No se encontró grupo");
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
