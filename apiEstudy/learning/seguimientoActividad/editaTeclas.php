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

    $arreglo_numeros= arreglo(query('select imp_pt, click_derecho, control_c, control_v,cambio_pagina from tr_seguimiento_actividad where materia_fecha_actividad_id ='.$materia_fecha_actividad_id));
    if('imp_pt' == $tipo ){
        $aumento =$arreglo_numeros['imp_pt']+1;
    }elseif('click_derecho'==$tipo){
        $aumento =$arreglo_numeros['click_derecho']+1;
    }elseif('control_c'==$tipo){
        $aumento =$arreglo_numeros['control_c']+1;
    }elseif('control_v'==$tipo){
        $aumento =$arreglo_numeros['control_v']+1;
    }elseif('cambio_pagina'==$tipo){
        $aumento =$arreglo_numeros['cambio_pagina']+1;
    }
    
    $edita_numero = update('tr_seguimiento_actividad',''.$tipo.'='.$aumento,'materia_fecha_actividad_id='.$materia_fecha_actividad_id);

       
       if($edita_numero){
    		$json = array("status" => 1, "msg" => "Se insertó correctamente");
    	 }else{
    		$json = array("status" => 0, "msg" => "No se insertó correctamente");
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