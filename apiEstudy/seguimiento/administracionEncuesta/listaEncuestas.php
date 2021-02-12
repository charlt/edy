<?php
include '../../jwt.php';
include '../../headers.php';


db ('seguimiento');


try {
  if($_SERVER['REQUEST_METHOD'] == "GET"){
    foreach($_GET as $clave => $valor){
      ${$clave} = escape_cara($valor);
    }
    
      $usuario = Auth::GetData(
            $jwt  
        );

      $condicion = '';

      if ($id_rol == 3) {
        $condicion = ' AND te.persona_id = '.$usuario->id.' AND tse.asignatura_grupo_id = '.$id_asignatura_grupo;
      }

      $query_encuestas = query('SELECT tse.switch_encuesta_id ,te.encuesta_id, te.titulo, te.instruccion, te.obligatorio from tr_encuesta te 
      JOIN tr_switch_encuesta tse ON tse.encuesta_id = te.encuesta_id 
      WHERE te.estatus = 1'.$condicion);

      $json_encuestas = array();
      while($arreglo = arreglo($query_encuestas)){
          array_push($json_encuestas,$arreglo);
      }

                
        
      if(num($query_encuestas)){
        $json = array("status" => 1, "msg" => "Se encontraron encuestas","encuesta"=>$json_encuestas);
      }else{
        $json = array("status" => 0, "msg" => "No se encontrarón encuestas");
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