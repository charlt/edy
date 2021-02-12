<?php
include '../../jwt.php';
include '../../headers.php';

try {

  db('controlEscolar');

  
  if($_SERVER['REQUEST_METHOD'] == "GET"){
    foreach($_GET as $clave => $valor){
      ${$clave} = escape_cara($valor);
    }
    
    $usuario = Auth::GetData(
            $jwt 
    );
         
        $elimina = query('UPDATE tr_avisos ta
        set  ta.estatus = 0 where ta.aviso_id = '.$id_aviso);
        
             
       
       if($elimina){
    		$json = array("status" => 1, "msg" => "Se eliminó el aviso correctamente");
    	 }else{
    		$json = array("status" => 0, "msg" => "No se logró eliminar");
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
