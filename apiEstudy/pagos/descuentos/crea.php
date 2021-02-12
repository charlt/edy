<?php
include '../../jwt.php';
include '../../headers.php';

try {

  db ('pagos');

  if($_SERVER['REQUEST_METHOD'] == "POST"){
    foreach($_POST as $_clave => $_valor){
      ${$_clave} = escape_cara($_valor);
    }
    
      // $usuario = Auth::GetData( 
      //       $jwt  
      //   );

        $inserta = inserta('cat_descuento', 'clave, descripcion, fecha_inicio, fecha_fin, estatus_descuento_id, descuento, valor, estatus, codigo_promocion',
       '"'.$clave.'","'.$descripcion.'","'.$fecha_inicio.'","'.$fecha_fin.'","2",'.$descuento.','.$valor.', "1","'.$cod_promo.'"');
                
       if($inserta){
    		$json = array("status" => 1, "msg" => "Se insertó el descuento correctamente");
    	 }else{
    		$json = array("status" => 0, "msg" => "No se logró insertar");
    	 }

  }else{
  	$json = array("status" => 0, "msg" => "Método no aceptado");
  }

  echo json_encode($json);

} catch (Exception $e) {
    $json = array("status" => 0, "msg" =>  $e->getMessage());

    echo json_encode($json);
}

