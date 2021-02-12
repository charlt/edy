<?php
include '../../jwt.php';
include '../../headers.php';
include './class/encuesta.class.php';


db ('seguimiento');

$encuesta=new Encuesta();

try {
  if($_SERVER['REQUEST_METHOD'] == "GET"){
    foreach($_GET as $clave => $valor){
      ${$clave} = escape_cara($valor);
    }
    
      // $usuario = Auth::GetData(
      //       $jwt  
      //   );
         
      $json_encuesta=$encuesta::consulta($id);
      $contestada = $encuesta::contesta($json_encuesta['encuesta_id'], $id_aspirante);        

      if(isset($contestada)){
          if(isset($json_encuesta['encuesta_id'])){
          $json_campo_encuesta=$encuesta::consulta_campo_encuesta($json_encuesta['encuesta_id'],$id_aspirante);

          array_push($json_encuesta, $json_campo_encuesta);
        }
      }     
        
       if(isset($json_encuesta)){
    		$json = array("status" => 1, "msg" => "Se encontraron los encuestas","encuesta"=>$json_encuesta);
    	 }else{
    		$json = array("status" => 0, "msg" => "No se encontraron los encuestas");
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