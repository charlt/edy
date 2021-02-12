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
        
        $edita = update('cat_privilegios',
        'privilegio_padre_id = '.$id_privilegio_padre,   
         'privilegio_id = '.$id_privilegio);
       
       //ingreso todas las escuelas que tiene este profesor
       
       if($edita){
        $json = array("status" => 1, "msg" => "Se actualizo el privilegio correctamente");
       }else{
        $json = array("status" => 0, "msg" => "No se logró insertar");
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