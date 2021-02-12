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

          
        $query=query('SELECT count(mensaje_id) as num_mensajes, tm.materia_id from tr_materia tm
        left join (select * from tr_mensaje_materia tmm where tmm.estatus=1 and visto=0 and origen=2) tmm ON tmm.materia_id = tm.materia_id
        where asignatura_grupo_id = '.$asignatura_grupo_id.'  group by tm.materia_id ');
        $json_msg=array();
        
        while($arreglo = arreglo($query)){
            array_push($json_msg, $arreglo);
        }
       //ingreso todas las carreras que tiene       
       if(num($query)){
    		$json = array("status" => 1, "msg" => "Se encontraron mensajes", "numero_mensajes"=>$json_msg);
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
