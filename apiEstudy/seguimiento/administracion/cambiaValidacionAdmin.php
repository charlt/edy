<?php
include '../../jwt.php';
include '../../headers.php';
include '../class/aspirante.class.php';

try {
  
  db('seguimiento');

  $aspirante=new Aspirante();

  if($_SERVER['REQUEST_METHOD'] == "GET"){
    foreach($_GET as $clave => $valor){
      ${$clave} = escape_cara($valor);
    }
    
    $usuario = Auth::GetData(
        $jwt  
    );

    if($validador == 1){
      $update=query('UPDATE tr_aspirante set paso = 3,validado_administrador = '.$validador.' where aspirante_id = '.$persona_id.'');
    }else{
      $consulta = arreglo(query('SELECT * from tr_aspirante where aspirante_id='.$persona_id));
      if($consulta['aceptacion_terminos'] == 1){
        $update=query('UPDATE tr_aspirante set paso = 2, validado_administrador = '.$validador.' where aspirante_id = '.$persona_id.'');
      }else{
        $update=query('UPDATE tr_aspirante set paso = 1, validado_administrador = '.$validador.' where aspirante_id = '.$persona_id.'');
      }
    }



    if($update){
      $json = array("status" => 1, "msg" => "Se cambio la validación correctamente");
     }else{
      $json = array("status" => 0, "msg" => "No se logro cambiar la validación");
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
