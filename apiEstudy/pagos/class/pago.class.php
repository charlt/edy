<?php

class  Pago
{
    public static function consulta_mes($mes)
    {

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

          return $nombre_mes;
        
    }


    public static function descuento($monto,$monto_descuento,$tipo_descuento){
        if($tipo_descuento == 1){
            $descuento = $monto_descuento;
          }else if($tipo_descuento == 2){
            $descuento = $monto* $monto_descuento/100;
          }else{
            $descuento = 0;  
          }

        return $descuento;
    }

    public static function calcula_monto_final_solicitud($monto,$beca,$id_descuento,$porcentaje){

      if($id_descuento){
        $query_descuento = query('select descuento,valor from '.$GLOBALS['db_pagos'].'.cat_descuento where descuento_id ='.$id_descuento);
        $arreglo_descuento = arreglo($query_descuento);
        
        $descuento = self::descuento($monto,$arreglo_descuento['descuento'],$arreglo_descuento['valor']);
      }else{
        $descuento = 0;
      }
      

  
      
      $monto_final = $monto - $beca - $descuento - $porcentaje;

      return $monto_final;

    }

    public static function porcentaje($monto,$id_suscripcion,$tipo){
        
        $query_suscripcion = query('select tipo_porcentaje,porcentaje,valor from '.$GLOBALS['db_pagos'].'.cat_porcentaje_fecha_pago where estatus = 1 and tipo = '.$tipo.' and suscripcion_id  = '.$id_suscripcion.' and DAY(now()) between dia_inicio  and dia_fin');
        
        if(num($query_suscripcion)){
            
            $arreglo_suscripcion = arreglo($query_suscripcion);

            $porcentaje_final = self::descuento($monto,$arreglo_suscripcion['porcentaje'],$arreglo_suscripcion['valor']);

            if($arreglo_suscripcion['tipo_porcentaje'] == 2){
              $porcentaje_final *= -1; 
            }

            return $porcentaje_final;
        }else{
            return 0;
        }
    }

    public static function  procesa_pago($id_solicitud_pago){

        $query_estatus_solicitud_pagos = query('select persona_id,tp.pago_id,tipo_pago_id
        from tr_solicitud_pago tsp1 
        join tr_pago tp on tp.pago_id = tsp1.pago_id
        where tsp1.solicitud_pago_id='.$id_solicitud_pago);

        
        if(num($query_estatus_solicitud_pagos)){

          $arreglo_estatus_solicitud_pago = arreglo($query_estatus_solicitud_pagos);

          switch($arreglo_estatus_solicitud_pago['tipo_pago_id']){

            case 1: // suscripcion
              $query_suscripcion = query('select mes,anio,tipo from tr_suscripcion_pago where pago_id = '.$arreglo_estatus_solicitud_pago['pago_id']);
              
              $arreglo_suscripcion= arreglo($query_suscripcion);
              
              if($arreglo_suscripcion['tipo'] == 2 || $arreglo_suscripcion['tipo'] == 1){
                
                update($GLOBALS['db_controlEscolar'].'.tr_alumno','situacion_pago_id = 3','alumno_id ='.$arreglo_estatus_solicitud_pago['persona_id']);

                $json = array("status" => 1,"tipo" => $arreglo_estatus_solicitud_pago['tipo_pago_id'] , "msg" => "Colegiatura/Reinscripción realizada correctamente");

              }else if($arreglo_suscripcion['tipo'] == 3){

                //AQUÍ DEBE MATRICULAR
                include '../../seguimiento/class/aspirante.class.php';
                include '../../controlEscolar/class/matricula.class.php';

                $aspirante = new Aspirante();

                update($GLOBALS['db_seguimiento'].'.tr_aspirante','paso = 4','aspirante_id ='.$arreglo_estatus_solicitud_pago['persona_id']);

                $matriculado =  $aspirante::transicion_aspirante($arreglo_estatus_solicitud_pago['persona_id'],'','');

                $json = array("status" => 1,"tipo" => $arreglo_estatus_solicitud_pago['tipo_pago_id'] , "msg" => "Inscripción realizada correctamente","urlRedirect" => 'inscripcion/learning/');

                
              }
              
            break;
            case 2: // materia
              $query_asignatura = query('select asignatura_grupo_id from inter_asignatura_pago iap
              join '.$GLOBALS['db_datosGenerales'].'.inter_orden_asignatura ioa on ioa.asignatura_id = iap.asignatura_id
              join '.$GLOBALS['db_controlEscolar'].'.inter_asignatura_grupo iag on iag.orden_asignatura_id = ioa.asignatura_id
              join '.$GLOBALS['db_controlEscolar'].'.tr_grupo tg on tg.grupo_id = iag.grupo_id
              where pago_id = '.$arreglo_estatus_solicitud_pago['pago_id'].' 
              and situacion_asignatura_grupo_id =1 and tg.estatus = 1 and iag.estatus = 1 and now() between fecha_apertura and fecha_inscripcion
              ');

              if(num($query_asignatura)){
                $arreglo_asignatura = arreglo($query_asignatura);
                
                $inserta_materia = inserta_last_id(''.$GLOBALS['db_learning'].'.tr_materia',
                'alumno_id,asignatura_grupo_id,tipo_materia_id,estatus_materia_id,estatus',
                $arreglo_estatus_solicitud_pago['persona_id'].','.$arreglo_asignatura['asignatura_grupo_id'].',1,1,1');

                $json = array("status" => 1,"tipo" => $arreglo_estatus_solicitud_pago['tipo_pago_id'] , "msg" => "Materia asignada correctamente", "urlRedirect" => "learning/");
              }else{
                $json = array("status" => 0,"tipo" => $arreglo_estatus_solicitud_pago['tipo_pago_id'] , "msg" => "No se logró actualizar");
              }
            break;
            default:
              $json = array("status" => 0,"tipo" => $arreglo_estatus_solicitud_pago['tipo_pago_id'] , "msg" => "No hay operación que realizar");
            break;

          }
        }else{
          $json = array("status" => 0,"tipo" => 0 , "msg" => "No se encontró pago");
        }

        return $json;
    }
}