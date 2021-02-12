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
        
        $query = query('SELECT tr.* from tr_retroalimentacion tr
        join tr_materia_fecha_actividad tmfa on tmfa.materia_fecha_actividad_id = tr.materia_fecha_actividad_id
        where tmfa.actividad_id = '.$id_actividad.' and tmfa.materia_id = '.$id_materia.' and
        tr.estatus=1 and origen=2 and visto=0');
            
        $num_mensajes =  num($query);
            
       if(num($query)){
    		$json = array("status" => 1, "msg" => "Se encontraron mensajes", "numero_mensajes"=>$num_mensajes);
    	 }else{
    		$json = array("status" => 0, "msg" => "No se encontraron mensajes");
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
