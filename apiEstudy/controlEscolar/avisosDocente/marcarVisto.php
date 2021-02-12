<?php
include '../../jwt.php';
include '../../headers.php';

try {

  db('controlEscolar');

  // $archivo = new Archivo();

  if($_SERVER['REQUEST_METHOD'] == "POST"){
    foreach($_POST as $clave => $valor){
      ${$clave} = escape_cara($valor);
    }
    
      $usuario = Auth::GetData(
            $jwt  
        );

        if($visto == 1){
           inserta(
            'inter_aviso_grupo_persona',
            'avisos_grupo_id,persona_id,estatus',
            '' . $id_avisos_grupo . ',' . $usuario->id .',1'
          );
        }else{
          query('delete from inter_aviso_grupo_persona where avisos_grupo_id= '. $id_avisos_grupo . ' and persona_id =' . $usuario->id);
        }


       if($visto == 1){
        $json = array("status" => 1, "msg" => "Aviso marcado como visto");
       }else{
        $json = array("status" => 1, "msg" => "Aviso desmarcado");
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
