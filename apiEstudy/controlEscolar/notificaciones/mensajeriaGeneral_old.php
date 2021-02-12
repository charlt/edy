<?php
include '../../jwt.php';
include '../../headers.php';

try {

  db ('controlEscolar');

  if($_SERVER['REQUEST_METHOD'] == "GET"){
    foreach($_GET as $clave => $valor){
      ${$clave} = escape_cara($valor);
    }
    
              $usuario = Auth::GetData(
                $jwt  
            );

$query=query('SELECT count(mensajeria_id) as num_mensajes
        from  tr_mensajeria  where persona_id ='.$usuario->id.' and estatus=1 and visto=0 and origen!='.$usuario->id_rol.'');
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
