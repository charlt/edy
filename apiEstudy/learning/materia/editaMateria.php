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

        $edita = update('tr_materia',
        'alumno_id ='.$id_alumno.' ,
        asignatura_id = '.$id_asignatura.',
        grupo_id = '.$id_grupo.',
        estatus_materia_id = '.$id_estatus_materia.',
        usuario_actualiza = "'.$usuario->usuario.'",
        fecha_actualiza = now()', 
        'materia_id = '.$id_materia);

        
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