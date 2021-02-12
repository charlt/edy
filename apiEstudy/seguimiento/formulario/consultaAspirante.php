<?php
include '../../jwt.php';
include '../../headers.php';
include './class/formulario.class.php';


db ('seguimiento');

$formulario=new Formulario();

try {
  if($_SERVER['REQUEST_METHOD'] == "GET"){
    foreach($_GET as $clave => $valor){
      ${$clave} = escape_cara($valor);
    }
    
      $usuario = Auth::GetData(
            $jwt  
        );
         
      $json_formulario=$formulario::consulta($id);
      $contestada = $formulario::contesta($json_formulario['formulario_id'], $id_aspirante);        

      if(isset($contestada)){
          if(isset($json_formulario['formulario_id'])){
          $json_campo_formulario=$formulario::consulta_campo_formulario($json_formulario['formulario_id'],$id_aspirante);

          array_push($json_formulario, $json_campo_formulario);
        }
      }     
        
       if(isset($json_formulario)){
    		$json = array("status" => 1, "msg" => "Se encontraron los formularios","formulario"=>$json_formulario);
    	 }else{
    		$json = array("status" => 0, "msg" => "No se encontraron los formularios");
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