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

    $query = query('select p.nombre,p.nombre,p.primer_apellido,p.segundo_apellido,p.email,tt.ticket_id,tt.asunto_ticket,tt.descripcion_ticket,ctt.tipo_ticket_id,ctt.tipo_ticket
    from tr_ticket tt
    join '.$GLOBALS['db_datosGenerales'].'.personas p on p.persona_id = tt.persona_id
    join cat_tipo_ticket ctt on ctt.tipo_ticket_id = tt.tipo_ticket_id
    where tt.estatus_ticket_id = '.$id_estatus_ticket.' and tt.estatus =1');

    $json= array();
    while($arreglo = arreglo($query)){
        array_push($json, $arreglo);
    }



    if(num($query)){
      $json = array("status" => 1, "msg" => "Lista de ticket","ticket" => $json);
     }else{
      $json = array("status" => 0, "msg" => "No se encontraron ticket");
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
