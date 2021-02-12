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

    $query = query('SELECT tt.ticket_id, tt.asunto_ticket, tt.descripcion_ticket, tt.adjunto, tt.visto, tt.area_id, tt.persona_id, tt.rol_id, cet.estatus_ticket, ctt.tipo_ticket, UNIX_TIMESTAMP(tt.fecha_creacion) as fecha_creacion FROM tr_ticket tt
    join cat_tipo_ticket ctt on ctt.tipo_ticket_id = tt.tipo_ticket_id 
    join cat_estatus_ticket cet on cet.estatus_ticket_id = tt.estatus_ticket_id 
    where persona_id ='.$usuario->id.' and tt.rol_id ='.$usuario->id_rol.' and tt.estatus =1 and tt.visto = 0 order by ticket_id desc ');

    $notificacion = 0;
    $json= array();
    while($arreglo = arreglo($query)){
      if($arreglo['visto'] == 0 ) $notificacion++;
        array_push($json, $arreglo);
    }



    if(num($query)){
      $json = array("status" => 1, "msg" => "Se encontro ticket","tickets" => $json, "notificacion" => $notificacion);
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
