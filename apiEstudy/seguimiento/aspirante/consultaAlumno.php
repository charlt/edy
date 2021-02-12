<?php
include '../../jwt.php';
include '../../headers.php';


db ('datosGenerales');


try {
  if($_SERVER['REQUEST_METHOD'] == "GET"){
    foreach($_GET as $clave => $valor){
      ${$clave} = escape_cara($valor);
    }
    
      $usuario = Auth::GetData(
            $jwt  
        );
         
        $query = query('SELECT usuario_id,persona_id from inter_persona_usuario_rol where persona_id = '.$usuario->id.' and rol_id = 2 and estatus = 1');
            
       $arreglo = arreglo($query);

        

       if(num($query)){
    		$json = array("status" => 1, "msg" => "Aspirante se encuentra activo como alumno","idAlumno"=>$arreglo['persona_id'],"idUsuario"=>$arreglo['usuario_id']);
    	 }else{
    		$json = array("status" => 0, "msg" => "No se encontró la información");
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









