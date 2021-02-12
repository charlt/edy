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

    if ($tipoBusqueda == 1) { //1 usuario 2 correo
        $query_usuarios = query('SELECT usuario FROM usuarios WHERE estatus = 1 and usuario LIKE "'.$busqueda.'%"');
    } elseif ($tipoBusqueda == 2) {
        $query_usuarios = query('SELECT email FROM personas WHERE estatus = 1 and email LIKE "'.$busqueda.'%"');
    }
    
    
    $json_usuario = array();
    while ($arreglo_usuario = arreglo($query_usuarios)){
        array_push($json_usuario,$arreglo_usuario);
    }
    
    if(num($query_usuarios)){
    $json = array("status" => 1, "msg" => "Se encontró coincidencia","coincidencia" => $json_usuario);
    }else{
    $json = array("status" => 0, "msg" => "No se encontró coincidencia");
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
