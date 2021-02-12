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
        if ($numero_cambios == 0) {
                $cambio = query('UPDATE tr_retroalimentacion SET visto = 0
            where  retroalimentacion_id in (select max(retroalimentacion_id) from tr_retroalimentacion tr
            join tr_materia_fecha_actividad tmfa on tmfa.materia_fecha_actividad_id = tr.materia_fecha_actividad_id
                where  visto = ' . $visto . ' and origen = ' . $rol_id . ' and tmfa.actividad_id = ' . $id_actividad . ' and tmfa.materia_id = ' . $id_materia . ')
            ORDER BY retroalimentacion_id DESC
            LIMIT 1');
        } else {
            $cambio = query('UPDATE tr_retroalimentacion tr
        join tr_materia_fecha_actividad tmfa on tmfa.materia_fecha_actividad_id = tr.materia_fecha_actividad_id
        set visto = ' . $visto_nuevo . '
        where visto = ' . $visto . ' and origen = ' . $rol_id . ' and tmfa.actividad_id = ' . $id_actividad . ' and tmfa.materia_id = ' . $id_materia);
        }










        // $query_mensajes = query('SELECT * FROM tr_retroalimentacion tr
        // join tr_materia_fecha_actividad tmfa on tmfa.materia_fecha_actividad_id = tr.materia_fecha_actividad_id
        // where visto = ' . $visto . ' and origen = ' . $rol_id . ' and tmfa.actividad_id = ' . $id_actividad . ' and tmfa.materia_id = ' . $id_materia);

        // $num_mensajes = num($query_mensajes);
        // $json_mensajes = array();
        // $resp_temporal = array();

        // while ($arreglo_mensajes = arreglo($query_mensajes)){
        //     if ($arreglo_mensajes['visto'] == 1) { //verifica cuantos mensajes vistos exiten
        //         array_push($resp_temporal, $arreglo_mensajes['visto']);
        //     }
        //     array_push($json_mensajes, $arreglo_mensajes);
        // }
        // $tam_array_temporal = sizeof($resp_temporal);

        // if ($tam_array_temporal == 0) { // si no hay ningun visto cambia todos los no vistos
        //     foreach ($json_mensajes as $prueba) {
        //         query('UPDATE tr_retroalimentacion set visto = ' . $visto_nuevo . ' where visto = ' . $visto . ' and retroalimentacion_id=' . $prueba['retroalimentacion_id']);
        //     }
        // } else {
        //     $tam_array_mensajes = sizeof($json_mensajes);
        //     echo($tam_array_mensajes);
        //     query('UPDATE tr_retroalimentacion set visto = ' . $visto_nuevo . ' where visto = ' . $visto . ' and retroalimentacion_id=' . $json_mensajes[$tam_array_mensajes -1]['retroalimentacion_id']);
        // }

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
