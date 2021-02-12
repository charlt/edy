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

        $edita = update('tr_cc_pregunta',
        'estatus = 0',
         'pregunta_id = '.$id_pregunta);

          
    if ($edita) {
      $json = array("estatus" => 1, "msg" => "Se actualizo el cuadro comparativo correctamente");
    } else {
      $json = array("estatus" =>0, "msg" => "No se logro modificar");
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