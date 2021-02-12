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

    //SERVICIO DE CONSULTA DE SESIÓN
    $query_notas = query('SELECT tn.*,tm.alumno_id
     FROM tr_nota tn
     join tr_materia tm on tm.materia_id = tn.materia_id
      WHERE  tm.materia_id ='.$id_materia.' and docente_id ='.$id_docente);

    
       $json_notas= array();
       while ($arreglo_notas = arreglo($query_notas)){
          array_push($json_notas,$arreglo_notas);
       }
       
       //ingreso todas las escuelas que tiene este profesor
       
       if(num($query_notas)){
    		$json = array("status" => 1, "msg" => "Se encontro las Notas","notas" => $json_notas);
    	 }else{
    		$json = array("status" => 0, "msg" => "No se encontraron Notas");
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