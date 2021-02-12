<?php
include '../../jwt.php';
include '../../headers.php';

try {

  db ('learning');



  if($_SERVER['REQUEST_METHOD'] == "POST"){
    foreach($_POST as $clave => $valor){
      ${$clave} = escape_cara($valor);
    }
    
      $usuario = Auth::GetData(
            $jwt  
        );

        
          $edita = update('tr_om_reactivos',
          'reactivo  = "'.$reactivo.'",
           ponderacion ='.$ponderacion.',
           retroalimentacion="'.$retroalimentacion.'", 
           fecha_actualiza=now()',
          'reactivo_id = '.$id_reactivo);

          if($edita){
            $json = array("status" => 1, "msg" => "Se editó reactivo correctamnete");
           }else{
            $json = array("status" => 0, "msg" => "No se logró editar");
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