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

    $query = query('select alumno_id from tr_alumno where estatus = 1');
      
    
    
        

    if(num($query)){
      $json = array("status" => 1, "msg" => "Total de alumnos","total"=> num($query));
     }else{
      $json = array("status" => 1, "msg" => "No se encontraron alumnos");
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
