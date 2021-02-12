<?php
include '../../jwt.php';
include '../../headers.php';
include '../../controlEscolar/class/alumno.class.php';

try {
  
  db('pagos');

  $alumno=new Alumno();

  if($_SERVER['REQUEST_METHOD'] == "POST"){
    foreach($_POST as $clave => $valor){
      ${$clave} = escape_cara($valor);
    }
    
    $usuario = Auth::GetData(
        $jwt
    );

    $insert_inscripcion = inserta('inter_alumno_suscripcion','alumno_id,suscripcion_id,beca_colegiatura,valor_beca_colegiatura,beca_reinscripcion,valor_beca_reinscripcion,estatus',
    ''.$usuario->id.','.$id_suscripcion.',0,2,0,2,1');

    $query_suscripcion = query('select pago_id,monto_inscripcion,nombre_suscripcion from cat_suscripcion cs join tr_suscripcion_pago isp on isp.suscripcion_id = cs.suscripcion_id where tipo = 3 and cs.suscripcion_id ='.$id_suscripcion);

    if(num($query_suscripcion)){
      $arreglo_suscripcion = arreglo($query_suscripcion);
      
      $insert_solicitud_pago = inserta_last_id('tr_solicitud_pago','persona_id, pago_id,nombre_pago,estatus_solicitud_pago_id, monto, beca, 
      forma_pago_id, monto_final, porcentaje, estatus',
      ''.$usuario->id.','.$arreglo_suscripcion['pago_id'].',"Inscripción '.$arreglo_suscripcion['nombre_suscripcion'].'",1,'.$arreglo_suscripcion['monto_inscripcion'].',0,1,'.$arreglo_suscripcion['monto_inscripcion'].',0, 1');
        
    }else{
      $insert_solicitud_pago = 0;
      update($GLOBALS['db_seguimiento'].'.tr_aspirante','paso = 4','aspirante_id='.$usuario->id);
    }
  
    if($insert_inscripcion){
      $json = array("status" => 1, "msg" => "Plan seleccionado", "idSolicitudPago" => $insert_solicitud_pago);
     }else{
      $json = array("status" => 0, "msg" => "Permanece en el mismo estatus");
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
