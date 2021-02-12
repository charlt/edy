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

        $edita = update('tr_cc_pregunta',
        'datos_pregunta_id = '.$id_datos_pregunta.',
         cuadro_comparativo_desc = "'.$cuadro_comparativo_desc.'",
         numero_elementos = '.$numero_elementos.',
         numero_categorias = '.$numero_categorias.',
         fecha_actualiza = now()',
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