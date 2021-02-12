<?php
include '../../jwt.php';
include '../../headers.php';

try {

  db('learning');
  
  if($_SERVER['REQUEST_METHOD'] == "GET"){
    foreach($_GET as $clave => $valor){
      ${$clave} = escape_cara($valor);
    }
    
    $usuario = Auth::GetData(
            $jwt 
    );
         
        $elimina = query('update tr_materia 
        set estatus_materia_id = '.$id_estatus.'
        where materia_id = '.$id_materia);
       
       if($elimina){
        $json = array("status" => 1, "msg" => "Se cambió el estatus de la asignatura correctamente");
       }else{
        $json = array("status" => 0, "msg" => "No se logró cambiar el estatus");
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