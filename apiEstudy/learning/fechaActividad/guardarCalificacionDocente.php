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

        
        $query=query('SELECT calificacion from tr_respuesta 
        where materia_fecha_actividad_id ='.$id_materia_fecha_actividad);
        
        
        $calificacion=0;
        while($arreglo=arreglo($query)){
            $calificacion +=$arreglo['calificacion'];
        }

        if($calificacion >=  9.98) $calificacion = 10.00;

        $edita_calificacion=update('tr_materia_fecha_actividad','calificacion='.$calificacion.', estatus_actividad_id=4',
        'materia_fecha_actividad_id='.$id_materia_fecha_actividad);
        
        if($edita_calificacion){
    		$json = array("status" => 1, "msg" => "Se insertó calificación correctamente.");
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
