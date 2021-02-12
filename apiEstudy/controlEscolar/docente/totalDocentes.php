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

    $query = query('select docente_id from tr_docente td
    join '.$GLOBALS['db_datosGenerales'].'.inter_persona_usuario_rol ipur on ipur.persona_id = td.docente_id
    join '.$GLOBALS['db_datosGenerales'].'.personas p on p.persona_id = td.docente_id
    where ipur.estatus =1 and td.estatus = 1 and p.estatus = 1 and ipur.rol_id = 3');
      
    
    
        

    if(num($query)){
      $json = array("status" => 1, "msg" => "Total de docentes","total"=> num($query));
     }else{
      $json = array("status" => 1, "msg" => "No se encontraron docentes");
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
