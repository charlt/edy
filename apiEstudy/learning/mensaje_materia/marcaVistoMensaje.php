<?php
include '../../jwt.php';
include '../../headers.php';

try {

    db('learning');

    if ($_SERVER['REQUEST_METHOD'] == "GET") {
        foreach ($_GET as $clave => $valor) {
            ${$clave} = escape_cara($valor);
        }

        $usuario = Auth::GetData(
            $jwt
        );

        if ($visto == 0) {
            $visto = 1;
            $visto_nuevo = 0;
        } else if ($visto == 1) {
            $visto = 0;
            $visto_nuevo = 1;
        }

        if ($rol_id == 2) {
            $rol_id = 3;
        } elseif ($rol_id == 3) {
            $rol_id = 2;
        }

        echo($numero_cambios);
        if ($numero_cambios == 0){
            $cambio = query('UPDATE tr_mensaje_materia SET visto = 0 where mensaje_id in (select max(mensaje_id ) from tr_mensaje_materia tmm where  visto = ' . $visto . ' and origen = ' . $rol_id . ' and tmm.materia_id=' . $id_materia . ')
            ORDER BY mensaje_id DESC LIMIT 1');


            // $cambio = query('UPDATE tr_retroalimentacion SET visto = 0
            // where  retroalimentacion_id in (select max(retroalimentacion_id) from tr_retroalimentacion tr
            // join tr_materia_fecha_actividad tmfa on tmfa.materia_fecha_actividad_id = tr.materia_fecha_actividad_id
            //     where  visto = ' . $visto . ' and origen = ' . $rol_id . ' and tmfa.actividad_id = ' . $id_actividad . ' and tmfa.materia_id = ' . $id_materia . ')
            // ORDER BY retroalimentacion_id DESC
            // LIMIT 1');
        } else {
            $cambio = query('UPDATE tr_mensaje_materia tr
            set visto = ' . $visto_nuevo . '
            where visto = ' . $visto . ' and origen = ' . $rol_id . ' and tr.materia_id=' . $id_materia);

        //     $cambio = query('UPDATE tr_retroalimentacion tr
        // join tr_materia_fecha_actividad tmfa on tmfa.materia_fecha_actividad_id = tr.materia_fecha_actividad_id
        // set visto = ' . $visto_nuevo . '
        // where visto = ' . $visto . ' and origen = ' . $rol_id . ' and tmfa.actividad_id = ' . $id_actividad . ' and tmfa.materia_id = ' . $id_materia);
        }

        if ($cambio) {
            $json = array("status" => 1, "msg" => "Se cambio estatus");
        } else {
            $json = array("status" => 0, "msg" => "No se cambio estatus");
        }
    } else {
        $json = array("status" => 0, "msg" => "Método no aceptado");
    }


    // echo json_encode($json);
} catch (Exception $e) {
    $json = array("status" => 0, "msg" =>  $e->getMessage());

    // echo json_encode($json);
}
