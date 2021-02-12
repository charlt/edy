<?php
include '../../jwt.php';
include '../../headers.php';

try {

  db('controlEscolar');
  
  if($_SERVER['REQUEST_METHOD'] == "POST"){
    foreach($_POST as $clave => $valor){
      ${$clave} = escape_cara($valor);
    }
    
    $usuario = Auth::GetData(
            $jwt 
    );

    $query_grupo = query('select tg.grupo_id from tr_grupo tg join inter_alumno_grupo iag on iag.grupo_id = tg.grupo_id where alumno_id ='.$alumno_id.' and tg.plan_orden_id = '.$id_plan_orden.' and tg.estatus = 1 and iag.estatus = 1');

    if(num($query_grupo)){
      $asignado_grupo = 1;
    }else{
      $asignado_grupo = 0;

    }
    
    $modifica_oferta = inserta('inter_alumno_plan',
    'plan_orden_id,alumno_id,asignado_grupo,estatus,campus_id',$id_plan_orden.','.$alumno_id.','.$asignado_grupo.',1, '.$campus_id.'');

    

    
    
       if($modifica_oferta){
    		$json = array("status" => 1, "msg" => "Se insertó Oferta Educativa");
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
