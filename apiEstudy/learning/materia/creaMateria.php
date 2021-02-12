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

        $inserta = inserta('tr_materia','alumno_id, asignatura_id, grupo_id, estatus_materia_id,
        fecha_creacion,usuario_creacion, estatus',
        ''.$id_alumno.', '.$id_asignatura.', '.$id_grupo.', '.$id_estatus_materia.', 
        now(),"'.$usuario->usuario.'",1');

        
       //ingreso todas las escuelas que tiene este profesor       
       if($inserta){
        $json = array("status" => 1, "msg" => "Se insertó el materia correctamente");
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