<?php
include '../../jwt.php';
include '../../headers.php';

try {

    db('controlEscolar');

    if ($_SERVER['REQUEST_METHOD'] == "GET") {
        foreach ($_GET as $clave => $valor) {
            ${$clave} = escape_cara($valor);
        }

        $usuario = Auth::GetData(
            $jwt
        );

        $query = query('select respuesta_ticket_id, ticket_id, texto,adjunto,visto,persona_id,rol_id,fecha_creacion from 
        tr_respuesta_ticket where estatus=1 and ticket_id=' . $id_ticket.' order by ticket_id');
   
           $json= array();
   
           $i=0;    
           $entro=0;
          while ($arreglo = arreglo($query)){
             array_push($json,$arreglo);
               if($usuario->id_rol != $arreglo['rol_id']){
                 update('tr_respuesta_ticket','visto=1',
                'respuesta_ticket_id='.$arreglo['respuesta_ticket_id']);
               }
             $i++;
          }
          


        if (num($query)) {
            $json = array("status" => 1, "msg" => "Se encontraron respuestas", "Respuestas" => $json);
        } else {
            $json = array("status" => 0, "msg" => "No se encontraron ticket");
        }
    } else {
        $json = array("status" => 0, "msg" => "Método no aceptado");
    }

    /* Output header */

    echo json_encode($json);
} catch (Exception $e) {
    $json = array("status" => 0, "msg" =>  $e->getMessage());

    echo json_encode($json);
}
