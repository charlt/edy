<?php
include '../../jwt.php';
include '../../headers.php';
include '../../controlEscolar/class/alumno.class.php';

try {
  
  db('datosGenerales');

  $alumno = new Alumno();

  if($_SERVER['REQUEST_METHOD'] == "GET"){
    foreach($_GET as $clave => $valor){
      ${$clave} = escape_cara($valor);
    }

      $usuario = Auth::GetData(
            $jwt  
        );

    $query_alumno = query('select situacion_alumno_id,situacion_pago_id,fecha_actualiza,MONTH(fecha_actualiza) as mes_actualiza from '.$GLOBALS['db_controlEscolar'].'.tr_alumno where alumno_id='.$usuario->id.'');

      
      if($query_alumno){

        $arreglo_alumno = arreglo($query_alumno);

        

        if( $arreglo_alumno['situacion_alumno_id'] != 3){

          include '../../pagos/class/alumno.class.php';
          $AlumnoPago = new AlumnoPago();

          if($arreglo_alumno['situacion_pago_id'] == 1){

            $jsonPago = $AlumnoPago::generarPago($usuario->id);
  
          }else if($arreglo_alumno['situacion_pago_id'] == 2){
            $jsonPago = $AlumnoPago::validarPago($usuario->id);
            if($jsonPago['status'] == 1){
              $arreglo_alumno['situacion_pago_id'] = 1;
            }
          }else if($arreglo_alumno['situacion_pago_id'] == 3){
            $mes_hoy = date('m');
            $mes_alumno = $arreglo_alumno['mes_actualiza'];
  
            if($mes_alumno == $mes_hoy){
              $jsonPago = null;
            }else{
              $jsonPago = $AlumnoPago::generarPago($usuario->id);
            }
  
          }else{
            $jsonPago = null;
          }
        }else{
          $jsonPago = null;

        }
        

        if($arreglo_alumno['situacion_alumno_id'] != 1){

          include '../class/ticket.class.php';
          $Ticket = new Ticket();

          $ticket = $Ticket::ver_ticket_bloqueo($usuario->id,2);

        }else{
          $ticket = null;
        }

        $query_privilegios  = query('SELECT * FROM cat_privilegios_alumno WHERE estatus = 1');
    
        $privilegios= array("principales" => array(), "secundarios" => array());
        while ($arreglo_privilegios = arreglo($query_privilegios)){
            if ($arreglo_privilegios['type'] == 1) {
                array_push($privilegios['principales'], $arreglo_privilegios);
            }else if ($arreglo_privilegios['type'] == 2) {
                array_push($privilegios['secundarios'], $arreglo_privilegios);
            }
        }


        $json = array("status" => 1, "msg" => "Se encontró el alumno",
        "idSituacionAlumno" => $arreglo_alumno['situacion_alumno_id'], 
        "privilegios" => $privilegios,
        "ticket" => $ticket,
        "idSituacionPago" => $arreglo_alumno['situacion_pago_id'], 
        "pago" => $jsonPago, 
      );
    	 }else{
    		$json = array("status" => 0, "msg" => "No se encontró alumno");
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
