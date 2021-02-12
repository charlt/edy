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

        
        $query=query('SELECT valor from inter_respuesta_docente 
        where materia_fecha_actividad_id ='.$id_materia_fecha_actividad);
        
        
        $valor=0;
        while($arreglo=arreglo($query)){
            $valor +=$arreglo['valor'];
        }
        $calificacion=$valor/10;
        $edita_calificacion=update('tr_materia_fecha_actividad','calificacion='.$calificacion.', estatus_actividad_id = 4',
        'materia_fecha_actividad_id='.$id_materia_fecha_actividad);
        
        if($edita_calificacion){
    		$json = array("status" => 1, "msg" => "Sé califico rubrica con", "calificacion"=>$calificacion);
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
