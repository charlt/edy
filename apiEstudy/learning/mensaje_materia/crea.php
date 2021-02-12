<?php
include '../../jwt.php';
include '../../headers.php';

try {

  db('learning');

  if($_SERVER['REQUEST_METHOD'] == "POST"){
    foreach($_POST as $clave => $valor){
      ${$clave} = escape_cara($valor);
    }
    
      $usuario = Auth::GetData(
            $jwt  
        );

        if ($origen == 2) {
          $origen_consulta = 3;
        } elseif ($origen == 3) {
          $origen_consulta = 2;
        }
        
        $cambio = query('UPDATE tr_mensaje_materia tr
        set visto = 1
        where visto = 0 and origen = ' . $origen_consulta . ' and tr.materia_id=' . $materia_id);
         
        $inserta = inserta('tr_mensaje_materia', 'persona_id, materia_id, texto, origen, fecha_creacion, estatus',
        ''.$persona_id.','.$materia_id.',"'.$texto.'",'.$origen.',now(), 1');

       if($inserta){
    		$json = array("status" => 1, "msg" => "Enviado");
    	 }else{
    		$json = array("status" => 0, "msg" => "No se envio");
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