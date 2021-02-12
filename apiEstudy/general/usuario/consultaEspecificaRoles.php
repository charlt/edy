<?php
include '../../jwt.php';
include '../../headers.php';

try {
  db('controlEscolar');

  if($_SERVER['REQUEST_METHOD'] == "GET"){
    foreach($_GET as $clave => $valor){
      ${$clave} = escape_cara($valor);
    }

    if ($id_rol == 1) {
        $query = query('SELECT area_id, vista, edicion from tr_administrador ta where  ta.administrador_id='.$persona_id);
    }elseif ($id_rol == 2) {
        $query = query('SELECT clave_alumno from tr_alumno ta where  ta.alumno_id='.$persona_id);
    }elseif ($id_rol == 3) {
        $query = query('SELECT clave_profesor from tr_docente td where  td.docente_id='.$persona_id);
    }

    
      $json_tmp = array();

       while ($arreglo = arreglo($query)){
          array_push($json_tmp,$arreglo);
       }

       if(num($query)){
    		$json = array("status" => 1, "msg" => "Se encontó usuario","usuario" => $json_tmp);
    	 }else{
    		$json = array("status" => 0, "msg" => "No se encontó usuario");
       }
    
  }else{
  	$json = array("status" => 0, "msg" => "Método no aceptado");
  }

  echo json_encode($json);

} catch (Exception $e) {
    $json = array("status" => 0, "msg" =>  $e->getMessage());

    echo json_encode($json);
}
