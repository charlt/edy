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

    $query = query('select ticket_id,asunto_ticket,descripcion_ticket,adjunto, visto,area_id,persona_id,ctt.rol_id,ctt.tipo_ticket_id,ctt.tipo_ticket,estatus_ticket_id,tt.fecha_creacion
    from tr_ticket tt 
    join cat_tipo_ticket ctt on ctt.tipo_ticket_id = tt.tipo_ticket_id
    where tt.estatus =1 and ticket_id ='.$id_ticket);
    
    $json= array();
    while($arreglo = arreglo($query)){
        array_push($json, $arreglo);
    }



    if(num($query)){
      $json = array("status" => 1, "msg" => "Se encontro ticket","ticket" => $json);
     }else{
      $json = array("status" => 0, "msg" => "No se encontro ticket");
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
