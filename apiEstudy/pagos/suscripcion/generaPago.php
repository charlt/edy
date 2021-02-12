<?php
include '../../jwt.php';
include '../../headers.php';
 

try {

  db('pagos');

  if($_SERVER['REQUEST_METHOD'] == "POST"){
    foreach($_POST as $clave => $valor){
      ${$clave} = escape_cara($valor);
    }
    
      $usuario = Auth::GetData(
            $jwt  
        );       

        $arreglo_suscripcion = arreglo(query('select nombre_suscripcion,monto from cat_suscripcion
        where suscripcion_id='.$id_suscripcion)); 

        $query_alumno_suscripcion = query('select alumno_id,beca,valor_beca from inter_alumno_suscripcion
        where suscripcion_id='.$id_suscripcion.' and estatus=1'); 
        
            $json_alumnos=array();
            while($arreglo_alumno_suscripcion = arreglo($query_alumno_suscripcion)){

              if($arreglo_alumno_suscripcion['valor_beca'] == 1){
                $arreglo_alumno_suscripcion['beca_total'] =$arreglo_alumno_suscripcion['beca']; 
              }else if($arreglo_alumno_suscripcion['valor_beca'] == 2){
                $arreglo_alumno_suscripcion['beca_total'] =($arreglo_suscripcion['monto'] * $arreglo_alumno_suscripcion['beca'])/100;
              }else{
                $arreglo_alumno_suscripcion['beca_total'] = 0;
              }

              $arreglo_alumno_suscripcion['monto'] = $arreglo_suscripcion['monto'] - $arreglo_alumno_suscripcion['beca_total'];

              array_push($json_alumnos,$arreglo_alumno_suscripcion);
                //update(''.$GLOBALS['db_controlEscolar'].'.tr_alumno','colegiatura_activa =0','alumno_id = '.$arreglo_alumno_suscripcion['alumno_id']);
            }

            switch($mes){
              case 1: $nombre_mes = "Enero"; break;
              case 2: $nombre_mes = "Febrero"; break;
              case 3: $nombre_mes = "Marzo"; break;
              case 4: $nombre_mes = "Abril"; break;
              case 5: $nombre_mes = "Mayo"; break;
              case 6: $nombre_mes = "Junio"; break;
              case 7: $nombre_mes = "Julio"; break;
              case 8: $nombre_mes = "Agosto"; break;
              case 9: $nombre_mes = "Septiembre"; break;
              case 10: $nombre_mes = "Octubre"; break;
              case 11: $nombre_mes = "Noviembre"; break;
              case 12: $nombre_mes = "Diciembre"; break;
            }

            $nombre_pago = $arreglo_suscripcion['nombre_suscripcion'].' '.$nombre_mes;

            $monto = $arreglo_suscripcion['monto'];

            $inserta_pago = inserta_last_id('cat_pago','nombre_pago,descripcion_pago,estatus_pago_id,monto,tipo_pago_id,estatus',
            '"'.$nombre_pago.'","'.$nombre_pago.'",1,'.$monto.',1,1');

            inserta('inter_suscripcion_pago',
            'suscripcion_id,pago_id,mes,anio,estatus',
            $id_suscripcion.',' .$inserta_pago.','.$mes.','.$anio.',1');


            if(isset($id_descuento)){
              $query_descuento = query('select descuento_id,descuento,valor from cat_descuento where descuento_id = '.$id_descuento);
              if(num($query_descuento)){
                $arreglo_descuento = arreglo($query_descuento);
                $id_descuento = $arreglo_descuento['descuento_id'];
                $descuento = $arreglo_descuento['descuento'];
                $tipo_descuento = $arreglo_descuento['valor'];
              }else{
                $id_descuento = null;
                $descuento = 0;
                $tipo_descuento = 0;  
              }
            }else{
              
              $id_descuento = null;
              $descuento = 0;
              $tipo_descuento = 0;
            }

            $solicitud_pago = "INSERT INTO tr_solicitud_pago(persona_id,pago_id,beca,descuento_id, monto,estatus_solicitud_pago_id,forma_pago_id,estatus) VALUES ";
    
            foreach ($json_alumnos as $alumno_tmp ){
                if($id_descuento == null){
                  $id_descuento ='null';
                  $monto_final = $alumno_tmp['monto'];
                }else{
                  if($tipo_descuento == 1){
                    $monto_final = $alumno_tmp['monto'] - $descuento;
                  }else if($tipo_descuento == 2){
                    $monto_final = $alumno_tmp['monto'] - ($alumno_tmp['monto'] * $descuento)/100;
                  } else {
                    $monto_final = $alumno_tmp['monto'];
                  }
                }
                
                $solicitud_pago .='('.$alumno_tmp['alumno_id'].','.$inserta_pago.','.$alumno_tmp['beca_total'].','.$id_descuento.','.$monto_final.',1,1,1),';
            }
            $solicitud_pago = trim($solicitud_pago, ',');
            //echo $solicitud_pago;
            $inserta=query($solicitud_pago);

      if(num($query_alumno_suscripcion)){
        $json = array("status" => 1, "msg" => "Se agregaron colegiaturas correctamente");
      }else{
        $json = array("status" => 0, "msg" => "No se lograron agregar colegiaturas");
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


