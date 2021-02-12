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

        $edita = update('tr_rubrica',
        'estatus = 0',
         'rubrica_id = '.$id_rubrica);

          
    if ($edita) {
      $json = array("estatus" => 1, "msg" => "Se eliminó rubrica correctamente");
    } else {
      $json = array("estatus" =>0, "msg" => "No se logro eliminar");
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