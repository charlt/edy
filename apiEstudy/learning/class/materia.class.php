<?php 
include '../../controlEscolar/class/asignaturagrupo.class.php';

class Materias {


    public static function materiasActivas($id_alumno){

        $query = query('SELECT alumno_id, materia_id, ca.asignatura,ca.asignatura_id,iag.asignatura_grupo_id,tm.calificacion
        from tr_materia tm
        join '.$GLOBALS["db_controlEscolar"].'.inter_asignatura_grupo iag on iag.asignatura_grupo_id = tm.asignatura_grupo_id
        join '.$GLOBALS["db_datosGenerales"].'.inter_orden_asignatura ioa on ioa.orden_asignatura_id = iag.orden_asignatura_id
        join '.$GLOBALS["db_datosGenerales"].'.cat_asignaturas ca on ca.asignatura_id = ioa.asignatura_id
        where alumno_id ='.$id_alumno.' and tm.estatus = 1 and tm.estatus_materia_id not in (2,5,6)');

       return $query;
        
    } 


    public static function avanceMateria($id_materia){

        $AsignaturaGrupo = new AsignaturaGrupo();

        $query_asignatura_grupo = query('select asignatura_grupo_id from tr_materia where materia_id = '.$id_materia);

        $arreglo_asignatura_grupo = arreglo($query_asignatura_grupo);

        $query_modulos = $AsignaturaGrupo::consultaTodosModulos($arreglo_asignatura_grupo['asignatura_grupo_id']);

        $actividades_totales=0;
        $actividades_contestadas=0;
        while ($arreglo_modulos = arreglo($query_modulos)) {
            $query_actividad = query('select tmfa.materia_fecha_actividad_id,ta.actividad_id,actividad_nombre, ta.tipo_actividad_id,ta.actividad_nombre,ta.actividad_clave,ta.num_intentos,ta.actividad_nombre, estatus_actividad_id
            FROM tr_actividad ta
            left join (select actividad_id,materia_fecha_actividad_id, estatus_actividad_id from tr_materia_fecha_actividad  where materia_id = ' . $id_materia . ' and estatus = 1 and estatus_actividad_id in (2,4,9,10)) tmfa on tmfa.actividad_id = ta.actividad_id 
            where ta.estatus=1 and modulo_id = ' . $arreglo_modulos['modulo_id'] . ' and tipo_actividad_id = 2  ORDER BY orden');


            $json_actividad = array();
            while ($arreglo_actividad = arreglo($query_actividad)) {
    
                $actividades_totales++;
                if(!empty($arreglo_actividad['materia_fecha_actividad_id'])){
                    $actividades_contestadas++;
                }

            
            }
         }


         if($actividades_totales == 0 || $actividades_totales == 0){
            $porcentaje = 0;
         }else{
            $porcentaje = $actividades_contestadas /  $actividades_totales *100 ;
            $porcentaje = ceil($porcentaje);
   
         }
        
        return $porcentaje;

    }


    public static function avanceDetalladoMateria($id_materia){

        $AsignaturaGrupo = new AsignaturaGrupo();

        $query_asignatura_grupo = query('select asignatura_grupo_id from tr_materia where materia_id = '.$id_materia);

        $arreglo_asignatura_grupo = arreglo($query_asignatura_grupo);

        $query_modulos = $AsignaturaGrupo::consultaTodosModulos($arreglo_asignatura_grupo['asignatura_grupo_id']);

        $num_actividades_completadas=0;
        $num_actividades_contestadas=0;
        $sin_calificacion=0;
        $borrador=0;  
        $calificacion=0;
        $actividad=0;
        $calificacion_actividades=0;

        $actividades_totales=0;
        $actividades_contestadas=0;


        while ($arreglo_modulos = arreglo($query_modulos)) {
            $query_actividad = query('select tmfa.materia_fecha_actividad_id,ponderacion,calificacion,ta.actividad_id,actividad_nombre, ta.tipo_actividad_id,ta.actividad_nombre,ta.actividad_clave,ta.num_intentos,ta.actividad_nombre, estatus_actividad_id
            FROM tr_actividad ta
            left join (select actividad_id,materia_fecha_actividad_id,calificacion,estatus_actividad_id from tr_materia_fecha_actividad  where materia_id = ' . $id_materia . ' and estatus = 1 and estatus_actividad_id in (2,4,9,10)) tmfa on tmfa.actividad_id = ta.actividad_id 
            where ta.estatus=1 and modulo_id = ' . $arreglo_modulos['modulo_id'] . ' and tipo_actividad_id = 2  ORDER BY orden');


            $json_actividad = array();
            while ($arreglo_actividad = arreglo($query_actividad)) {

                $arreglo_actividad['calificacion'] = $arreglo_actividad['calificacion'] == 'null'? 0 : $arreglo_actividad['calificacion'];

    
                $actividades_totales++;
                if(!empty($arreglo_actividad['materia_fecha_actividad_id'])){
                    $actividades_contestadas++;
                }

                if($arreglo_actividad['estatus_actividad_id'] == 3){
                    $num_actividades_contestadas++;
                  }
        
                  if($arreglo_actividad['estatus_actividad_id']==1 || $arreglo_actividad['estatus_actividad_id']== 5){
                    $borrador++;
                  }
        
                  if($arreglo_actividad['estatus_actividad_id']==1 || $arreglo_actividad['estatus_actividad_id']== 5 || $arreglo_actividad['estatus_actividad_id']== 3 || $arreglo_actividad['estatus_actividad_id']== 6){
                    $sin_calificacion++;
                  }
        
                  if($arreglo_actividad['estatus_actividad_id']==2 || $arreglo_actividad['estatus_actividad_id']==4  || $arreglo_actividad['estatus_actividad_id']==9  || $arreglo_actividad['estatus_actividad_id']==10){
                    $actividad++;
                    
                    $calificacion_actividades +=$arreglo_actividad['calificacion'];
        
                    $num_actividades_contestadas++;
                    $num_actividades_completadas++;
        
                  }
            
                  $entero=$arreglo_actividad['calificacion']*$arreglo_actividad['ponderacion'];
                  $calificacion += $entero;  
            
            
            }

         }

         
         $suma=$calificacion/100;

         if ($actividad == 0) {
           $calif_acti = 0;
         }else{
           $calif_acti=$calificacion_actividades/$actividad;
           $calificacion = round($calif_acti, 2);
         }

         $arreglo['total']=$actividades_totales;
         $arreglo['contestadas']=$actividades_contestadas;
         
         $arreglo['incompletas']=$actividades_totales - $actividades_contestadas;
         $arreglo['actividadesSinCalificacion']=$sin_calificacion;
         $arreglo['actividadesBorrador']=$borrador;
         $arreglo['promedioActividades']=round($calificacion,2);
         $arreglo['promedioTotal']=$suma;
        

        return $arreglo;

    }

}




?>