<?php
include 'pago.class.php';

class  AlumnoPago
{
   
  public static function generarPago($id_alumno){

    $Pago=new Pago();

    $query_suscripciones = query('select DAY(now()) as dia, alumno_suscripcion_id,ias.suscripcion_id,tipo,ias.beca_colegiatura,valor_beca_colegiatura,beca_reinscripcion,valor_beca_reinscripcion,cs.nombre_suscripcion,descripcion_suscripcion,dia_pago_colegiatura,dia_pago_reinscripcion,monto_reinscripcion,monto_colegiatura,mes,anio,tp.pago_id
    from '.$GLOBALS['db_pagos'].'.inter_alumno_suscripcion ias
    join '.$GLOBALS['db_pagos'].'.cat_suscripcion cs on cs.suscripcion_id = ias.suscripcion_id
    join '.$GLOBALS['db_pagos'].'.tr_suscripcion_pago isp on isp.suscripcion_id = cs.suscripcion_id
    join '.$GLOBALS['db_pagos'].'.tr_pago tp on tp.pago_id = isp.pago_id
    where alumno_id = '.$id_alumno.' and month(now()) = isp.mes and isp.anio  = year(now()) and isp.tipo in (1,2)');
    
    $pagos_pendientes = 0;
    $bloqueo = 0;
    $arreglo_dia_pago = array();

    while($arreglo_suscripciones = arreglo($query_suscripciones)){

      $query_solicitud_pago = query('select solicitud_pago_id,estatus_solicitud_pago_id,monto,beca,descuento_id from '.$GLOBALS['db_pagos'].'.tr_solicitud_pago where pago_id = '.$arreglo_suscripciones['pago_id'].' and persona_id='.$id_alumno.' and estatus = 1');

      if(num($query_solicitud_pago)){
        $arreglo_solicitud_pago = arreglo($query_solicitud_pago);   

        if($arreglo_solicitud_pago['estatus_solicitud_pago_id'] != 3){ //ya se pidió el pago pero no hay pendiente
          $pagos_pendientes++;

          if($arreglo_suscripciones['tipo'] == 1){
            $dia_pago = $arreglo_suscripciones['dia_pago_reinscripcion'];
          }else if($arreglo_suscripciones['tipo'] == 2){
            $dia_pago = $arreglo_suscripciones['dia_pago_colegiatura'];
          }

          array_push($arreglo_dia_pago, $dia_pago);

          
          if($dia_pago < $arreglo_suscripciones['dia'] && $dia_pago != 0){
            $bloqueo = 1;
          }


           //BUSCAMOS DESCUENTO Y RECARGOS 
          $porcentaje = $Pago::porcentaje($arreglo_solicitud_pago['monto'],$arreglo_suscripciones['suscripcion_id'],$arreglo_suscripciones['tipo']);

          if($porcentaje != 0){
            $monto_final = $Pago::calcula_monto_final_solicitud($arreglo_solicitud_pago['monto'],$arreglo_solicitud_pago['beca'],$arreglo_solicitud_pago['descuento_id'],$porcentaje);
            update(''.$GLOBALS['db_pagos'].'.tr_solicitud_pago','porcentaje = '.$porcentaje.', monto_final ='.$monto_final,' solicitud_pago_id ='.$arreglo_solicitud_pago['solicitud_pago_id']);
          }
     
        }
      }else{
        if($arreglo_suscripciones['tipo'] == 1){
          $nombre_tipo = 'Reinscripción';
          $monto = $arreglo_suscripciones['monto_reinscripcion'];
          $descuento_beca = $arreglo_suscripciones['beca_reinscripcion'];
          $valor_beca = $arreglo_suscripciones['valor_beca_reinscripcion'];
          $dia_pago = $arreglo_suscripciones['dia_pago_reinscripcion'];

        }else if($arreglo_suscripciones['tipo'] == 2){
          $nombre_tipo = 'Colegiatura';
          $monto = $arreglo_suscripciones['monto_colegiatura'];
          $descuento_beca = $arreglo_suscripciones['beca_colegiatura'];
          $valor_beca = $arreglo_suscripciones['valor_beca_colegiatura'];
          $dia_pago = $arreglo_suscripciones['dia_pago_colegiatura'];
        }

        array_push($arreglo_dia_pago, $dia_pago);


        if($dia_pago < $arreglo_suscripciones['dia'] && $arreglo_suscripciones['dia'] != 0){
          $bloqueo = 1;
        }

        $beca = $Pago::descuento($monto,$descuento_beca,$valor_beca);
        $nombre_mes = $Pago::consulta_mes($arreglo_suscripciones['mes']);

        $nombre_pago  =$nombre_tipo.' '.$nombre_mes.' '.$arreglo_suscripciones['anio'].' '.$arreglo_suscripciones['nombre_suscripcion'];

        
        $porcentaje = $Pago::porcentaje($monto,$arreglo_suscripciones['suscripcion_id'],$arreglo_suscripciones['tipo']);

        $monto_final = $Pago::calcula_monto_final_solicitud($monto,$beca,null,$porcentaje);
        

        $inserta_solicitud = inserta(''.$GLOBALS['db_pagos'].'.tr_solicitud_pago','persona_id, pago_id,nombre_pago,estatus_solicitud_pago_id, monto, beca, 
        forma_pago_id, monto_final, porcentaje, estatus',
        ''.$id_alumno.','.$arreglo_suscripciones['pago_id'].',"'.$nombre_pago.'",1,'.$monto.','.$beca.',1,'.$monto_final.','.$porcentaje.', 1');

        if($inserta_solicitud){
          $pagos_pendientes++;
        }else{
          $json = array("status" => 0, "msg" => "No se procesó pago");
        }
      }  
    }
          
        if($pagos_pendientes){
            if($bloqueo){
              update($GLOBALS['db_controlEscolar'].'.tr_alumno','situacion_pago_id = 2','alumno_id ='.$id_alumno);
            }
            $json = array("status" => 1, "msg" => "Tienes pagos pendientes", "pagosPendientes"=> $pagos_pendientes, "bloqueo" => $bloqueo,"diaPago" => $arreglo_dia_pago);
        }else{
          $json = array("status" => 1, "msg" => "No hay pagos pendientes","pagosPendientes"=> 0, "bloqueo" => 0,"diaPago" => $arreglo_dia_pago);
        }
      return $json;
    }

    public static function validarPago($id_alumno){
      $query_solicitud = query('select solicitud_pago_id from  '.$GLOBALS['db_pagos'].'.tr_solicitud_pago tsp 
      join  '.$GLOBALS['db_pagos'].'.tr_pago tp on tsp.pago_id  = tp.pago_id 
      join  '.$GLOBALS['db_pagos'].'.tr_suscripcion_pago tsp2  on tsp2.pago_id = tsp.pago_id 
      where tsp.persona_id  = '.$id_alumno.' and tsp.estatus = 1 and estatus_solicitud_pago_id not in (2,3)');  
 
    
    if(!num($query_solicitud)){
      update($GLOBALS['db_controlEscolar'].'.tr_alumno','situacion_pago_id = 3','alumno_id ='.$id_alumno);

      $json = array("status" => 1, "msg" => "Se actualizo el estatus del alumno");
     }else{
      $json = array("status" => 0, "msg" => "Permanece en el mismo estatus");
     }

     return $json;
    }
}