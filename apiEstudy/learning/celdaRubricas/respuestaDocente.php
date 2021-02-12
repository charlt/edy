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

          
        
       $query=query('delete ird from inter_respuesta_docente ird 
            join tr_rb_respuesta trr on ird.respuesta_id = trr.respuesta_id
            where trr.categoria_id='.$id_categoria.' and materia_fecha_actividad_id='.$id_materia_fecha_actividad);
        
            
        $inserta = inserta('inter_respuesta_docente', 'respuesta_id, docente_id, 
        materia_fecha_actividad_id, valor, fecha_creacion, estatus',
        ''.$id_respuesta.','.$usuario->id.','.$id_materia_fecha_actividad.','.$docente_valor.', now(),1');
            
          
          
       
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
