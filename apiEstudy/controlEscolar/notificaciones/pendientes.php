<?php
include '../../jwt.php';
include '../../headers.php';
include '../class/notificaciones.class.php';


try {

    db('controlEscolar');

    $notificacion = new Notificacion();

    if ($_SERVER['REQUEST_METHOD'] == "GET") {
        foreach ($_GET as $clave => $valor) {
            ${$clave} = escape_cara($valor);
        }

        $usuario = Auth::GetData(
              $jwt  
          );

        $alumnos_sin_oferta = $notificacion::AlumnosSinOferta();
        $alumnos_exp_incompletos = $notificacion::AlumnosExpIncompleto();
        $ciclo_cierre = $notificacion::cierreCiclo();
        $ticket_pendientes = $notificacion::ticketsPendientes();
        $asignaturas_cierre=$notificacion::cierreAsignaturas();

        
        $json = array("status" => 1, "msg" => "Se encontraron pendientes", "alumnos_sin_oferta" => $alumnos_sin_oferta, "alumnos_expedientes_incompletos" => $alumnos_exp_incompletos, "ciclo_cerca_de_cerrar" => $ciclo_cierre, "asignaturas_cerca_de_cerrar" => $asignaturas_cierre, "pendientes_ticket" => $ticket_pendientes);
        
    } else {
        $json = array("status" => 0, "msg" => "Método no aceptado");
    }

    /* Output header */

    echo json_encode($json);
} catch (Exception $e) {
    $json = array("status" => 0, "msg" =>  $e->getMessage());

    echo json_encode($json);
}
