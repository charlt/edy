<?php
include '../../jwt.php';
include '../../headers.php';

try {
  
  db ('learning');

  if($_SERVER['REQUEST_METHOD'] == "GET"){
    foreach($_GET as $clave => $valor){
      ${$clave} = escape_cara($valor);
    }

      $usuario = Auth::GetData(
            $jwt  
        );

        $edita = update('tr_materia','estatus = 0,usuario_actualiza = "'.$usuario->usuario.'"', 'materia_id = '.$id_materia);

        
       //ingreso todas las escuelas que tiene este profesor       
       if($edita){
        $json = array("status" => 1, "msg" => "Se modifico la materia correctamente");
       }else{
        $json = array("status" => 0, "msg" => "No se logró modificar");
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