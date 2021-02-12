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
    
    $rubrica_json = json_decode(stripslashes($rubrica));

    
    $id_rubrica = inserta_last_id('tr_rubrica', 
        'desc_rubrica, numero_elementos, numero_categorias, fecha_creacion, estatus',
        '"'.$rubrica_json->titulo.'",'.$rubrica_json->selectHorizontal.','.$rubrica_json->selectVertical.',now(), 1');

        
    $num_verticales = sizeof($rubrica_json->verticales);
    for ($i=0; $i <$num_verticales ; $i++) { 
        $inserta = inserta('tr_rb_categoria','categoria_desc,porcentaje,rubrica_id, fecha_creacion, estatus',
        '"'.$rubrica_json->verticales[$i]->texto.'",'.$rubrica_json->verticales[$i]->porcentaje.','.$id_rubrica.', now(), 1');      
    }

    $num_horizontales = sizeof($rubrica_json->horizontales);
    for ($i=0; $i <$num_horizontales ; $i++) { 
        $inserta = inserta('tr_rb_elemento','elemento_desc,porcentaje,rubrica_id, fecha_creacion, estatus',
        '"'.$rubrica_json->horizontales[$i]->texto.'",'.$rubrica_json->horizontales[$i]->porcentaje.','.$id_rubrica.', now(), 1');      
    }





            
      if($id_rubrica){
    		$json = array("status" => 1, "msg" => "Se guardó rubrica correctamente", "id_rubrica" => $id_rubrica);
    	  }else{
    	 	$json = array("status" => 0, "msg" => "No se insertó rúbrica");
    	}

  }else{
  	$json = array("status" => 0, "msg" => "Método no aceptado");
  }

  echo json_encode($json);

} catch (Exception $e) {
    $json = array("status" => 0, "msg" =>  $e->getMessage());

    echo json_encode($json);
}