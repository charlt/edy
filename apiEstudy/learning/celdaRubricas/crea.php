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
        
          $inserta = inserta('tr_rb_respuesta', 'elemento_id,categoria_id, celda, valor, fecha_creacion,
           estatus',''.$id_elemento.','.$id_categoria.',"'.$celda.'",'.$respuesta_valor.', now(),1');

       
       //ingreso todas las carreras que tiene
       
       if($inserta){
    		$json = array("status" => 1, "msg" => "Se insertó la respuesta correctamente");
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
