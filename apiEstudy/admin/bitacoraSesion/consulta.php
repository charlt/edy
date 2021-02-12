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
    $query_bitacora_sesion = query('SELECT * FROM tr_bitacora_sesion ');

    
       $json_bitacora_sesion= array();
       while ($arreglo_bitacora_sesion = arreglo($query_bitacora_sesion)){
          array_push($json_bitacora_sesion,$arreglo_bitacora_sesion);
       }
       
       //ingreso todas las escuelas que tiene este profesor
       
       if(num($query_bitacora_sesion)){
        $json = array("status" => 1, "msg" => "Se encontraron las sesiones","sesiones" => $json_bitacora_sesion);
       }else{
        $json = array("status" => 0, "msg" => "No se encontraron las sesiones");
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