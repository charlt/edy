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
    $query_rol = query('SELECT * FROM cat_rol WHERE rol_id = '.$id_rol);

    
       $json_rol= array();
       while ($arreglo_rol = arreglo($query_rol)){
          array_push($json_rol,$arreglo_rol);
       }
       
       //ingreso todas las escuelas que tiene este profesor
       
       if(num($query_rol)){
        $json = array("status" => 1, "msg" => "Se encontraron los roles","roles" => $json_rol);
       }else{
        $json = array("status" => 0, "msg" => "No se encontraron los roles");
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