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

            
            

        $query_msjs=query('SELECT count(mensaje_id) as num_mensajes 
        from tr_mensaje_materia tmm 
        join tr_materia tm on tm.materia_id = tmm.materia_id
        join '.$GLOBALS['db_controlEscolar'].'.inter_docente_asignatura_grupo idag on idag.asignatura_grupo_id = tm.asignatura_grupo_id
        where idag.docente_id ='.$usuario->id.' and idag.estatus = 1  and tmm.estatus=1  and tm.estatus = 1 and visto=0 and origen=2');

        
        $arreglo_msjs = arreglo($query_msjs);
        
       //ingreso todas las carreras que tiene       
    		$json = array("status" => 1, "msg" => "Se encontraron mensajes", "numero_mensajes"=>$arreglo_msjs['num_mensajes']);
    	 

  }else{
  	$json = array("status" => 0, "msg" => "Método no aceptado");
  }

  /* Output header */

  echo json_encode($json);

} catch (Exception $e) {
    $json = array("status" => 0, "msg" =>  $e->getMessage());

    echo json_encode($json);
}
