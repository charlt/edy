<?php

class Notificacion{



    public static function AlumnosSinOferta(){
        $arreglo = arreglo(query('select count(ta.alumno_id) as num_alumnos from tr_alumno ta 
        left join '.$GLOBALS["db_controlEscolar"].'.inter_alumno_plan iag on iag.alumno_id = ta.alumno_id
        where iag.alumno_id is null and ta.estatus = 1'));
        
        return $arreglo['num_alumnos'];
    }

    
    public static function ticketsPendientes(){
        $arreglo = arreglo(query('SELECT count(ticket_id) as num_tickets
         FROM  '.$GLOBALS["db_controlEscolar"].'.tr_ticket tt where tt.estatus_ticket_id in (1,2) and estatus = 1'));
        
        return $arreglo['num_tickets'];
    }



    public static function AlumnosExpIncompleto(){
        $arreglo_documentos=arreglo(query('select count(documento_id) as num_documentos from '.$GLOBALS['db_seguimiento'].'.cat_documento'));        

        $query_alumnos = query('select alumno_id, count(expediente_id) as num_expedientes from tr_alumno ta
        left join '.$GLOBALS["db_seguimiento"].'.inter_expediente ie  on ie.aspirante_id = ta.alumno_id
        where ta.estatus = 1 
        group by ta.alumno_id
         ');

        $alumnos_incompletos=0;
        while($arreglo_alumnos = arreglo($query_alumnos)){

            if(!$arreglo_alumnos['num_expedientes'] == $arreglo_documentos['num_documentos'])
                $alumnos_incompletos++;            
        }

        return $alumnos_incompletos;

    }



    public static function cierreCiclo(){
        $query_ciclo = query('SELECT ciclo_desc,UNIX_TIMESTAMP(fecha_fin) as fecha_fin from cat_ciclo where now() between date_add(fecha_fin, INTERVAL -5 DAY) and fecha_fin and estatus = 1');
        $json_ciclo = array();
        while($arreglo_ciclo = arreglo($query_ciclo)){
            if (!empty($arreglo_ciclo)) {
                $fecha_actual = date("Y-m-d");
                $s = strtotime($arreglo_ciclo['fecha_fin']) - strtotime($fecha_actual);
                $d = intval($s / 86400);
                $arreglo_ciclo['dias'] = $d;
                array_push($json_ciclo, $arreglo_ciclo);
            }
        }
        return $json_ciclo;

    }


    public static function cierreAsignaturas(){
        $query_asignatura = query('SELECT iag.grupo_id, iag.asignatura_grupo_id,ca.asignatura, UNIX_TIMESTAMP(fecha_fin) as fecha_fin  from '.$GLOBALS["db_controlEscolar"].'.inter_asignatura_grupo iag 
        join '.$GLOBALS["db_datosGenerales"].'.inter_orden_asignatura ioa on ioa.orden_asignatura_id = iag.orden_asignatura_id
        join '.$GLOBALS["db_datosGenerales"].'.cat_asignaturas ca on ca.asignatura_id = ioa.asignatura_id
        where now() between date_add(fecha_fin, INTERVAL -5 DAY) and fecha_fin and iag.estatus = 1
        and ioa.estatus=1 and ca.estatus=1 order by fecha_fin, iag.grupo_id');
        $json_asignatura = array();
        while ($arreglo_asignatura = arreglo($query_asignatura)) {
            if (!empty($arreglo_asignatura)) {
                $fecha_actual = date("Y-m-d");
                $s = strtotime($arreglo_asignatura['fecha_fin']) - strtotime($fecha_actual);
                $d = intval($s / 86400);
                $arreglo_asignatura['dias'] = $d;
                array_push($json_asignatura, $arreglo_asignatura);
            }
        }
        return $json_asignatura;
    }



}




?>