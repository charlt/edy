<?php
include '../../jwt.php';
include '../../headers.php';

try {

  db('datosGenerales');

  if($_SERVER['REQUEST_METHOD'] == "POST"){
    foreach($_POST as $clave => $valor){
      ${$clave} = escape_cara($valor);
    }
    
    $usuario = Auth::GetData(
        $jwt  
    );
         
    $update_usuario = update('usuarios', 'usuario = "'.$nombre_usuario.'"', 'usuario_id = '.$id_usuario);
    //ingreso todas las escuelas que tiene este profesor      
             
    if($update_usuario){
        $json = array("status" => 1, "msg" => "Se actualizó el usuario correctamente");
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
