<?php
include '../../jwt.php';
include '../../headers.php';

try {

  db('controlEscolar');

  if($_SERVER['REQUEST_METHOD'] == "POST"){
    foreach($_POST as $clave => $valor){
      ${$clave} = escape_cara($valor);
    }
    
      $usuario = Auth::GetData(
            $jwt  
        );

        $query = query('select * from tr_inasistencia_clase where clase_id ='.$id_clase.' and persona_id ='.$id_persona );

        if(num($query)){
          $inserta_asistencia = delete('tr_inasistencia_clase','clase_id ='.$id_clase.' and persona_id ='.$id_persona);
        }else{
          $inserta_asistencia = inserta('tr_inasistencia_clase', 'clase_id, persona_id',
          ''.$id_clase.','.$id_persona.'');
        }

        
       
       if($inserta_asistencia){
    		$json = array("status" => 1, "msg" => "Se modificó la asistencia correctamente");
    	 }else{
    		$json = array("status" => 0, "msg" => "No se logró modificar");
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
