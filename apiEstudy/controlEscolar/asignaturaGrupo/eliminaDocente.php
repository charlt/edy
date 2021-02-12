<?php
include '../../jwt.php';
include '../../headers.php';

try {
  
  db ('controlEscolar');

  if($_SERVER['REQUEST_METHOD'] == "POST"){
    foreach($_POST as $clave => $valor){
      ${$clave} = escape_cara($valor);
    }

      $usuario = Auth::GetData(
            $jwt  
        );

        $elimina=update('inter_docente_asignatura_grupo','estatus=0',
        'docente_id='.$id_docente.' and asignatura_grupo_id = '.$id_asignatura_grupo);

       //ingreso todas las escuelas que tiene este profesor
       
       if($elimina){
        $json = array("status" => 1, "msg" => "Se elimino docente correctamente");
     }else{
        $json = array("status" => 0, "msg" => "No se elimino docente");
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