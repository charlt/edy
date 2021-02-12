<?php

class Ciclo
{

    public static function consultaAlumnosReales($id_ciclo){
        $query_grupo = query('SELECT grupo_id, grupo,plan_estudio, orden_jerarquico_descripcion  from tr_grupo tg
    join '.$GLOBALS['db_datosGenerales'].'.inter_plan_orden ipo on ipo.plan_orden_id = tg.plan_orden_id
    join '.$GLOBALS['db_datosGenerales'].'.tr_plan_estudios tpe on tpe.plan_estudio_id = ipo.plan_estudio_id
    join '.$GLOBALS['db_datosGenerales'].'.cat_orden_jerarquico coj on coj.orden_jerarquico_id = ipo.orden_jerarquico_id
    where tg.estatus= 1 and ipo.estatus=1 and tpe.estatus=1 and coj.estatus=1 and ciclo_id =' . $id_ciclo);

        $json = array();
        while ($arreglo_grupo = arreglo($query_grupo)) {

            $arreglo_alumnos_reales = arreglo(query('SELECT count(alumno_id) as num_alumnos from inter_alumno_grupo where grupo_id=' . $arreglo_grupo['grupo_id'] . ' and estatus = 1'));

            $arreglo_alumnos_incompletos = arreglo(query('SELECT count(alumno_id) as num_alumnos from inter_alumno_asignatura_grupo iaag
        join inter_asignatura_grupo iag on iag.asignatura_grupo_id = iaag.asignatura_grupo_id
        where iag.grupo_id =' . $arreglo_grupo['grupo_id'] . ' and iaag.estatus =1 and iag.estatus=1'));
            $total_alumnos = $arreglo_alumnos_reales['num_alumnos'] + $arreglo_alumnos_incompletos['num_alumnos'];

            $arreglo['plan_estudios'] = $arreglo_grupo['plan_estudio'];
            $arreglo['grado'] = $arreglo_grupo['orden_jerarquico_descripcion'];
            $arreglo['nombre_grupo'] = $arreglo_grupo['grupo'];
            $arreglo['total_alumnos'] = $total_alumnos;
            $arreglo['alumnos_reales'] = $arreglo_alumnos_reales['num_alumnos'];
            $arreglo['alumnos_incompletos'] = $arreglo_alumnos_incompletos['num_alumnos'];
            array_push($json, $arreglo);
        }
        return $json;
    }
   
    public static function busca_reprobados($id_ciclo,$materia_aceptadas){
        $query_alumnos = query('select alumno_id from inter_alumno_grupo
        join tr_grupo tg on tg.grupo_id = iag.grupo_id
        where estatus =1 and situacion_grupo_id in (4,5) and ciclo_id ='.$id_ciclo);

        $json_reprobados = array();

        while($arreglo_alumnos = arreglo($query_alumnos)){
            $materias_reprobadas = num(query('select materia_id
            from '.$GLOBALS['db_learning'].'.tr_materia tm
            join inter_asignatura_grupo iag on iag.asignatura_grupo_id = tm.asignatura_grupo_id 
            where alumno_id = '.$arreglo_alumnos['alumno_id'].' and grupo_id ='.$arreglo_alumnos['grupo_id'].'and tm.materia_id != 0 and iag.estatus = 1 and tg.estatus= 1 and tg.ciclo_id = '.$id_ciclo.' and calificacion <6 and tm.estatus = 1'));

            if($materias_reprobadas <= $materia_aceptadas){
                
                array_push($json_aprobados, $arreglo_alumnos['alumno_id']);
                    
            }else{
                array_push($json_reprobados, $arreglo_alumnos['alumno_id']);

            }                        
        }

        return array('aprobados' => $json_aprobados, 'reprobados'=> $json_reprobados);
    }
}
