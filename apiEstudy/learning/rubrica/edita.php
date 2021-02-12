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

        $edita = update('tr_rubrica',
        'desc_rubrica = "'.$descripcion_rubrica.'",
         numero_elementos = '.$numero_elementos.',
         numero_categorias = '.$numero_categorias.',
         actividad_id = '.$id_actividad.',
         fecha_actualiza = now()',
         'rubrica_id = '.$id_rubrica);

          
    if ($edita) {
      $json = array("estatus" => 1, "msg" => "Se actualizo rubrica correctamente");
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