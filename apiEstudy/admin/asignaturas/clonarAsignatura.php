<?php
include '../../jwt.php';
include '../../headers.php';
include '../../controlEscolar/class/asignatura.class.php';


try {

    db('learning');
    $Asignatura = new Asignatura();


    if ($_SERVER['REQUEST_METHOD'] == "POST") {
        foreach ($_POST as $clave => $valor) {
            ${$clave} = escape_cara($valor);
        }

          $usuario = Auth::GetData(
                $jwt  
            );


        $inserta_asignatura = $Asignatura::clonarAsignatura($id_asignatura,$usuario->usuario);

        $inserta = inserta($GLOBALS['db_datosGenerales'].'.inter_orden_asignatura',
        'plan_orden_id, asignatura_id,asignatura_origen,estatus',
        ''.$id_plan_orden.','.$inserta_asignatura.',3,1');

        if ($Asignatura) {
            $json = array("status" => 1, "msg" => "Se duplicó la asignatura correctamente");
        } else {
            $json = array("status" => 0, "msg" => "No se logró duplicar");
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
